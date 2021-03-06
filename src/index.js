import './sass/main.scss';
var debounce = require('lodash.debounce');
import render from './js/render';
import Service from './js/apiService';
import ref from './js/ref';
import alert from './js/alert';
import scroll from './js/scroll';
import openModalImage from './js/openModalImage';

const debounceSearching = debounce(searching, 1000);
const debounceHandleButtonClick = debounce(scroll, 200);


ref.inputSearchRef.addEventListener('input', debounceSearching);
ref.BtnRef.addEventListener('click', render);
ref.BtnRef.addEventListener('click', debounceHandleButtonClick);
ref.galleryRef.addEventListener('click', openModalImage);


async function searching(e){
    ref.galleryRef.innerHTML = '';
    Service.resetPage();

    if(!e.target.value){
      alert.emptyString();
      return
    }

    Service.query = e.target.value;

    render();
    ref.searchForm.reset()
    scroll()
}









