import { useState, useEffect } from 'react';

import './App.css';
import Header from './components/Header';
import ReviewSelect from './components/ReviewSelect';
import ReviewTable from './components/ReviewTable';

const reviews = require('./reviews.json');

// helper function
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function App() {
  const [country, setCountry] = useState(reviews[0].country);

  let countryReviews = reviews.filter((review) => {
    return review.country === country;
  });
  let countries = reviews.map((review) => review.country).filter(onlyUnique);

  useEffect(() => {
    countryReviews = reviews.filter((review) => {
      return review.country === country;
    });
    countries = reviews.map((review) => review.country).filter(onlyUnique);
  }, [country]);

  return (
    <div className='App'>
      <Header />
      <ReviewSelect
        numReviews={countryReviews.length}
        countries={countries}
        selected={country}
        updateSelect={setCountry}
      />
      <ReviewTable reviews={countryReviews} />
    </div>
  );
}

export default App;
