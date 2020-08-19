import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import useInstagram from '../hooks/useInstagram';

const Insta = () => {
  //data

  const instaPhotos = useInstagram();

  return (
    <>
      <h2>Instagram Posts from @spacex</h2>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 1rem -0.5rem;
        `}
      >
        {instaPhotos.map(photo => (
          <a
            href={`https://instagram.com/p/${photo.id}/`}
            css={css`
              box-shadow: 0;
              display: block;
              margin: 0.5rem;
              max-width: 33% - 1rem;
              width: 120px;
              transition: 120ms box-shadow linear;

              :focus,
              :hover {
                box-shadow: 0 2px 14px #22222244;
                z-index: 10;
              }
            `}
          >
            <Image
              fluid={photo.fluid}
              alt={photo.caption}
              css={css`
                width: 100%;
                * {
                  margin-top: 0;
                }
              `}
            />
          </a>
        ))}
      </div>
      <a href={`https://instagram.com/spacex`}>See more on instagram &rarr;</a>
    </>
  );
};

export default Insta;
