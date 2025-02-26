import React from 'react';
import { Post } from '../data/posts'; 

 const PostCard: React.FC<{ post: Post }> = ({ post }) => (
    <div className="post-card">
      <h3>{post.title}</h3>
    </div>
  );
  
  export default PostCard;