import Service from './apiService';
import listImages from '../template/list-images';
import {galleryRef} from '../index'


function render (curentValue) { 
    Service.takeImag(curentValue).then(renderCard)
}

function renderCard(arr){
    const markup = listImages(arr);
    galleryRef.insertAdjacentHTML('beforeend', markup);
}

export default render