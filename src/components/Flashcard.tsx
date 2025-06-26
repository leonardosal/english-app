'use client';

import { useState } from 'react';
import { Word } from '@/data/words';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';

interface FlashcardProps {
  word: Word;
  onPlayAudio: () => void;
}

export default function Flashcard({ word, onPlayAudio }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showExamples, setShowExamples] = useState(false);
  const { speak } = useTextToSpeech();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setShowExamples(false);
  };

  const toggleExamples = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowExamples(!showExamples);
  };

  const playExample = (text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    speak(text);
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="perspective-1000">
        <div
          className={`relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={handleFlip}
        >
          {/* Front side - English word */}
          <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl shadow-xl border-b-4 border-blue-700 flex flex-col items-center justify-center p-6 active:border-b-2 active:mt-0.5">
            <div className="text-center">
              <div className="bg-blue-800 bg-opacity-80 rounded-full px-3 py-1 mb-4">
                <span className="text-xs font-medium text-white">INGLÊS</span>
              </div>
              <h2 className="text-4xl font-black mb-3 tracking-wide">{word.english}</h2>
              <p className="text-sm opacity-90 mb-6 font-mono bg-black bg-opacity-20 px-3 py-1 rounded-full">
                {word.pronunciation}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPlayAudio();
                }}
                className="bg-white text-blue-600 px-6 py-3 rounded-2xl font-bold hover:bg-blue-50 transition-all duration-200 shadow-lg border-b-3 border-gray-300 active:border-b-1 active:mt-0.5 flex items-center space-x-2 mb-3"
              >
                <span className="text-lg">🔊</span>
                <span>OUVIR</span>
              </button>
              <button
                onClick={toggleExamples}
                className="bg-blue-800 bg-opacity-80 text-white px-4 py-2 rounded-xl font-medium hover:bg-blue-900 hover:bg-opacity-80 transition-all duration-200 text-sm"
              >
                📝 EXEMPLOS
              </button>
            </div>
          </div>

          {/* Back side - Portuguese translation */}
          <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-duolingo-green to-green-600 text-white rounded-2xl shadow-xl border-b-4 border-green-700 flex flex-col items-center justify-center p-6 rotate-y-180 active:border-b-2 active:mt-0.5">
            <div className="text-center">
              <div className="bg-green-800 bg-opacity-80 rounded-full px-3 py-1 mb-4">
                <span className="text-xs font-medium text-white">PORTUGUÊS</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 opacity-90">Tradução:</h2>
              <p className="text-3xl font-black text-center leading-tight mb-6">{word.portuguese}</p>
              <button
                onClick={toggleExamples}
                className="bg-green-800 bg-opacity-80 text-white px-4 py-2 rounded-xl font-medium hover:bg-green-900 hover:bg-opacity-80 transition-all duration-200 text-sm"
              >
                📝 EXEMPLOS
              </button>
              <div className="mt-4 bg-green-800 bg-opacity-60 rounded-2xl px-4 py-2">
                <p className="text-sm font-medium text-white">✨ Muito bem!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Examples section */}
      {showExamples && (
        <div className="mt-6 bg-card-bg rounded-2xl shadow-lg border border-border p-4">
          <h3 className="text-lg font-bold text-text-primary mb-4 text-center">
            📝 Exemplos de Uso
          </h3>
          <div className="space-y-4">
            {word.examples.map((example, index) => (
              <div key={index} className="bg-gray-50 dark:bg-slate-600 rounded-xl p-3">
                <div className="flex items-start justify-between mb-2">
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 flex-1">
                    {example.english}
                  </p>
                  <button
                    onClick={(e) => playExample(example.english, e)}
                    className="ml-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    🔊
                  </button>
                </div>
                <p className="text-sm text-text-secondary">
                  {example.portuguese}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Tap indicator */}
      <div className="text-center mt-4">
        <p className="text-xs text-text-muted font-medium">
          {isFlipped ? '👆 Toque para ver a palavra' : '👆 Toque para ver a tradução'}
        </p>
      </div>
    </div>
  );
}