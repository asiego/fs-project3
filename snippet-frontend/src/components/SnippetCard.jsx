export default function SnippetCard ({ snippet }) {
    return (
        <div className="snippet-card">
            <h3>{snippet.title}</h3>
            <p>{snippet.description}</p>
            <span>{snippet.language.toUpperCase()}</span>
            <pre>{snippet.code}</pre>
        </div>
    );
}

