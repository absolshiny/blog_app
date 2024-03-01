import React, { useState } from 'react';
import './styles/app.css';
import NewsList from './components/newsList';
import ContactBox from './components/ContactBox';
import NewsShow from './components/newsShow';
function App() {
  const [showContactBox, setShowContactBox] = useState(false);
  const [selectedNewsItem, setSelectedNewsItem] = useState(null);
  const [showNews, setShowNews] = useState(false);

  const toggleContactBox = () => {
    setShowContactBox(!showContactBox);
  };

  const handleNewsItemClick = (item) => {
    setSelectedNewsItem(item);
    console.log('click on image ${item.title}');
    setShowNews(true);
  };

  const closeNews = () => {
    setSelectedNewsItem(null);
    setShowNews(false);
  };

  const dataList = [
    { title: "amigo1", image: 'https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', content: 'Content 1' },
    { title: "amigo2", image: 'https://www.thoughtco.com/thmb/BVnoDc9J_65SCnuAQ9fvciTSyLQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/splashing-165192_1280-7879d2914dfb4e5d8dbf2e943669bd92.jpg', content: 'Content 2' },
  ];

  return (
    <div className= "App">
    <div className="container">
      <h1 className="title">Space Blog</h1>  
      <button className="top-right-button" disabled={showContactBox} onClick={toggleContactBox}>
        CONTACT
      </button>
      </div>
      <ContactBox isVisible={showContactBox} onClose={toggleContactBox}/>
      <NewsList data={dataList} onItemClick={handleNewsItemClick} />
      {showNews && (
        <NewsShow item={selectedNewsItem} onClose={closeNews} />
      )}
    </div>
  );
}

export default App;