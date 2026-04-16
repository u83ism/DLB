# 雑記ブログ移行計画（blogリポジトリ）

## 概要

DLBに含まれていた雑記（2000〜2013年）を独立したブログサイトとして切り出す。
今後の雑記投稿もこのサイトで行う。

- リポジトリ: https://github.com/u83ism/blog
- 技術スタック: Astro + TypeScript
- ホスティング: GitHub Pages（予定）

## コンテンツ規模

| ファイル | 年 |
|---|---|
| `zakki.htm` | 2014（最終更新） |
| `zakki13.htm` | 2013 |
| `zakki12.htm` | 2012 |
| `zakki11.htm` | 2011 |
| `zakki10.htm` | 2010 |
| `zakki09.htm` | 2009 |
| `zakki08.htm` | 2008 |
| `zakki07.htm` | 2007 |
| `zakki06.htm` | 2006 |
| `zakki05.htm` | 2005 |
| `zakki04.htm` | 2004 |
| `zakki03.htm` | 2003 |
| `zakki02.htm` | 2002 |
| `zakki01.htm` | 2001 |
| `zakki00.htm` | 2000 |

合計15ファイル（約15年分）。各ファイル内は `<h2>YYYY/MM/DD</h2>` + `<p>` の繰り返し構造。

## 要件

### 機能
- タグシステム
- 日付フィルター（年・月別アーカイブ）
- 記事一覧ページ
- 個別記事ページ
- レスポンシブ対応

### CMSについて
当面はCMSなし。Astro Content Collections + markdownで管理。
VS Code でmarkdownを書いてgit pushする運用。

必要になった場合の候補:
- **Keystatic** - gitベース、Astro Content Collectionsと相性◎、コンテンツはgitに残るため閉鎖リスクなし
- **Decap CMS** - OSSのgitベースCMS、同様にコンテンツはgitに残る

## コンテンツ構造

```
src/content/posts/
├── 2000/
│   ├── 2000-04-08.md
│   └── ...
├── 2001/
│   └── ...
└── 2026/
    └── ...
```

### frontmatterスキーマ

```yaml
---
title: "タイトル（日付で自動生成も可）"
date: 2026-04-10
tags: ["雑記", "プロレス"]
---
```

## 移行作業

### HTMLからmarkdownへの変換方針
- `<h2>YYYY/MM/DD</h2>` → 個別ファイルに分割しfrontmatterのdateに
- `<b>` → `**太字**`
- `<a href="...">text</a>` → `[text](url)`
- `<font color="">` → 削除または代替表現
- `<br>` → 改行
- リンク切れは残しつつ、視覚的にわかるようにする（取り消し線等）

### タグ付け方針
既存記事のタグは移行時に手動付与。自動タグ付けは精度的に難しいため。
よく出てくるトピックから主要タグを設計してから移行する。

## ポータルへの追加

移行完了後、ゆうやみポータル（Portal リポジトリ）の `data.ts` に雑記ブログのエントリを追加。
