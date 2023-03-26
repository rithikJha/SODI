import React , { useEffect } from 'react';
import Navbar from '../components/Nav';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getOneArticle } from "../redux/action/articles";
const FullArticle = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
  const article = useSelector((state) => state.doArticles);
  console.log('single : ',article);

  useEffect(() => {
    dispatch(getOneArticle(id));
  }, [dispatch]);

  return (
    <div className="about-container">
        
      <h1>About Us</h1>
      <p>it is ${id}</p>
      <img src={article.imageUrl} alt="Article Image" />
      <p>{article.title}</p>
      <p>{article.category}</p>
      <p>{article.content}</p>
      
    </div>
  );
};

export default FullArticle;
