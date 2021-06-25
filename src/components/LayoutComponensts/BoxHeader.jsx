import React from 'react';
import { css } from '@emotion/react';
import size from '@/data/size';

export const BoxHeader = ({ children, i, w, f, top = 0, bottom = 20, }) => {
  const boxHeaderStyle = css`
    margin-top: ${top}px;
    margin-bottom: ${bottom}px;
    background-color: #333333;
    padding: 10px;
    border-radius: 10px;
    color: #ffffff;
    font-weight: 500;
    letter-spacing: -1px;
    transition: all 0.3s;
    width: 100%;
    box-sizing: border-box;

    &:before {
      content: '\\${i}';
      font-weight: ${w};
      font-family: 'Font Awesome 5 ${f}', sans-serif;
      margin-right: 10px;
    }

    @media (min-width: 1px) and (max-width: 600px) {
      font-size: ${size[4]};
    }

    @media (min-width: 601px) and (max-width: 800px) {
      font-size: ${size[5]};
    }

    @media (min-width: 801px) {
      font-size: ${size[6]};
    }
  `;

  return (
    <>
      <h2 css={boxHeaderStyle}>{children}</h2>
    </>
  );
};