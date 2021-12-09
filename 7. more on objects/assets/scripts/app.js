addMovieBtn = document.getElementById('add-movie-btn');
searchMovieBtn = document.getElementById('search-btn');

movies = [];

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extravalue = document.getElementById('extra-value').value;

  if (title.trim() === '' || extraName.trim() === '' || extravalue.trim() === '') {
    return alert('invalid inputs');
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extravalue
    },
    id: Math.floor(Math.random() * 10000),
    getFormattedTitle() {
      console.log(this);
      return this.info.title.toUpperCase();
    }
  };
  movies.push(newMovie);
  console.log(movies);
  renderMoviesList();
};

const renderMoviesList = (searchKey = '') => {
  const moviesList = document.getElementById('movie-list');

  if (movies.length === 0) {
    moviesList.classList.remove('visible');
    return;
  } else {
    moviesList.classList.add('visible');
  }
  moviesList.innerHTML = '';
  const filteredMovies = !searchKey ? movies : movies.filter(movie => movie.info.title.includes(searchKey));

  filteredMovies.forEach(movie => {
    const movieElement = document.createElement('li');
    const { info, ...otherProperties } = movie;
    const {getFormattedTitle} = movie;
    let outputText = getFormattedTitle.call(movie) + ' - ';
    for (const key in info) {
      if (key !== 'title') {
        outputText = outputText + `${key}: ${info[key]}`;
      }
    }
    movieElement.textContent = outputText;
    moviesList.append(movieElement);
  });
};

const searchMovieHandler = () => {
  const searchKey = document.getElementById('filter-title').value;
  renderMoviesList(searchKey);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchMovieBtn.addEventListener('click', searchMovieHandler);