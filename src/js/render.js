import Service from './apiService';
import listImages from '../template/list-images';
import ref from './ref';
// import isBtnVisible from './handlers'
import loadMore from './loadMore'


function render (curentValue) { 
    Service.takeImag(curentValue).then(renderListCards);
}

function renderListCards(arr){
    // Service.length(arr)
    loadMore(arr);
    const markup = listImages(arr);
    ref.galleryRef.insertAdjacentHTML('beforeend', markup);

}




export default render