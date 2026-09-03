import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export const metadata = {
  title: 'Gerenciador de Notas | Aula 5',
  description: 'Aplicação de CRUD de notas construída com Next.js consumindo API Express. Atividade 2 - Aula 5 SENAI.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
