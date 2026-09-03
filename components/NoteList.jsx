'use client';

import NoteCard from './NoteCard';

export default function NoteList({ notes, loading, error, onEdit, onDelete }) {
  if (loading) {
    return (
      <div className="feedback-state">
        <div className="spinner" />
        <p>Carregando notas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="feedback-state error">
        <span className="feedback-icon">⚠️</span>
        <p>{error}</p>
      </div>
    );
  }

  if (notes.length === 0) {
    return (
      <div className="feedback-state empty">
        <span className="feedback-icon">📭</span>
        <p>Nenhuma nota encontrada. Crie a primeira!</p>
      </div>
    );
  }

  return (
    <section className="note-list">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
}
