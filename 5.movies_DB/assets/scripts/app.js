const addMovieModal = document.getElementById('add-modal');
const deleteMovieModal = document.getElementById('delete-modal');
const backdropDiv = document.getElementById('backdrop');
const addModalBtn = document.querySelector('header button');
const dontAddMovieBtn = addMovieModal.querySelector('.btn--passive');
const addMoviebtn = addMovieModal.querySelector('.btn--success');
const userInputs = addMovieModal.querySelectorAll('input');
const moviesListSection = document.getElementById('entry-text');
const dontRemoveMovieBtn = deleteMovieModal.querySelector('.btn--passive');
let removeMovieBtn = deleteMovieModal.querySelector('.btn--danger');
const movies = [];

const updateUI = () => {
  if (movies.length > 0) {
    moviesListSection.style.display = 'none';
  } else {
    moviesListSection.style.display = 'block';
  }
};

const deleteMovie = id => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === id) {
      break;
    }
    movieIndex++;
  }
  console.log(movieIndex);
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
  updateUI();
};

const deleteMovieHandler = id => {
  console.log(id);
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();
  removeMovieBtn.replaceWith(removeMovieBtn.cloneNode(true));
  removeMovieBtn = deleteMovieModal.querySelector('.btn--danger');
  dontRemoveMovieBtn.removeEventListener('click', closeMovieDeletionModal);
  removeMovieBtn.addEventListener('click', () => {
    deleteMovie(id);
    closeMovieDeletionModal();
  });
  dontRemoveMovieBtn.addEventListener('click', closeMovieDeletionModal);
};

const closeMovieDeletionModal = () => {
  deleteMovieModal.classList.remove('visible');
  toggleBackdrop();
};

const addNewMovieElement = (id, title, image, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
    <img src="${image}" alt="${title}">
  </div>
  <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
  </div>
  `;
  newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
  backdropDiv.classList.toggle('visible');
};

const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
  addMovieModal.classList.add('visible');
  toggleBackdrop();
};

const backDropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
};

const clearMovieInputs = () => {
  for (const input of userInputs) {
    input.value = '';
  }
};

const addMovieHandler = () => {
  const title = userInputs[0].value;
  const imageUrl = userInputs[1].value;
  const rating = userInputs[2].value;

  if (title.trim() === '' || imageUrl.trim() === '' || rating.trim() === '' || +rating < 0 || +rating > 5) {
    alert('please enter a valid values (Rating between 0 to 5).');
    return;
  }

  const newMovie = {
    id: Math.floor(Math.random() * 10000),
    title: title,
    imageUrl: imageUrl,
    rating: rating
  }
  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInputs();
  addNewMovieElement(newMovie.id, newMovie.title, newMovie.imageUrl, newMovie.rating);
  updateUI();
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  clearMovieInputs();
  toggleBackdrop();
};

addModalBtn.addEventListener('click', showMovieModal);
backdropDiv.addEventListener('click', backDropClickHandler);
addMoviebtn.addEventListener('click', addMovieHandler);
dontAddMovieBtn.addEventListener('click', cancelAddMovieHandler);

