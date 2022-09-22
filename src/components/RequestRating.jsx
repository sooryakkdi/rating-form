import React from 'react';
import { Rating } from './Rating';
import { RatingMessage } from './RatingMessage';
import { FaStar } from 'react-icons/fa';
import '../styles/feedbackForm.scss';

export const RequestRating = () => {
  return (
    <div className='feedbackDiv'>
      <div className='roundDiv'>
        <FaStar className='starIcon' size='20' />
      </div>
      <RatingMessage />
      <Rating />
    </div>
  );
};
