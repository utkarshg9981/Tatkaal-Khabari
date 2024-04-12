import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
       
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        
        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("API Data:", data); // Debug: log data
                if (data.status !== "ok") {
                    throw new Error(`API error: ${data.message || "Unknown error"}`);
                }
                setArticles(data.articles);
            })
            .catch(error => {
                console.error("Fetch error:", error.message); // Debug: log error
                setError(error.message);
            });
    }, [category]);
    

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2 className="text-center">Latest <span className='badge bg-danger'>News</span></h2>
            {articles.map((news, index) => (
                <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            ))}
        </div>
    );
};

export default NewsBoard;
