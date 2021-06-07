import React from 'react';

import User from './components/user/user.component';
import Post from './components/post/post.component';

import './App.css';

function App(props) {
  return (
    <div>
      <User userId = {5}></User>
      <Post postId = {15}></Post>
    </div>
  );
}

export default App;
