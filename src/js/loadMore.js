import ref from './ref';
import Service from './apiService';

export default function loadMore(){
    if(Service.length < 12){
        ref.BtnRef.classList.add('hidden');
    };
    if(Service.length >= 12){
        ref.BtnRef.classList.remove('hidden');
    }; 
};

ref.BtnRef.classList.add('hidden');