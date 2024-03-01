import React from 'react';
import NewsBox from './newsBox';

function NewsList({ data, onItemClick }) {
  return (
    
    <div className="news-list">
      {data.map((item, index) => (
        <NewsBox
          key={index}
          image={item.image}
          content={item.content}
          isLeft={index % 2 === 0} // Alternate left and right positioning
          onClick={() => onItemClick(item)} 
        />
      ))}
    </div>
  );
}

export default NewsList;