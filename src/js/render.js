import Service from './apiService';
import listImages from '../template/list-images';
import ref from './ref';
import loadMore from './loadMore'


function render () { 
    Service.takeImag().then(renderListCards);
}

function renderListCards(arr){
    loadMore(arr);
    const markup = listImages(arr);
    ref.galleryRef.insertAdjacentHTML('beforeend', markup);
}

export default render