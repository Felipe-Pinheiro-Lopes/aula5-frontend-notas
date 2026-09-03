const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://aula5-api-notas.onrender.com/api/notes';

export async function getNotes() {
  const res = await fetch(API_URL, { cache: 'no-store' });
  if (!res.ok) throw new Error('Erro ao buscar notas');
  return res.json();
}

export async function createNote(titulo, texto) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ titulo, texto }),
  });
  if (!res.ok) throw new Error('Erro ao criar nota');
  return res.json();
}

export async function updateNote(id, titulo, texto) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ titulo, texto }),
  });
  if (!res.ok) throw new Error('Erro ao editar nota');
  return res.json();
}

export async function deleteNote(id) {
  const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Erro ao excluir nota');
  return res.json();
}
