import React from 'react';
import './PostCards.css';

export default function PostCards({ title, num_comments, author_fullname }) {
  return (
    <div className="posts-container">
      <h2 className="title">{title}</h2>
      <p className="comments">{num_comments} comments</p>
      <p className="author">submitted by {author_fullname}</p>
    </div>
  );
}
