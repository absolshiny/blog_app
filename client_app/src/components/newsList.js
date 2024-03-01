import React from 'react';
import NewsBox from './newsBox';

function NewsList({ data, onItemClick }) {
  return (
    
    <div className="news-list">
      {data.map((item, index) => (
        <NewsBox
          key={index}
          item = {item}
          isLeft={index % 2 === 0} // Alternate left and right positioning
          onItemClick= {onItemClick}
        />
      ))}
    </div>
  );
}

export default NewsList;