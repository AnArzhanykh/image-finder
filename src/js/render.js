import Service from './apiService';
import listImages from '../template/list-images';
import ref from './ref';
import isBtnVisible from './handlers'


function render (curentValue) { 
    Service.takeImag(curentValue).then(renderListCards);
}

function renderListCards(arr){
    // Service.length(arr)
    isBtnVisible(arr);
    const markup = listImages(arr);
    ref.galleryRef.insertAdjacentHTML('beforeend', markup);

}



export default render