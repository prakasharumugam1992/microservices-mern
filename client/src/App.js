import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';
import './App.css';

export default ()=>{
  return (
    <div className="App">
      <h1>Create Posts</h1>
      <PostCreate />
      <PostList />
    </div>
  );
}
