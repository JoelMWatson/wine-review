import React, { useState } from 'react';

const ReviewTable = ({ reviews }) => {
  const [sort, setSort] = useState('title');

  const renderReviews = () => {
    const sorted = reviews.sort((a, b) => {
      switch (sort) {
        case 'variety':
          return a.variety > b.variety;
        case 'winery':
          return a.winery > b.winery;
        case 'points':
          return a.points > b.points;
        case 'price':
          return a.price > b.price;
        case 'tasterName':
          return a.tasterName > b.tasterName;
        default:
          return a.title > b.title;
      }
    });
    return sorted.map((review, index) => {
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
            <th id='th1' onClick={(e) => setSort('title')}>
              Title
            </th>
            <th id='th2' onClick={(e) => setSort('variety')}>
              Variety
            </th>
            <th id='th3' onClick={(e) => setSort('winery')}>
              Winery
            </th>
            <th id='th4' onClick={(e) => setSort('points')}>
              Points
            </th>
            <th id='th5' onClick={(e) => setSort('price')}>
              Price
            </th>
            <th id='th6' onClick={(e) => setSort('tasterName')}>
              Taster Name
            </th>
          </tr>
        </thead>
        <tbody>{renderReviews()}</tbody>
      </table>
    </div>
  );
};

export default ReviewTable;
