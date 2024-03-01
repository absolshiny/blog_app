import React from 'react';
import '../styles/newsBox.css';

function NewsBox({ image, content, isLeft }) {
    const truncatedContentlength = Math.min(content.length, 100);
    const truncatedContent = content.slice(0, truncatedContentlength);

    return (
        <div className={`news-box ${isLeft ? 'left' : 'right'}`}>
            <img src={image} alt="Box Image" />
            <div className="news-content">
                <p>{truncatedContent}</p>
            </div>
        </div>
    );
}

export default NewsBox;