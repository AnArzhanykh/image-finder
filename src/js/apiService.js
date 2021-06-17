const key = '21709969-2aaf655592c1caf292dc08cd8';
const per_page = 12;
const page = 1;

async function takeImag(curentvalue){
    const token = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${curentvalue}&page=${page}&per_page=${per_page}&key=${key}`;
    return fetch(token).then(response => response.json()).then(json=>json.hits).catch(e=>console.log('this is error from fatch ', e.message));


}

export default takeImag;




