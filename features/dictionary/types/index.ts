export interface Sign {
  word: string;
  meaning: string;
  label: string;
  typology: string;
  path: string | null;
  image: string | null;
  contributor: string | null;
}

export interface Meaning {
  definition: Sign;
  signs: Sign[];
}

export interface ElixResponse {
  data: Meaning[];
  total: number;
}

