import React from 'react';
import '../styles/newsBig.css'

function NewsShow({ item, onClose }) {
  return (
    <div className="news-modal">
      <div className="modal-content">
        <h2>{item.title}</h2>
        <img src={item.image_url} alt={item.title} />
        <p>{item.summary}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default NewsShow;