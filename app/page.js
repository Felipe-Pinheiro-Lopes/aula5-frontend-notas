'use client';

import { useState, useEffect } from 'react';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import { getNotes, createNote, updateNote, deleteNote } from '../services/api';

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ titulo: '', texto: '' });
  const [editing, setEditing] = useState(null); // nota sendo editada
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchNotes = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getNotes();
      setNotes(data);
    } catch (err) {
      setError('Não foi possível carregar as notas. Verifique a conexão com a API.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (editing) {
        await updateNote(editing.id, form.titulo, form.texto);
        showToast('Nota atualizada com sucesso!');
        setEditing(null);
      } else {
        await createNote(form.titulo, form.texto);
        showToast('Nota criada com sucesso!');
      }
      setForm({ titulo: '', texto: '' });
      fetchNotes();
    } catch {
      showToast('Erro ao salvar a nota. Tente novamente.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (note) => {
    setEditing(note);
    setForm({ titulo: note.titulo, texto: note.texto });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditing(null);
    setForm({ titulo: '', texto: '' });
  };

  const handleDelete = async (id) => {
    if (!confirm('Tem certeza que deseja excluir esta nota?')) return;
    try {
      await deleteNote(id);
      showToast('Nota excluída com sucesso!');
      fetchNotes();
    } catch {
      showToast('Erro ao excluir a nota.', 'error');
    }
  };

  return (
    <main className="container">
      {/* Toast de feedback */}
      {toast && (
        <div className={`toast toast-${toast.type}`}>
          {toast.type === 'success' ? '✅' : '❌'} {toast.message}
        </div>
      )}

      {/* Header */}
      <header className="app-header">
        <h1 className="app-title">
          <span className="app-icon">📝</span>
          Gerenciador de Notas
        </h1>
        <p className="app-subtitle">Crie, edite e organize suas notas de forma simples</p>
        <div className="note-count">
          {!loading && !error && (
            <span>{notes.length} {notes.length === 1 ? 'nota' : 'notas'}</span>
          )}
        </div>
      </header>

      {/* Formulário */}
      <NoteForm
        form={form}
        onChange={setForm}
        onSubmit={handleSubmit}
        onCancel={handleCancelEdit}
        editing={editing}
        submitting={submitting}
      />

      {/* Divisor */}
      <div className="divider">
        <span>Suas notas</span>
      </div>

      {/* Lista de notas */}
      <NoteList
        notes={notes}
        loading={loading}
        error={error}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </main>
  );
}
