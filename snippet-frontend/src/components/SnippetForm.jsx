import { useState} from 'react';
import { createSnippet } from '../api/snippets';

export default function SnippetForm({ onSnippetCreated }) {
    const [form, setForm] = useState({
        title: '',
        language: '',
        code: '',
        description: '',
        tags: ''
});

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await createSnippet({
            ...form,
            tags: form.tags.split(",").map(t => t.trim())
        });
        setForm({ 
            title: "", 
            language: "", 
            code: "", 
            description: "", 
            tags: "" });
        if (onSnippetCreated) onSnippetCreated(); 
    }

    return (
        <form onSubmit={handleSubmit}>
          <h2>Add Snippet</h2>
          <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
          <input name="language" placeholder="Language" value={form.language} onChange={handleChange} />
          <textarea name="code" placeholder="Code" value={form.code} onChange={handleChange} />
          <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
          <input name="tags" placeholder="Tags (comma separated)" value={form.tags} onChange={handleChange} />
          <button type="submit">Create Snippet</button>
        </form>
      );
    }