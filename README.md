# aula5-frontend-notas

Gerenciador de notas com CRUD completo, construído com **Next.js + React**.  
Consome a API REST `aula5-api-notas` hospedada no Render.  
Atividade 2 – Aula 5 | Frameworks Front-end | SENAI

## Funcionalidades

- 📋 **Listar** todas as notas
- ➕ **Criar** nova nota (título + texto)
- ✏️ **Editar** nota existente
- 🗑️ **Excluir** nota com confirmação
- ✅ Feedback visual (toast de sucesso/erro)
- ⏳ Estado de loading e tratamento de erros
- 📱 Layout responsivo (mobile + desktop)

## Como executar localmente

```bash
npm install
```

Crie o arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api/notes
```

```bash
npm run dev
```

Acesse: `http://localhost:3000`

> ⚠️ A API Express deve estar rodando localmente na porta 3000 para o desenvolvimento local funcionar.

## Deploy

Frontend publicado na **Vercel**: [https://aula5-frontend-notas.vercel.app](https://aula5-frontend-notas.vercel.app)

Configure a variável de ambiente na Vercel:
- **Key**: `NEXT_PUBLIC_API_URL`
- **Value**: URL do Render (ex: `https://aula5-api-notas.onrender.com/api/notes`)

## Tecnologias

- Next.js (App Router)
- React (useState, useEffect)
- CSS customizado (dark mode, glassmorphism)
- Fonte Outfit (Google Fonts)
- Vercel (deploy)

## Repositório da API

[https://github.com/Felipe-Pinheiro-Lopes/aula5-api-notas](https://github.com/Felipe-Pinheiro-Lopes/aula5-api-notas)
