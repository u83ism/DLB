// テキスト変換ユーティリティ（Pure関数）

/**
 * ---PYRAMID--- マーカーで説明文を前後に分割する。
 * mkro/dic の魔法用語で使用する難易度ピラミッド図の挿入位置を示す。
 */
export function splitDesc(desc: string): { readonly before: readonly string[]; readonly after: readonly string[] } {
  const parts = desc.split('---PYRAMID---');
  return {
    before: parts[0].split('\n').filter((l) => l.trim()),
    after: parts[1] ? parts[1].split('\n').filter((l) => l.trim()) : [],
  };
}
