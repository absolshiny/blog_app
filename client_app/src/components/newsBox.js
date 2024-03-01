import React from 'react';
import '../styles/newsBox.css';

function NewsBox({ item, onItemClick, isLeft }) {
    const truncatedContentlength = Math.min(item.content.length, 100);
    const truncatedContent = item.content.slice(0, truncatedContentlength);

    return (
        <div className={`news-box ${isLeft ? 'left' : 'right'}`} onClick= {() => onItemClick(item)}>
            <img src={item.image} alt="Box Image" />
            <div className="news-content">
                <p>{truncatedContent}</p>
            </div>
        </div>
    );
}

export default NewsBox;