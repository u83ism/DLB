# データ分離リファクタリング仕様

## 概要

ページ frontmatter に直接埋め込まれていた大量データを `src/data/` に移動し、
ロジック関数を `src/lib/` に移動する。型定義は `src/types/` に集約する。

## 対象スコープ

### HIGH（大量データ移動）

| 移動元 | 移動先 | データ内容 |
|--------|--------|-----------|
| `pages/orphen/boss/index.astro` | `src/data/orphen-bosses.ts` | ボス11体の攻略データ（225行） |
| `pages/o-yabu/review/index.astro` | `src/data/o-yabu-reviews.ts` | レビュー120作品超（240行） |
| `pages/o-yabu/survivor/index.astro` | `src/data/o-yabu-survivor.ts` | 生還者データ3配列（166行） |
| `pages/mkro/dic/index.astro` | `src/data/mkro-terms.ts` | 用語辞典4カテゴリ（138行） |
| `pages/ud/netadata/index.astro` | `src/data/ud-characters.ts` | UD生徒データ24名（229行） |

### MEDIUM（ロジック分離・データ統合）

| 移動元 | 移動先 | 内容 |
|--------|--------|------|
| `pages/mkro/dic/index.astro` の `splitDesc()` | `src/lib/text.ts` | Pure関数の切り出し |
| `pages/mkro/ndm/index.astro` + `pages/mkro/ndf/index.astro` | `src/data/mkro-characters.ts` | 男女生徒データを `gender` フィールドで統合 |
| 各ページの型定義 | `src/types/index.ts` | 型の集約 |

---

## 型定義仕様（src/types/index.ts）

```typescript
// orphen/boss
export type Defense = { readonly 物理: number; readonly 絶対: number; readonly 暗黒: number; readonly 風: number; readonly 火炎: number; readonly 光電: number; };
export type BossEnemy = { readonly name: string; readonly hp: number; readonly def: number; readonly attr: string; readonly defense: Defense; readonly attacks: string; };
export type BossEntry = { readonly id: string; readonly name: string; readonly chapter: string; readonly enemies: ReadonlyArray<BossEnemy>; readonly guide: string; };

// o-yabu/review
export type ReviewEntry = { readonly id: string; readonly title: string; readonly series?: string; readonly body: string; readonly pending?: true; };
export type RankSection = { readonly rank: string; readonly label: string; readonly color: string; readonly entries: readonly ReviewEntry[]; };

// o-yabu/survivor
export type SurvivorEntry = { readonly work: string; readonly hero: string; readonly detail: string; };

// mkro/dic
export type PlaceTerm = { readonly anchor: string; readonly term: string; readonly desc: string; };
export type MagicTerm = { readonly anchor: string; readonly term: string; readonly desc: string; readonly hasPyramid?: true; };
export type ClubTerm = { readonly anchor: string; readonly term: string; readonly desc: string; };
export type OtherTerm = { readonly anchor: string; readonly term: string; readonly desc: string; };

// ud/netadata
export type UdStudent = { readonly num: number; readonly name: string; readonly supply: string; readonly holding: string; readonly killer: string; readonly cause: string; readonly note: string; };

// mkro/ndm + mkro/ndf
export type MkroProfile = { readonly anchor: string; readonly name: string; readonly origin: string; readonly enroll: string; readonly note: string; };
export type MkroCharacter = MkroProfile & { readonly gender: 'male' | 'female'; };
```

---

## ファイル分割方針

### src/data/ ファイル単位

- `orphen-bosses.ts` — `bosses: readonly BossEntry[]` を export
- `o-yabu-reviews.ts` — `ranks: readonly RankSection[]` を export
- `o-yabu-survivor.ts` — `survived`, `dead`, `unknown`: `readonly SurvivorEntry[]` を export
- `mkro-terms.ts` — `placeTerms`, `magicTerms`, `clubTerms`, `otherTerms` を export
- `ud-characters.ts` — `males`, `females`: `readonly UdStudent[]` を export
- `mkro-characters.ts` — `maleProfiles`, `femaleProfiles`: `readonly MkroCharacter[]` を export

### src/lib/text.ts

```typescript
export function splitDesc(desc: string): { before: string[]; after: string[] }
```

---

## ページ側の変更方針

データ移動後、各ページの frontmatter は以下のみに削減する：

```typescript
import { bosses } from '@/data/orphen-bosses'; // インポートのみ
const base = import.meta.env.BASE_URL;
```

型定義のインポートは必要に応じて `@/types` から行う。

---

## 実装ステータス

- [x] `src/types/index.ts` 作成
- [x] `src/lib/text.ts` 作成（splitDesc）
- [x] `src/data/orphen-bosses.ts` 作成
- [x] `pages/orphen/boss/index.astro` 更新
- [x] `src/data/o-yabu-reviews.ts` 作成
- [x] `pages/o-yabu/review/index.astro` 更新
- [x] `src/data/o-yabu-survivor.ts` 作成
- [x] `pages/o-yabu/survivor/index.astro` 更新
- [x] `src/data/mkro-terms.ts` 作成
- [x] `pages/mkro/dic/index.astro` 更新
- [x] `src/data/ud-characters.ts` 作成
- [x] `pages/ud/netadata/index.astro` 更新
- [x] `src/data/mkro-characters.ts` 作成
- [x] `pages/mkro/ndm/index.astro` 更新
- [x] `pages/mkro/ndf/index.astro` 更新
