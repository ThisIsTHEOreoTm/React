import './App.css'
import React from 'react';
import { useState } from 'react';
import Header from './component/header';
import Form from './component/form2';
import ThemedButton from "./component/ThemedButton";
import ThemedText from "./component/ThemedText";
import { ThemeProvider } from "./component/ThemeContext";







function App() {
   const content = [
  {title: " React App", body: "This is my first React app!"},
  {title: " React App", body: "This is my second React app!"}
];
  const contentElement = content.map((item, index) => (
    <Header key={index} title={item.title}>
      <p>{item.body}</p>
    </Header>
  ));

  return (
    <>
      {/* {contentElement} */}
      <Form />
      <ThemeProvider>
        <ThemedButton />
        <ThemedText />
      </ThemeProvider>
    </>
  )
}
export default App





























