'use client';

export default function NoteForm({ form, onChange, onSubmit, onCancel, editing }) {
  return (
    <form className="note-form" onSubmit={onSubmit}>
      <h2 className="form-title">{editing ? '✏️ Editar Nota' : '+ Nova Nota'}</h2>

      <div className="form-group">
        <label htmlFor="titulo">Título</label>
        <input
          id="titulo"
          type="text"
          placeholder="Digite o título da nota..."
          value={form.titulo}
          onChange={(e) => onChange({ ...form, titulo: e.target.value })}
          required
          maxLength={80}
        />
      </div>

      <div className="form-group">
        <label htmlFor="texto">Texto</label>
        <textarea
          id="texto"
          placeholder="Digite o conteúdo da nota..."
          value={form.texto}
          onChange={(e) => onChange({ ...form, texto: e.target.value })}
          required
          rows={4}
          maxLength={500}
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {editing ? 'Salvar alterações' : 'Criar nota'}
        </button>
        {editing && (
          <button type="button" className="btn btn-ghost" onClick={onCancel}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}
