import './sass/main.scss';
var debounce = require('lodash.debounce');
import render from './js/render';
import Service from './js/apiService';
import ref from './js/ref'
import alert from './js/alert'
import openModalImage from './js/openModalImage'

const basicLightbox = require('basiclightbox')
const instance = basicLightbox.create(`
	<h1>Dynamic Content</h1>
	<p>You can set the content of the lightbox with JS.</p>
`)


const debounceSearching = debounce(searching, 1000);
const debounceHandleButtonClick = debounce(handleButtonClick, 200);


ref.inputSearchRef.addEventListener('input', debounceSearching);

ref.BtnRef.addEventListener('click', render);
ref.BtnRef.addEventListener('click', debounceHandleButtonClick);
ref.galleryRef.addEventListener('click', openModalImage);



async function searching(e){
    ref.galleryRef.innerHTML = '';
    Service.resetPage();
    Service.query = e.target.value;
    if(!Service.query){
      alert.emptyString();
      return
    }
    render();
    ref.searchForm.reset()
    handleButtonClick()
}


function handleButtonClick() {
    const elem = ref.galleryRef.lastElementChild;
    if(!elem){
      return
    }
    elem.scrollIntoView({block: "center", behavior: "smooth"});
}



