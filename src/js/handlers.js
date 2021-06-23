import ref from './ref';

export default function visibleBtn(arr){
    if(arr.length < 12){
        ref.BtnRef.classList.add('hidden');
    };
    if(arr.length >= 12){
        ref.BtnRef.classList.remove('hidden');
    }; 
};

ref.BtnRef.classList.add('hidden');