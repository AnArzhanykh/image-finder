import ref from './ref';

export default function scroll() {
    const elem = ref.galleryRef.lastElementChild;
    if(!elem){
      return
    }
    elem.scrollIntoView({block: "center", behavior: "smooth"});
}