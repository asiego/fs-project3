import axios from 'axios';

const API_URL = "https://fs-project2-v33l.onrender.com/api/snippets";

// GET all snippets
export const getSnippets = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// GET one snippet
export const getSnippet = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

// POST create snippet
export const createSnippet = async (data) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};

// PUT update snippet
export const updateSnippet = async (id, data) => {
  const res = await axios.put(`${API_URL}/${id}`, data);
  return res.data;
};

// DELETE snippet
export const deleteSnippet = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
