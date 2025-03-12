import React, { useState, useEffect } from "react";

const Search = () => {
    // State to store fetched news articles
    const [news, setNews] = useState([]);

    // Search query state
    const [searchQuery, setSearchQuery] =  useState('');

    // Function to fetch news from the API
    const fetchNews = () => {
        fetch(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
        .then(result => result.json())
        .then(data => setNews(data.hits))
        .catch(error => console.log(error));
    };

    // useEffect hook: Fetch news once when the component mounts
    useEffect(() => {
        // Fetches news on component mount
        fetchNews();
    }, [searchQuery]);  // Empty array ensures this runs only once

    //Handle change function
    const handleChange = (e) => {
        //update state depending what user enters
        setSearchQuery(e.target.value)

    };

    return (
        <div className="mt-4">
            <h2>Search Component</h2>
            <form>
                <input type="text" value={searchQuery} onChange={handleChange}></input>
                <button>Search</button>
            </form>
            {/* Map through the news array and render titles */}
            {news.map((n, i) => (
                <p key={i}>{n.title}</p>
            ))}
        </div>
    );
};

export default Search;
