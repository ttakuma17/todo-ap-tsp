import React, { memo, VFC } from 'react';

export const Footer: VFC = memo(() => {
  return (
    <footer className="bg-blue-500 p-2 block align-middle">
      <p className="text-white mt-0 mb-0 text-right">Try to complete todo !</p>
    </footer>
  );
});

Footer.displayName = 'Footer';
