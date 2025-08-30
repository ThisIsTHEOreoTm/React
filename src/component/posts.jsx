import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import { useContext } from 'react';
import MyContext from './Context';
import './posts.css'


export default function Posts() {
  const posts = useContext(MyContext);
  const Post = posts.map((post) => (

    <Link key={post.id} to={`/PostDetails/${post.id}`}>
      <div  className="Post">
        <h2>{post.title}</h2>
      </div>
    </Link>

  ));

    return (
        <div className="Posts">
          {Post}
        </div>

    )
}