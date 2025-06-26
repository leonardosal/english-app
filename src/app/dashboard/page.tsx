'use client';

import Link from 'next/link';
import { wordCategories } from '@/data/categories';
import ThemeToggle from '@/components/ThemeToggle';
import { useProgress } from '@/hooks/useProgress';

export default function Dashboard() {
  const { getTotalWordsStudied, getCategoryProgress, resetProgress } = useProgress();
  
  const totalWordsStudied = getTotalWordsStudied();
  const categoryProgress = getCategoryProgress();
  const totalWords = wordCategories.reduce((acc, cat) => acc + cat.words.length, 0);
  const overallProgress = totalWords > 0 ? Math.round((totalWordsStudied / totalWords) * 100) : 0;

  return (
    <div className="min-h-screen bg-duolingo-bg flex flex-col">
      {/* Header */}
      <div className="bg-card-bg shadow-sm border-b border-border px-4 py-3">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center space-x-4">
            <Link 
              href="/"
              className="text-text-secondary hover:text-text-primary text-xl"
            >
              ←
            </Link>
            <h1 className="text-xl font-bold text-text-primary">📊 Dashboard</h1>
          </div>
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <div className="w-8 h-8 bg-gray-300 dark:bg-slate-500 rounded-full flex items-center justify-center">
              <span className="text-sm">👤</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Welcome section */}
          <div className="mb-8">
            <h2 className="text-3xl font-black text-text-primary mb-2">
              Seu Progresso 📊
            </h2>
            <p className="text-lg text-text-secondary">
              Acompanhe suas palavras estudadas em cada categoria.
            </p>
          </div>

          {/* Main progress card */}
          <div className="bg-card-bg rounded-2xl shadow-lg border border-border p-8 mb-8">
            <div className="text-center mb-6">
              <h3 className="text-lg font-bold text-text-primary mb-4">
                📚 Total de Palavras Estudadas
              </h3>
              <div className="relative">
                <div className="text-6xl font-black text-duolingo-green mb-2">
                  {totalWordsStudied}
                </div>
                <div className="text-xl text-text-secondary">
                  de {totalWords} palavras
                </div>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-4">
                    <div 
                      className="bg-duolingo-green h-4 rounded-full transition-all duration-500 relative overflow-hidden"
                      style={{ width: `${overallProgress}%` }}
                    >
                      <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary mt-2">
                    {overallProgress}% concluído
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Category Progress */}
          <div className="bg-card-bg rounded-2xl shadow-lg border border-border p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-text-primary">
                📚 Progresso por Categoria
              </h3>
              <button
                onClick={resetProgress}
                className="text-sm text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-medium"
              >
                🗑️ Resetar Progresso
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {wordCategories.map((category) => {
                const progress = categoryProgress.find(p => p.categoryId === category.id);
                const wordsStudied = progress?.wordsStudied || 0;
                const percentage = progress?.percentage || 0;
                
                return (
                  <Link 
                    key={category.id} 
                    href={`/study/${category.id}`}
                    className="block group"
                  >
                    <div className="border border-border rounded-xl p-4 hover:shadow-md transition-all duration-200 group-hover:scale-105">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-2xl">{category.icon}</span>
                        <div className="flex-1">
                          <h4 className="font-bold text-text-primary">{category.name}</h4>
                          <p className="text-xs text-text-secondary">
                            {wordsStudied}/{category.words.length} palavras estudadas
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-duolingo-green">{percentage}%</p>
                        </div>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-3 mb-2">
                        <div 
                          className={`bg-gradient-to-r ${category.color} h-3 rounded-full transition-all duration-500`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      
                      <div className="text-center">
                        <span className="text-xs text-text-muted">
                          {percentage === 100 ? '✅ Categoria Completa!' : 'Clique para estudar'}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}