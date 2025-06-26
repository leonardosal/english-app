import { Word } from './words';
import { nouns } from './nouns';
import { verbs } from './verbs';
import { adjectives } from './adjectives';
import { pronouns } from './pronouns';
import { adverbs } from './adverbs';
import { expressions } from './expressions';
import { phrases } from './phrases';

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  words: Word[];
}

export const wordCategories: Category[] = [
  {
    id: 'nouns',
    name: 'Substantivos',
    description: 'Palavras que nomeiam pessoas, lugares, coisas ou ideias',
    icon: '🏠',
    color: 'from-blue-500 to-blue-600',
    words: nouns
  },
  {
    id: 'verbs',
    name: 'Verbos',
    description: 'Palavras que expressam ações, estados ou processos',
    icon: '🏃',
    color: 'from-green-500 to-green-600',
    words: verbs
  },
  {
    id: 'adjectives',
    name: 'Adjetivos',
    description: 'Palavras que descrevem ou qualificam substantivos',
    icon: '🌟',
    color: 'from-purple-500 to-purple-600',
    words: adjectives
  },
  {
    id: 'pronouns',
    name: 'Pronomes',
    description: 'Palavras que substituem ou se referem a substantivos',
    icon: '👤',
    color: 'from-orange-500 to-orange-600',
    words: pronouns
  },
  {
    id: 'adverbs',
    name: 'Advérbios',
    description: 'Palavras que modificam verbos, adjetivos ou outros advérbios',
    icon: '⚡',
    color: 'from-red-500 to-red-600',
    words: adverbs
  },
  {
    id: 'expressions',
    name: 'Expressões',
    description: 'Expressões idiomáticas e phrasal verbs mais comuns',
    icon: '💬',
    color: 'from-teal-500 to-teal-600',
    words: expressions
  },
  {
    id: 'phrases',
    name: 'Frases',
    description: 'Frases essenciais para conversação do dia a dia',
    icon: '💭',
    color: 'from-pink-500 to-pink-600',
    words: phrases
  }
];