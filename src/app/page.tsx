'use client';

import Link from 'next/link';
import { wordCategories } from '@/data/categories';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen bg-duolingo-bg flex flex-col">
      {/* Header */}
      <div className="bg-card-bg shadow-sm border-b border-border px-4 py-3">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-text-primary">📚 English App</h1>
          </div>
          <div className="flex items-center space-x-3">
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
      <div className="flex-1 px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Welcome section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-text-primary mb-4">
              Escolha uma Categoria
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Aprenda inglês estudando diferentes tipos de palavras. Cada categoria contém 10 palavras essenciais com áudio e tradução.
            </p>
          </div>

          {/* Categories grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {wordCategories.map((category) => (
              <Link 
                key={category.id} 
                href={`/study/${category.id}`}
                className="block group"
              >
                <div className={`bg-gradient-to-br ${category.color} rounded-2xl shadow-lg border-b-4 border-opacity-30 border-gray-800 p-6 text-white transition-all duration-200 group-hover:scale-105 group-active:scale-95 group-active:border-b-2 group-active:mt-0.5`}>
                  <div className="text-center">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-black mb-2">{category.name}</h3>
                    <p className="text-sm opacity-90 mb-4 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-8">
            <p className="text-text-secondary mb-4">
              Comece sua jornada de aprendizado escolhendo uma categoria acima!
            </p>
            <div className="text-sm text-text-muted">
              💡 Dica: Comece com substantivos e verbos, depois pratique expressões e frases do dia a dia
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
