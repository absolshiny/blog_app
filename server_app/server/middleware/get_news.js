
const get_news_api = async (req, res, next) => {
    try {
      const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/?limit=10');
      const data = await response.json();
      req.data = data.results;
      next();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching data');
    }
  }

  module.exports = get_news_api;