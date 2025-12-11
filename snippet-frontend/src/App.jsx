import { useEffect, useState } from "react";
import SnippetForm from "./components/SnippetForm";
import SnippetList from "./components/SnippetList";

export default function App() {
  const [reload, setReload] = useState(0);

  function handleSnippetCreated() {
    setReload(prev => prev + 1); // Trigger reload
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Code Snippet Library</h1>
      <SnippetForm onSnippetCreated={handleSnippetCreated} />
      <SnippetList reload={reload} />
    </div>
  );
}