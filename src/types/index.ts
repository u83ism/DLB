// ===== orphen/boss =====

export type Defense = {
  readonly 物理: number;
  readonly 絶対: number;
  readonly 暗黒: number;
  readonly 風: number;
  readonly 火炎: number;
  readonly 光電: number;
};

export type BossEnemy = {
  readonly name: string;
  readonly hp: number;
  readonly def: number;
  readonly attr: string;
  readonly defense: Defense;
  readonly attacks: string;
};

export type BossEntry = {
  readonly id: string;
  readonly name: string;
  readonly chapter: string;
  readonly enemies: ReadonlyArray<BossEnemy>;
  readonly guide: string;
};

// ===== o-yabu/review =====

export type ReviewEntry = {
  readonly id: string;
  readonly title: string;
  readonly series?: string;
  readonly body: string;
  readonly pending?: true;
};

export type RankSection = {
  readonly rank: string;
  readonly label: string;
  readonly color: string;
  readonly entries: readonly ReviewEntry[];
};

// ===== o-yabu/survivor =====

export type SurvivorEntry = {
  readonly work: string;
  readonly hero: string;
  readonly detail: string;
};

// ===== mkro/dic =====

export type PlaceTerm = {
  readonly anchor: string;
  readonly term: string;
  readonly desc: string;
};

export type MagicTerm = {
  readonly anchor: string;
  readonly term: string;
  readonly desc: string;
  readonly hasPyramid?: true;
};

export type ClubTerm = {
  readonly anchor: string;
  readonly term: string;
  readonly desc: string;
};

export type OtherTerm = {
  readonly anchor: string;
  readonly term: string;
  readonly desc: string;
};

// ===== ud/netadata =====

export type UdStudent = {
  readonly num: number;
  readonly name: string;
  readonly supply: string;
  readonly holding: string;
  readonly killer: string;
  readonly cause: string;
  readonly note: string;
};

// ===== mkro/ndm + mkro/ndf =====

export type MkroProfile = {
  readonly anchor: string;
  readonly name: string;
  readonly origin: string;
  readonly enroll: string;
  readonly note: string;
};

export type MkroCharacter = MkroProfile & {
  readonly gender: 'male' | 'female';
};
