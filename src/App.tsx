import React, { useState } from 'react';
import UserCard from './components/UserCard';
import PostCard from './components/Posts';
import { users } from '../src/data/users'; 
import { posts } from '../src/data/posts';
import './App.css';

const App: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null); 

  const handleUserClick = (userId: number) => {
    setSelectedUserId(userId); 
  };

  return (
    <div className="app">
      <h1>Пользователи</h1>
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} onClick={() => handleUserClick(user.id)}>
            <UserCard user={user} />
          </div>
        ))}
      </div>

      {selectedUserId && (
        <div className="posts">
          <h2>Посты пользователя</h2>
          {posts
            .filter((post) => post.userId === selectedUserId)
            .map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
        </div>
      )}
    </div>
  );
};

export default App;