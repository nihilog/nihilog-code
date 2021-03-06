import React, { ReactNode } from 'react';
import { css } from '@emotion/react';
import { size } from '@/data';

interface Props {
  children?: ReactNode;
  top?: string;
  bottom?: string;
  idName?: string;
}

export const Box = ({
  children, top = '30', bottom = '30', idName,
}: Props) => {
  const BoxStyle = css`
    margin-top: ${top}px;
    margin-bottom: ${bottom}px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    text-align: justify;
    letter-spacing: -1px;
    background-color: #ffffff;
    box-shadow: 0 0 10px -4px #333333;
    border-radius: 10px;

    & > p {
      @media (min-width: 1px) and (max-width: 600px) {
        font-size: ${size[1]};
      }

      @media (min-width: 601px) and (max-width: 800px) {
        font-size: ${size[2]};
      }

      @media (min-width: 801px) {
        font-size: ${size[3]};
      }
    }
  `;

  return (
    <>
      {
        idName
          ? (
            <div id={idName} css={BoxStyle}>
              {children}
            </div>
          )
          : (
            <div css={BoxStyle}>
              {children}
            </div>
          )
      }
    </>
  );
};
