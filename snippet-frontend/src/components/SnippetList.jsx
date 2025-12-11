import { useEffect, useState } from 'react';
import { getSnippets, deleteSnippet } from '../api/snippets';

export default function SnippetList({ reload }) {
    const [snippets, setSnippets] = useState([]);

    useEffect(() => {
        loadSnippets();
    }, [reload]);

    async function loadSnippets() {
        const data = await getSnippets();
        setSnippets(data);
    }

    async function handleDelete(id) {
        await deleteSnippet(id);
        loadSnippets();
    }

    return (
        <div>
            <h2>All Snippets</h2>
            {snippets.length == 0 && <p>No snippets available</p>}
            {snippets.map(snippet => (
                <div 
                key={snippet._id} 
                style={{border: "1px solid #ccc", margin: "10px", padding: "10px"}}>
                    <strong>{snippet.title}</strong> ({snippet.language})
                    <pre>{snippet.code}</pre>
                    <br />
                    <button onClick={() => handleDelete(snippet._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}