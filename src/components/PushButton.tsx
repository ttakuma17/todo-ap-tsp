import React, { memo, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClickAction: () => void;
};

export const PushButton = memo((props: Props) => {
  const { children, onClickAction } = props;
  return (
    <>
      <button
        type="button"
        className="text-white rounded-full m-1 bg-gray-500 border-transparent hover:bg-blue-100 hover:text-blue-900"
        onClick={onClickAction}>
        {children}
      </button>
    </>
  );
});

PushButton.displayName = 'PushButton';
