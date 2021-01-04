import React, { useState } from 'react';
import Modal from './Modal';
import ReviewForm from './ReviewForm';

const Header = ({ reviews, addReview }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className='spread'>
      <h1>Wine Reviews</h1>
      <button onClick={(e) => setShowForm(true)}>Create</button>
      <Modal show={showForm} handleClose={setShowForm}>
        <ReviewForm reviews={reviews} addReview={addReview} />
      </Modal>
    </div>
  );
};

export default Header;
