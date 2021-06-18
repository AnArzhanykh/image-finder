import './sass/main.scss';
var debounce = require('lodash.debounce');
import render from './js/render';
import Service from './js/apiService';

const inputSearchRef = document.querySelector('.search-form > input');
const BtnRef = document.querySelector('[data-action = load-more]');
const searchForm = document.querySelector('.search-form');
const galleryRef = document.querySelector('.gallery');


const debounceSearching = debounce(searching, 1000);
const debouncehandleButtonClick = debounce(handleButtonClick, 200);

inputSearchRef.addEventListener('input', debounceSearching);

async function searching(e){
    galleryRef.innerHTML = '';
    Service.resetPage();
    Service.query = e.target.value;
    render();
    searchForm.reset()
}


BtnRef.addEventListener('click', render);
BtnRef.addEventListener('click', debouncehandleButtonClick);

function handleButtonClick() {
    const elem =galleryRef.lastElementChild;
    console.log(elem);
    elem.scrollIntoView({block: "center", behavior: "smooth"});
}


export {galleryRef};
