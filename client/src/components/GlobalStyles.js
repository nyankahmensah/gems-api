import React from 'react';

function GlobalStyles() {
  return (
    <style jsx global>{`
      @font-face {
        font-family: 'Cereal';
        font-style: normal;
        font-weight: 500;
        font-display: auto;
        src: url('/fonts/Cereal-Medium.woff2') format('woff2'),
          url('/fonts/Cereal-Medium.tff') format('tff');
      }

      @font-face {
        font-family: 'Cereal';
        font-style: normal;
        font-weight: 600;
        font-display: auto;
        src: url('/fonts/Cereal-Bold.woff2') format('woff2'),
          url('/fonts/Cereal-Bold.tff') format('tff');
      }

      @font-face {
        font-family: 'Cereal';
        font-style: normal;
        font-weight: 400;
        font-display: auto;
        src: url('/fonts/Cereal-Book.woff2') format('woff2'),
          url('/fonts/Cereal-Book.tff') format('tff');
      }

      @font-face {
        font-family: 'Graphik';
        font-style: normal;
        font-weight: 400;
        font-display: auto;
        src: url('/fonts/Cereal-Book.woff2') format('woff2'),
          url('/fonts/Cereal-Book.tff') format('tff');
      }
    `}</style>
  );
}

export default GlobalStyles;
