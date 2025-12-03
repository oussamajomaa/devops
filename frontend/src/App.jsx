// frontend/src/App.jsx
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchUsers = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/users');
      if (!res.ok) throw new Error('Erreur HTTP');
      const data = await res.json();   // ✅ manquant
      setUsers(data);                  // ✅ maintenant data existe
    } catch (err) {
      setError(err.message || 'Erreur inconnue');
    } finally {
      setLoading(false);
    }
  };

  fetchUsers();
}, []);


  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <strong>{u.name}</strong> ({u.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
