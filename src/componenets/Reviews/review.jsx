
import ReviewSection from "./reviews";
import ReviewForm from "./enterReview";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

import React from "react";
import { useState } from "react";

import './reviews.css'


const Review = () => {

  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([
    { name: 'Emily Smith', review: 'Absolutely love it! The design is beautiful and it keeps perfect time.', rating: 5 },
{ name: 'Michael Johnson', review: 'Impressed with the quality and durability. Worth every penny.', rating: 4 },
    { name: 'Sarah Brown', review: 'Beautiful watch! It adds a touch of sophistication to any outfit.', rating: 5 },
{ name: 'David Martinez', review: 'Functional and stylish. Couldnt ask for more.', rating: 4 },
{ name: 'Anna Wilson', review: 'So pleased with my purchase! It exceeded my expectations.', rating: 5 }
]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setReviews(r => {
        return [{ name: name, review: review, rating: rating}, ...r]
    })

    setName('');
    setReview('');
    setRating(0);
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleReviewChange = (e) => setReview(e.target.value);

  const stars = [...Array(5)].map((star, i) => {
    const ratingValue = i + 1;
    return (
      <label key={i}>
        <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
        <FontAwesomeIcon className='star' icon={faStar} color={ratingValue <= rating ? 'rgb(66, 139, 251)' : '#e4e5e9'} />
      </label>

    );
  })

    return (
        <>
        <ReviewSection reviews = {reviews}/>
        <ReviewForm handleSubmit={handleSubmit} name={name} review={review} handleNameChange={handleNameChange}  handleReviewChange={handleReviewChange} stars={stars}/>
        </>
    )
}

export default Review;