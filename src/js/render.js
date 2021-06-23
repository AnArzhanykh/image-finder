import Service from './apiService';
import listImages from '../template/list-images';
import ref from './ref';


function render (curentValue) { 
    Service.takeImag(curentValue).then(renderCard);
}

function renderCard(arr){

    ref.visibleBtn(arr);
    const markup = listImages(arr);
    ref.galleryRef.insertAdjacentHTML('beforeend', markup);

}


export default render