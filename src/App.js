import './App.css';
import Header from './components/Header';
import ReviewSelect from './components/ReviewSelect';
import ReviewTable from './components/ReviewTable';

const reviews = require('./reviews.json');

// helper function
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const App = () => {
  let countries = reviews.map((review) => review.country).filter(onlyUnique);

  return (
    <div className='App'>
      <Header />
      <ReviewSelect
        numReviews={reviews.length}
        countries={countries}
        selected={reviews[0].country}
      />
      <ReviewTable reviews={reviews} />
    </div>
  );
};

export default App;
