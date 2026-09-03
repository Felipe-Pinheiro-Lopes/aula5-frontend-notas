'use client';

export default function NoteCard({ note, onEdit, onDelete }) {
  const formatDate = (iso) => {
    return new Date(iso).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <article className="note-card">
      <div className="note-card-header">
        <h3 className="note-title">{note.titulo}</h3>
        <div className="note-actions">
          <button
            className="btn-icon btn-edit"
            onClick={() => onEdit(note)}
            title="Editar nota"
            aria-label={`Editar nota: ${note.titulo}`}
          >
            ✏️
          </button>
          <button
            className="btn-icon btn-delete"
            onClick={() => onDelete(note.id)}
            title="Excluir nota"
            aria-label={`Excluir nota: ${note.titulo}`}
          >
            🗑️
          </button>
        </div>
      </div>
      <p className="note-text">{note.texto}</p>
      <footer className="note-footer">
        <span>📅 Criado em: {formatDate(note.criadoEm)}</span>
        {note.atualizadoEm !== note.criadoEm && (
          <span>✏️ Editado: {formatDate(note.atualizadoEm)}</span>
        )}
      </footer>
    </article>
  );
}
