import React from 'react';
import { css } from '@emotion/react';

interface Props {
  children?: React.ReactNode;
}

export const Gray = ({ children, }: Props) => {
  const GrayStyle = css`
    font-style: italic;
    color: #888888;
    margin-right: 4px;
  `;

  return (
    <>
      <span css={GrayStyle}>{children}</span>
    </>
  );
};
