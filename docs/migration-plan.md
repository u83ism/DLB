# DLB リニューアル移行計画

## フェーズ概要

| フェーズ | 内容 |
|---|---|
| Phase 1 | Astro環境構築・共通レイアウト作成 |
| Phase 2 | 既存コンテンツの移行・モダン化 |
| Phase 3 | 雑記をblogリポジトリに分離（別タスク） |

---

## Phase 1: Astro環境構築 ✅ 完了

### やること
- `npm create astro` でプロジェクト初期化 ✅
- TypeScript設定 ✅
- 共通レイアウト（Layout.astro）作成 ✅
  - ヘッダー（タイトル画像）✅
  - グローバルナビゲーション ✅
  - フッター ✅
- CSSリセット・ベーススタイル（Flexbox/Gridベース、レスポンシブ対応）✅
- GitHub Actions でのビルド・GitHub Pagesデプロイ設定 ✅
- トップページ（index.astro）作成 ✅

### 廃止する要素
- リンク集（撤廃）
- 掲示板・BBS・CGIへの参照（撤廃）
- 旧サーバー（u83ism.sakura.ne.jp）への絶対パスリンク（全修正）
- アクセスカウンター

---

## Phase 2: コンテンツ移行 ✅ 完了（ud/ mkro/ を除く）

### 移行対象と方針

#### プロフィール (`profile.htm`) ✅
- テーブルレイアウト → CSSで再現
- 内容を現状に更新（2014年時点のまま）

#### サイトの歴史 (`history.htm`) ✅
- そのままAstroページに移植

#### バトルロワイアル (`br/`) ✅
- 概要・名簿（BR1/BR2）をAstroページに移植
- コンテンツはOBRNとは独立して保持
- OBRN（https://obrn-d99b4.firebaseapp.com/）への相互リンクを設置

#### 自作オリバト
- UNLIMITED DARK (`ud/`) - 本文11章 + データページ（未着手）
- 魔法使いは虚構の楽園に踊る (`mkro/`) - 設定・募集等（未着手）
- いずれもDLBに残す（一次創作的コンテンツのため）

#### 魔術士オーフェン攻略 (`orphen/`) ✅
- PS2版攻略ページ群をAstroページに移植
- 概要・PS2版概要・ボス攻略・戦闘指南・隠し要素の5ページ

#### 大藪春彦 (`o-yabu/`) ✅
- 概要・レビュー・生還者追跡の3ページをAstroページに移植

### 共通の修正事項
- `<font>` タグ → CSS
- `<center>` タグ → CSS
- `align`/`bgcolor`/`cellpadding`/`nowrap` 等の非推奨属性 → CSS
- プレゼンテーション用テーブル → Flexbox/Gridに変換
- データ用テーブル（名簿等）は `<table>` のまま維持（セマンティクス的に正しい）
- 画像の `width`/`height` は維持しつつ、`border="0"` 等は削除
- viewport metaの追加

---

## Phase 3: 雑記の分離（blogリポジトリ）

別ドキュメント参照 → [blog-migration.md](./blog-migration.md)

---

## レガシーファイルについて

`legacy/` フォルダに移行前の全ファイルを保管。
参照・比較用として維持する。削除は移行完了確認後。
