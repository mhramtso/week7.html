const container = document.querySelector('.container');
const movieTitle= document.querySelector('.userInputTitle');
const moviePosterUrl= document.querySelector('.userInputPosterUrl');
const movieYearofpublication= document.querySelector('.userInputYear');
const btn =document.querySelector('.button');
const movieTitleToDisplay= document.querySelector('.favoriteMovieTitle');
const movieYearToDisplay = document.querySelector('.favoriteMovieYear');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage= localStorage.getItem('imageUrl');
let yearInStorage = localStorage.getItem('year');

if(titleInStorage && imageUrlInStorage && yearInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(51, 51,  82, 0.685), rgba(73, 49, 49, 0.582)),url('${imageUrlInStorage}')`;
    movieYearToDisplay.textContent = yearInStorage;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let movieYearInput = movieYearofpublication.value;
    localStorage.setItem('title',movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('year', movieYearInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    movieYearToDisplay.textContent = movieYearInput;
    container.style.backgroundImage = `linear-gradient(rgba(51, 51,  82, 0.685), rgb(73, 49, 49, 0.582)),
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieYearofpublication.value = '';



});
