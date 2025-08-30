import './App.css'
import React from 'react';
import { useState } from 'react';
import Header from './component/header';
import Form from './component/form2';
import ThemedButton from "./component/ThemedButton";
import ThemedText from "./component/ThemedText";
import { ThemeProvider } from "./component/ThemeContext";
import { Route, Routes, Link } from 'react-router-dom';
import Posts from './component/posts';
import MyContext from './component/Context';
import PostDetails from './component/postDetails';



function App() {
   const content = [
  {title: " React App", body: "That's the home page"},
  {title: " React App", body: "That's the home page as well"}
];
  const contentElement = content.map((item, index) => (
    <Header key={index} title={item.title}>
      <p>{item.body}</p>
    </Header>
  ));
        let posts = [
        { id: 1, title: "Post 1", body: "This is the body of Post 1." },
        { id: 2, title: "Post 2", body: "This is the body of Post 2." },
        { id: 3, title: "Post 3", body: "This is the body of Post 3." }
      ];

        
  return (
    <MyContext.Provider value={posts}>
      {/* {contentElement} */}
      {/* <Form />
      <ThemeProvider>
        <ThemedButton />
        <ThemedText />
      </ThemeProvider> */}

      <div className='navigation'>
        <Link to="/form"><button>Form</button></Link>
        <Link to="/"><button>Home</button></Link>
        <Link to="/posts"><button>Posts</button></Link>
      </div>

      <Routes className='routes'>
         <Route path="/" element={contentElement} />
         <Route path="/form" element={<Form />} />
         <Route path="/posts" element={<Posts />} />
          <Route path="/PostDetails/:id" element={<PostDetails />} />
      </Routes>

    </MyContext.Provider>
  )
}
export default App




