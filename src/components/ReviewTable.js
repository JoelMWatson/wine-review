import React from 'react';

const ReviewTable = ({ reviews }) => {
  const renderReviews = () => {
    return reviews.map((review, index) => {
      return (
        <tr key={index} className='table-row'>
          <td headers='th1'>{review.title}</td>
          <td headers='th2'>{review.variety}</td>
          <td headers='th3'>{review.winery}</td>
          <td headers='th4'>{review.points}</td>
          <td headers='th5'>{review.price ? `$${review.price}.00` : 'N/A'}</td>
          <td headers='th6'>
            {review.tasterName ? `${review.tasterName}` : 'N/A'}
          </td>
        </tr>
      );
    });
  };

  return (
    <div className='reviews-table'>
      <table>
        <thead>
          <tr className='table-row'>
            <th id='th1'>Title</th>
            <th id='th2'>Variety</th>
            <th id='th3'>Winery</th>
            <th id='th4'>Points</th>
            <th id='th5'>Price</th>
            <th id='th6'>Taster Name</th>
          </tr>
        </thead>
        <tbody>{renderReviews()}</tbody>
      </table>
    </div>
  );
};

export default ReviewTable;
