const ref = {
    inputSearchRef : document.querySelector('.search-form > input'),
    BtnRef : document.querySelector('[data-action = load-more]'),
    searchForm : document.querySelector('.search-form'),
    galleryRef : document.querySelector('.gallery'),
    visibleBtn(arr){
        if(arr.length < 12){
            ref.BtnRef.classList.add('hidden');
        };
        if(arr.length >= 12){
            ref.BtnRef.classList.remove('hidden');
        }; 
    },
}

ref.BtnRef.classList.add('hidden');


export default ref;