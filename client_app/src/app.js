import React, { useState, useEffect } from 'react';
import './styles/app.css';
import NewsList from './components/newsList';
import ContactBox from './components/ContactBox';
import NewsShow from './components/newsShow';
function App() {
  const [showContactBox, setShowContactBox] = useState(false);
  const [selectedNewsItem, setSelectedNewsItem] = useState(null);
  const [showNews, setShowNews] = useState(false);
  const [dataList, setDataList] = useState([]);

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


  async function fetchData() {
    try {
      const response = await fetch('http://localhost:3000/news', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      setDataList(data.news);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  useEffect(() => {
    fetchData();
  }, []);

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