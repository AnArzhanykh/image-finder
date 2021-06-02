import './sass/main.scss';
var debounce = require('lodash.debounce');
import takeImag from './js/apiService';

const inputSearchRef = document.querySelector('.search-form > input');


inputSearchRef.addEventListener('input', debounce(searching, 500));

async function searching(){
    const curentValue = inputSearchRef.value;
    takeImag(curentValue)
    console.log(curentValue);
}

