'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Flashcard from '@/components/Flashcard';
import { wordCategories } from '@/data/categories';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';
import { useProgress } from '@/hooks/useProgress';
import ThemeToggle from '@/components/ThemeToggle';

export default function StudyCategory() {
  const params = useParams();
  const categoryId = params.category as string;
  
  const category = wordCategories.find(cat => cat.id === categoryId);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { speak } = useTextToSpeech();
  const { markWordAsStudied, getCategoryProgress } = useProgress();

  if (!category) {
    return (
      <div className="min-h-screen bg-duolingo-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Categoria não encontrada</h1>
          <Link 
            href="/"
            className="bg-duolingo-green text-white px-6 py-3 rounded-2xl font-bold hover:bg-green-600 transition-colors"
          >
            Voltar ao Menu
          </Link>
        </div>
      </div>
    );
  }

  const currentWord = category.words[currentIndex];
  const categoryProgress = getCategoryProgress().find(p => p.categoryId === categoryId);
  const wordsStudied = categoryProgress?.wordsStudied || 0;
  const progress = ((currentIndex + 1) / category.words.length) * 100;

  const nextCard = () => {
    // Marcar palavra atual como estudada
    markWordAsStudied(currentWord.id, categoryId);
    
    if (currentIndex < category.words.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const playAudio = () => {
    speak(currentWord.english);
  };

  return (
    <div className="min-h-screen bg-duolingo-bg flex flex-col">
      {/* Header */}
      <div className="bg-card-bg shadow-sm border-b border-border px-4 py-3">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <div className="flex items-center space-x-3">
            <Link 
              href="/"
              className="text-text-secondary hover:text-text-primary text-xl"
            >
              ←
            </Link>
            <div className="flex items-center space-x-2">
              <span className="text-xl">{category.icon}</span>
              <h1 className="text-lg font-bold text-text-primary">{category.name}</h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              href="/dashboard"
              className="text-text-secondary hover:text-text-primary transition-colors"
              title="Dashboard"
            >
              📊
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 px-4 py-6">
        <div className="max-w-md mx-auto">
          {/* Progress section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-bold text-text-primary">{category.name}</h2>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-medium text-duolingo-green bg-green-100 dark:bg-green-900 px-2 py-1 rounded-full">
                  {wordsStudied} estudadas
                </span>
                <span className="text-sm font-medium text-text-secondary bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded-full">
                  {currentIndex + 1}/{category.words.length}
                </span>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-3 mb-2">
              <div 
                className={`bg-gradient-to-r ${category.color} h-3 rounded-full transition-all duration-500 relative overflow-hidden`}
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
              </div>
            </div>
            <p className="text-xs text-text-secondary text-center">
              {Math.round(progress)}% concluído
            </p>
          </div>

          {/* Description */}
          <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 p-4 rounded-r-lg mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-blue-400 text-lg">ℹ️</span>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>{category.name}:</strong> {category.description}
                </p>
              </div>
            </div>
          </div>

          {/* Lesson card */}
          <div className="bg-card-bg rounded-2xl shadow-lg border border-border p-6 mb-6">
            <div className="text-center mb-4">
              <div className={`inline-flex items-center bg-gradient-to-r ${category.color} text-white px-3 py-1 rounded-full text-sm font-medium mb-3`}>
                {category.icon} {category.name}
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">
                Palavra {currentIndex + 1} de {category.words.length}
              </h3>
            </div>
            
            <Flashcard word={currentWord} onPlayAudio={playAudio} />
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={prevCard}
              disabled={currentIndex === 0}
              className="flex-1 py-4 bg-gray-100 text-gray-700 rounded-2xl font-bold disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed hover:bg-gray-200 transition-all duration-200 border-b-4 border-gray-300 disabled:border-gray-200 active:border-b-2 active:mt-0.5"
            >
              ← ANTERIOR
            </button>
            <button
              onClick={nextCard}
              disabled={currentIndex === category.words.length - 1}
              className="flex-1 py-4 bg-duolingo-green text-white rounded-2xl font-bold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-green-600 transition-all duration-200 border-b-4 border-green-700 disabled:border-gray-400 active:border-b-2 active:mt-0.5"
            >
              {currentIndex === category.words.length - 1 ? 'CONCLUÍDO!' : 'PRÓXIMO →'}
            </button>
          </div>

          {/* Completion message */}
          {wordsStudied === category.words.length && (
            <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-400 p-4 rounded-r-lg mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <span className="text-green-400 text-lg">🎉</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-800 dark:text-green-200">
                    <strong>Parabéns!</strong> Você estudou todas as {category.words.length} palavras de {category.name}!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Back to menu button */}
          <div className="text-center">
            <Link 
              href="/"
              className="inline-flex items-center text-text-secondary hover:text-text-primary font-medium text-sm"
            >
              ← Voltar ao Menu Principal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}