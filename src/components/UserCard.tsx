import React from 'react';
import { User } from '../data/users'; 

const UserCard: React.FC<{ user: User }> = ({ user }) => (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Адрес: {user.address}</p>
    </div>
  );
  
  export default UserCard;;