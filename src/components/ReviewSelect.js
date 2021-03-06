import React from 'react';

const ReviewSelect = ({ numReviews, countries, selected, updateSelect }) => {
  const renderCountries = () => {
    return countries.map((country) => {
      return (
        <option key={country} value={country}>
          {country}
        </option>
      );
    });
  };
  return (
    <div className='spread'>
      <div>
        <div className='number-of-reviews'>
          <h1>{numReviews}</h1>
        </div>
        Total number of reviews
      </div>
      <div>
        <label htmlFor='country-list'>Countries of Origin</label>
        <select
          id='country-list'
          value={selected}
          onChange={(e) => updateSelect(e.target.value)}
        >
          {renderCountries()}
        </select>
      </div>
    </div>
  );
};

export default ReviewSelect;
