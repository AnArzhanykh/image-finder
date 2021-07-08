import ref from './ref';
import alert from './alert';

export default function loadMore(arr){
    if(arr.length >= 1 && arr.length < 12){
        alert.imageFinished();
        console.log(1);
        ref.BtnRef.classList.add('hidden');
    };

    if(arr.length >= 12){
        ref.BtnRef.classList.remove('hidden');
    }; 

    if(arr.length === 0){
        alert.imageNotFind()
    }
};
