import React from 'react';
import type { VFC } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App: VFC = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default App;
