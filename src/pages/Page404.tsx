import React from 'react';
import type { VFC } from 'react';
import { Link } from 'react-router-dom';

export const Page404: VFC = () => {
  return (
    <div>
      <h1>Page404</h1>
      <Link to="/">Home Page</Link>
      <br />
    </div>
  );
};
