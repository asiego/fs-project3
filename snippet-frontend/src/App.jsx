import { useEffect, useState } from "react";
import SnippetForm from "./components/SnippetForm";
import SnippetList from "./components/SnippetList";
import { getSnippets } from "./api/snippets";

export default function App() {
  const [snippets, setSnippets] = useState([]);

  async function loadSnippets() {
    const data = await getSnippets();
    setSnippets(data);
  }

  useEffect(() => {
    loadSnippets();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Snippet Manager</h1>
      <SnippetForm />
      <SnippetList />
    </div>
  );
}