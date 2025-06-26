export interface Word {
  id: number;
  english: string;
  portuguese: string;
  pronunciation: string;
  examples: {
    english: string;
    portuguese: string;
  }[];
}