import React from 'react';

function Footer() {
  const devSymbol = '</>';
  return (
    // <div className='footer'><a href='https://github.com/playeredlc' target="_blank"><i>{devSymbol}</i> edlc</a>, 2021.</div>
    <div className='footer'><i>{devSymbol}</i> edlc, 2021.</div>
  );
};

export default Footer;