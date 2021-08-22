import React from 'react';
import { css } from '@emotion/react';

interface Props {
  children?: React.ReactNode;
}

export const Kbd = ({ children, }: Props) => {
  const style = css`
    padding: 0 7px;
    color: #3f91ff;
    background-color: #3f91ff20;
    border-radius: 5px;
    font-weight: 900;
    font-size: 90%;
    margin: 0 2px;

    &:before {
      content: '\\f11c';
      font-weight: 900;
      font-family: 'Font Awesome 5 Free', sans-serif;
      margin-right: 5px;
    }
  `;

  return (
    <>
      <kbd css={style}>{children}</kbd>
    </>
  );
};