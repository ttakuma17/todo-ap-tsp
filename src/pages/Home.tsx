import React, { memo, VFC } from 'react';
import { Example } from '../components/Example';

export const Home: VFC = memo(() => {
  return (
    <div>
      <h1>Home Page</h1>
      <Example />
    </div>
  );
});

Home.displayName = 'Home';
