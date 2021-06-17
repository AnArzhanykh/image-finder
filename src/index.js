import './sass/main.scss';
var debounce = require('lodash.debounce');
import render from './js/render';

const inputSearchRef = document.querySelector('.search-form > input');

const debounceSearching = debounce(searching, 500)

inputSearchRef.addEventListener('input', debounceSearching);

async function searching(e){
    const curentValue = e.target.value;
    render(curentValue);

}

