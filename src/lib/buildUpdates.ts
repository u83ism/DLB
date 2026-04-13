// 更新履歴の構築ロジック
import type { UpdateEntry } from '@/data/updates';

// コンテンツコレクション等から自動集計する際に使うメタデータ型
// 将来的にコンテンツコレクションを追加した際はここを拡張する
export type ContentMeta = {
  readonly title: string;
  readonly section: string; // 例: 'バトルロワイアル'
  readonly publishedAt?: string; // YYYY-MM-DD
  readonly updatedAt?: string;   // YYYY-MM-DD
};

// 手動エントリとコンテンツメタデータをマージし、日付降順で返す
export function buildUpdates(
  manual: readonly UpdateEntry[],
  contents: readonly ContentMeta[] = [],
  limit = 5,
): readonly UpdateEntry[] {
  // コンテンツメタデータから更新エントリを生成
  const autoEntries = deriveEntriesFromContents(contents);

  // 手動エントリとコンテンツ由来エントリを同じ日付でまとめる
  const merged = mergeByDate([...manual, ...autoEntries]);

  return merged
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}

// 同じ日付のエントリをまとめる
function mergeByDate(entries: readonly UpdateEntry[]): readonly UpdateEntry[] {
  const map = new Map<string, string[]>();
  for (const entry of entries) {
    const existing = map.get(entry.date) ?? [];
    map.set(entry.date, [...existing, ...entry.items]);
  }
  return Array.from(map.entries()).map(([date, items]) => ({ date, items }));
}

// コンテンツメタデータから UpdateEntry を生成する
function deriveEntriesFromContents(
  contents: readonly ContentMeta[],
): readonly UpdateEntry[] {
  const result: UpdateEntry[] = [];
  for (const c of contents) {
    if (c.publishedAt) {
      result.push({ date: c.publishedAt, items: [`${c.section}「${c.title}」を公開`] });
    }
    if (c.updatedAt && c.updatedAt !== c.publishedAt) {
      result.push({ date: c.updatedAt, items: [`${c.section}「${c.title}」を更新`] });
    }
  }
  return result;
}

// YYYY-MM-DD → YYYY/MM/DD の表示フォーマット
export function formatUpdateDate(iso: string): string {
  return iso.replaceAll('-', '/');
}
