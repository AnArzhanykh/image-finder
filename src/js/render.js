import Service from './apiService';
import listImages from '../template/list-images';
import ref from './ref';


function render (curentValue) { 
    Service.takeImag(curentValue).then(renderCard);
}

function renderCard(arr){
    if(arr.length < 12){
        ref.BtnRef.classList.add('hidden');
    };
    if(arr.length >= 12){
        ref.BtnRef.classList.remove('hidden');
    };   
    const markup = listImages(arr);
    ref.galleryRef.insertAdjacentHTML('beforeend', markup);

}

export default render