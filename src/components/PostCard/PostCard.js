import React from 'react';
import './PostCard.css';

export default function PostCards({ title, num_comments, author_fullname }) {
  return (
    <div className="posts-container">
      <h3 className="title">{title}</h3>
      <span className="details">
        <p className="comments">{num_comments} comments</p>
        <p className="author">submitted by {author_fullname}</p>
      </span>
    </div>
  );
}
