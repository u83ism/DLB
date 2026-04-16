// 更新履歴エントリの型定義
export type UpdateEntry = {
  readonly date: string; // YYYY-MM-DD 形式
  readonly items: readonly string[];
};

// 手動で管理する更新エントリ
// コンテンツ追加以外のサイト変更（リニューアル・機能追加等）はここに記載する
export const manualUpdates: readonly UpdateEntry[] = [
  { date: '2026-04-14', items: ['サイトリニューアル'] },
  { date: '2021-03-21', items: ['さくらインターネットからGitHub Pagesへ移転'] },
];
