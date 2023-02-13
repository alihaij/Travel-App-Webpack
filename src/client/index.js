import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/base.scss'

export {
    checkForName,
    handleSubmit
   }

console.log(checkForName);


// Check that service workers are working
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}




  