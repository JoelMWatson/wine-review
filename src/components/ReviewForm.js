import React, { useState } from 'react';

const ReviewForm = ({ reviews, addReview }) => {
  const [country, setCountry] = useState('');
  const [title, setTitle] = useState('');
  const [variety, setVariety] = useState('');
  const [winery, setWinery] = useState('');
  const [points, setPoints] = useState('');
  const [price, setPrice] = useState('');
  const [tasterName, setTasterName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReviews = [...reviews];
    newReviews.push({
      country,
      title,
      variety,
      winery,
      points,
      price,
      tasterName,
    });
    addReview(newReviews);

    setCountry('');
    setTitle('');
    setVariety('');
    setWinery('');
    setPoints('');
    setPrice('');
    setTasterName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Review</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlfor='form_country'>Country</label>
            </td>
            <td>
              <input
                id='form_country'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor='form_title'>Title</label>
            </td>
            <td>
              <input
                id='form_title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor='form_variety'>Variety</label>
            </td>
            <td>
              <input
                id='form_variety'
                value={variety}
                onChange={(e) => setVariety(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor='form_winery'>Winery</label>
            </td>
            <td>
              <input
                id='form_winery'
                value={winery}
                onChange={(e) => setWinery(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor='form_points'>Points</label>
            </td>
            <td>
              <input
                id='form_points'
                value={points}
                onChange={(e) => setPoints(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor='form_price'>Price</label>
            </td>
            <td>
              <input
                id='form_price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor='form_tasterName'>Taster Name</label>
            </td>
            <td>
              <input
                id='form_tasterName'
                value={tasterName}
                onChange={(e) => setTasterName(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button className='wide-btn' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
