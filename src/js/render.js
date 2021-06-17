import takeImag from './apiService';
import Card from '../template/image-card';
import listImage from '../template/list-images';

const galleryRef = document.querySelector('.gallery');


function render (curentValue) {

    takeImag(curentValue).then(arr =>{
        renderCard(arr, listImage);
    });
}



function renderCard(arr, template){
    const markup = template(arr);
    galleryRef.insertAdjacentHTML('beforeend', markup);
}

export default render