# Don't Look Back - リニューアル概要

## サイト概要

- URL: https://u83ism.github.io/DLB/
- 運営開始: 1999年
- ホスティング: GitHub Pages
- 管理人: ゆうやみ（@u83unlimited）

よろず系個人サイト。プロレス・ゲーム部門を別サイトに切り離した後の残り全部を扱う。

## コンテンツ一覧

| ディレクトリ | 内容 |
|---|---|
| `br/` | バトルロワイアル（概要・名簿） |
| `ud/` | 自作オリバト「UNLIMITED DARK」（本文11章 + データ） |
| `mkro/` | 自作オリバト「魔法使いは虚構の楽園に踊る」 |
| `orphen/` | 魔術士オーフェン PS2版攻略 |
| `o-yabu/` | 大藪春彦作品レビュー・考察 |
| `profile/` | プロフィール（Markdown + ProfileLayout.astro） |
| `history/` | サイトの歴史 |

### 撤廃するコンテンツ
- リンク集（リンク切れ多数、SNS時代に不要）
- 掲示板・CGI系（GitHub Pages移転時点で機能停止済み）

## エコシステムにおける位置づけ

```
ゆうやみポータル (https://u83-portal.web.app/)
├── Don't Look Back (DLB) ← このリポジトリ
├── 雑記ブログ (blog リポジトリ) ← 新規構築予定
├── Cradle 2 Grave (ゲーム系)
├── OBRN (オリバトDB・リンク集) → DLBへのリンクあり
└── 21世紀パワーボム (プロレス系)
```

OBRNはオリバト（SS）のリンク集・DBというコンセプトなので、DLBのBRコンテンツとは独立して並存。OBRN→DLBへのリンクを張る形をとる。
