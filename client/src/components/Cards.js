import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';
function Card({title,id, date, description, image, content}) {


  return (
    <>
      <div className="card">
        <img src={image} alt="" />
        <div className="card-body">
          <h3>{title}</h3>
          <span className="date">{date}</span>
          <p>{description}</p>
          <Link to= {`/articles/${id}`} className="btn">Read more</Link>
        </div>
      </div>
    </>
  );
}

export default Card;
