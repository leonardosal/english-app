# 🇬🇧 English Learning App

Um aplicativo moderno e interativo para aprender inglês, inspirado no design do Duolingo. Aprenda vocabulário essencial através de flashcards organizados por categorias.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

## ✨ Características

### 🎯 Aprendizado Focado
- **700+ palavras** organizadas em 7 categorias
- Flashcards interativos com animações suaves
- Pronúncia fonética (IPA) para cada palavra
- 2+ exemplos de uso para cada item

### 📚 Categorias Disponíveis
- 🏠 **Substantivos** (100 palavras) - Pessoas, lugares, coisas
- 🏃 **Verbos** (100 palavras) - Ações e estados
- 🌟 **Adjetivos** (100 palavras) - Qualidades e descrições
- 👤 **Pronomes** (100 palavras) - Substituições e referências
- ⚡ **Advérbios** (100 palavras) - Modificadores
- 💬 **Expressões** (100 phrasal verbs) - Expressões idiomáticas
- 💭 **Frases** (100 frases) - Conversação essencial

### 🎨 Interface Moderna
- Design inspirado no Duolingo
- Modo claro/escuro
- Responsivo para mobile e desktop
- Animações fluidas e feedback visual
- Barra de progresso em tempo real

### 🔊 Recursos de Áudio
- Text-to-Speech integrado
- Pronúncia de palavras em inglês
- Suporte para diferentes sotaques

### 📊 Acompanhamento de Progresso
- Dashboard com estatísticas
- Progresso por categoria
- Palavras estudadas
- Sistema de conquistas

## 🚀 Tecnologias

- **Framework:** Next.js 14 com App Router
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Ícones:** Emojis nativos
- **Audio:** Web Speech API
- **Armazenamento:** LocalStorage
- **Deploy:** Vercel (ready)

## 📱 Capturas de Tela

### Tela Inicial
Interface limpa mostrando todas as categorias disponíveis com ícones coloridos e indicadores de progresso.

### Estudo por Flashcards
Sistema de flashcards com:
- Palavra em inglês
- Tradução em português
- Pronúncia fonética
- Exemplos de uso
- Botão de áudio

### Dashboard de Progresso
Visualização completa do progresso de aprendizado com estatísticas detalhadas.

## 🛠️ Instalação e Uso

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Getting Started

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/english-app.git

# Entre no diretório
cd english-app

# Instale as dependências
npm install
# ou
yarn install

# Execute o projeto
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📂 Estrutura do Projeto

```
english-app/
├── src/
│   ├── app/                    # App Router (Next.js 14)
│   │   ├── dashboard/          # Página de progresso
│   │   ├── study/[category]/   # Páginas de estudo dinâmicas
│   │   ├── globals.css         # Estilos globais
│   │   └── page.tsx           # Página inicial
│   ├── components/            # Componentes reutilizáveis
│   │   ├── Flashcard.tsx      # Componente de flashcard
│   │   └── ThemeToggle.tsx    # Toggle de tema
│   ├── data/                  # Dados das palavras
│   │   ├── nouns/            # Substantivos (4 arquivos)
│   │   ├── verbs/            # Verbos (4 arquivos)
│   │   ├── adjectives.ts     # Adjetivos
│   │   ├── pronouns.ts       # Pronomes
│   │   ├── adverbs.ts        # Advérbios
│   │   ├── expressions.ts    # Expressões
│   │   ├── phrases.ts        # Frases
│   │   ├── categories.ts     # Configuração das categorias
│   │   └── words.ts          # Interface TypeScript
│   └── hooks/                # Hooks customizados
│       ├── useProgress.ts    # Gerenciamento de progresso
│       └── useTextToSpeech.ts # Audio/pronuncia
├── public/                   # Arquivos estáticos
├── tailwind.config.js       # Configuração do Tailwind
└── README.md               # Este arquivo
```

## 🎯 Como Usar

1. **Escolha uma Categoria**: Na tela inicial, selecione uma das 7 categorias disponíveis
2. **Estude com Flashcards**: Navegue pelas palavras usando os botões "Anterior" e "Próximo"
3. **Ouça a Pronúncia**: Clique no ícone de som para ouvir a pronúncia
4. **Acompanhe o Progresso**: Veja sua evolução no dashboard
5. **Modo Escuro/Claro**: Use o toggle no canto superior direito

## 🎨 Personalização

### Adicionar Novas Palavras
1. Navegue até `src/data/`
2. Escolha a categoria apropriada
3. Adicione a nova palavra seguindo a interface `Word`:

```typescript
{
  id: number,
  english: string,
  portuguese: string,
  pronunciation: string,
  examples: [
    { english: string, portuguese: string },
    { english: string, portuguese: string }
  ]
}
```

### Adicionar Nova Categoria
1. Crie um novo arquivo em `src/data/`
2. Adicione a categoria em `src/data/categories.ts`
3. Escolha um ícone e cor para a categoria

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Ideias para Contribuição
- [ ] Adicionar mais categorias (preposições, conjunções, etc.)
- [ ] Sistema de gamificação com pontos e níveis
- [ ] Modo de quiz/teste
- [ ] Integração com APIs de tradução
- [ ] Exportar progresso para PDF
- [ ] Modo offline (PWA)
- [ ] Integração com redes sociais

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙋‍♂️ Suporte

Se você encontrar algum problema ou tiver sugestões:

- 🐛 Abra uma [Issue](https://github.com/seu-usuario/english-app/issues)
- 💬 Inicie uma [Discussion](https://github.com/seu-usuario/english-app/discussions)
- 📧 Entre em contato: seu-email@exemplo.com

## 🌟 Reconhecimentos

- Design inspirado no [Duolingo](https://duolingo.com)
- Ícones: Emojis Unicode
- Fontes: System fonts para melhor performance
- Inspiração: Comunidade de desenvolvedores Next.js

---

<div align="center">

**Desenvolvido com ❤️ para ajudar pessoas a aprender inglês**

[⭐ Dê uma estrela se este projeto te ajudou!](https://github.com/seu-usuario/english-app)

</div>
