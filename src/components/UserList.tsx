import { useState, useEffect } from "react";
import api from "../api/api";
import UserCard from "./UserCard";
import Posts from "./Posts";
import "../styles/UserList.css";

interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get<User[]>("users");
        setUsers(response.data);
      } catch (error) {
        setError("Ошибка при загрузке пользователей");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <h1>Список пользователей</h1>
      {loading && <p>Загрузка...</p>}
      {error && <p className="error">{error}</p>}
      <div className="user-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} onClick={() => setSelectedUserId(user.id)} />
        ))}
      </div>
      {selectedUserId && <Posts userId={selectedUserId} />}
    </div>
  );
};

export default UserList;
