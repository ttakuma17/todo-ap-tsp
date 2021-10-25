import React from 'react';
import type { VFC } from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App: VFC = () => {
  return (
    <>
      <div>
        <RecoilRoot>
          <Header />
          <Footer />
        </RecoilRoot>
      </div>
    </>
  );
};

export default App;
