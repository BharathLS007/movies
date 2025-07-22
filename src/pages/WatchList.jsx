import React from 'react';
import constructionGif from '../assets/Construction.gif'; // 👈 updated path

function WatchList() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>This Page is Under Construction 🚧</h2>
      <img
        src={constructionGif}
        alt="Under Construction"
        style={{ width: '500px', borderRadius: '1rem' }}
      />
    </div>
  );
}

export default WatchList;
