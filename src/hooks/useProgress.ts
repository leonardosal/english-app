'use client';

import { useState, useEffect } from 'react';
import { wordCategories } from '@/data/categories';

interface WordProgress {
  wordId: number;
  categoryId: string;
  studiedAt: string;
}

interface CategoryProgress {
  categoryId: string;
  wordsStudied: number;
  totalWords: number;
  percentage: number;
}

export const useProgress = () => {
  const [progress, setProgress] = useState<WordProgress[]>([]);

  useEffect(() => {
    const savedProgress = localStorage.getItem('english-app-progress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const markWordAsStudied = (wordId: number, categoryId: string) => {
    const newProgress = [...progress];
    const existingIndex = newProgress.findIndex(p => p.wordId === wordId && p.categoryId === categoryId);
    
    if (existingIndex === -1) {
      newProgress.push({
        wordId,
        categoryId,
        studiedAt: new Date().toISOString()
      });
      setProgress(newProgress);
      localStorage.setItem('english-app-progress', JSON.stringify(newProgress));
    }
  };

  const getTotalWordsStudied = (): number => {
    return progress.length;
  };

  const getCategoryProgress = (): CategoryProgress[] => {
    return wordCategories.map(category => {
      const categoryProgress = progress.filter(p => p.categoryId === category.id);
      const wordsStudied = categoryProgress.length;
      const totalWords = category.words.length;
      const percentage = totalWords > 0 ? Math.round((wordsStudied / totalWords) * 100) : 0;

      return {
        categoryId: category.id,
        wordsStudied,
        totalWords,
        percentage
      };
    });
  };

  const isWordStudied = (wordId: number, categoryId: string): boolean => {
    return progress.some(p => p.wordId === wordId && p.categoryId === categoryId);
  };

  const resetProgress = () => {
    setProgress([]);
    localStorage.removeItem('english-app-progress');
  };

  return {
    markWordAsStudied,
    getTotalWordsStudied,
    getCategoryProgress,
    isWordStudied,
    resetProgress
  };
};