import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../redux/action/articles";

import { Link } from 'react-router-dom';
import Card from "./Cards";
import './Home.css'

const Home = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.doArticles);

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);
  console.log('all:',articles)

  return (
    <div className="container">
        <h1>Latest Articles</h1>
        <div className="cards">
          {Array.isArray(articles) && articles.map((article, index) => (
            <Card
              key={article._id}
              id={article._id}
              title={article.title}
              date={article.date}
              description={article.description}
              image={article.imageUrl}
              //content={article.content}
            />
          ))}
        </div>
      </div>
  );
};

export default Home;
