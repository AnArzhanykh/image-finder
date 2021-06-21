import { alert, notice, info, success, error, defaultModules } from'@pnotify/core';
import"@pnotify/core/dist/PNotify.css";
import"@pnotify/core/dist/BrightTheme.css";

const messageAlert = {
    emptyText: 'You did not write a simbol', 
    emptyString(){
        const myError = error({
            text: this.emptyText,           
        })
    },    
}

export default messageAlert;
