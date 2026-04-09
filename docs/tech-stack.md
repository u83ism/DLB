# 技術スタック方針

## 採用技術

**TypeScript + Astro**

### 選定理由
- コンテンツ重視の静的サイトに最適なSSG
- Cradle 2 Grave（C2G）での実績・ノウハウあり
- TypeScriptファーストでContent Collectionsによる型安全なコンテンツ管理
- GitHub Pages（静的出力）と相性良好

## ゆうやみサイト群のスタック分布

| サイト | スタック | 状態 |
|---|---|---|
| ゆうやみポータル | Vue.js + TS | 稼働中 |
| Don't Look Back (DLB) | **Astro + TS** | リニューアル予定 |
| 雑記ブログ | **Astro + TS** | 新規構築予定 |
| Cradle 2 Grave | Astro + TS | 稼働中 |
| OBRN | React + TS | 稼働中 |
| 21世紀パワーボム | jQuery | リニューアル待ち |

## ホスティング

GitHub Pages（現状維持）。Astroの静的出力 + GitHub Actionsでビルド・デプロイ。

## レガシー状況（移行前）

- 純HTML (.htm) + CSS、ビルドツールなし
- テンプレートなし（68ファイルにヘッダー・ナビがコピペ）
- `<font>`、`<center>`、`align`、`bgcolor`、`cellpadding` 等の非推奨属性多数
- テーブルレイアウト多数（データ用途含む）、`<table>` 153箇所
- レスポンシブ非対応（viewport metaなし）
- floatベースのCSS（Flexbox/Grid未使用）
- 旧ホスト（u83ism.sakura.ne.jp）への絶対パスリンクが全ページに残存
