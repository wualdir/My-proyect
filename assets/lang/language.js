
const btnlanguage = document.getElementById('language-toggle');
const currentlanguage = window.location.href.includes('ingles.html')
btnlanguage.checked = currentlanguage
btnlanguage.addEventListener('change',changePages)

function changePages() {
    if (btnlanguage.checked) {
         window.location.href = 'ingles.html';
        // window.location.href ='index.html';
    }else{
         window.location.href ='index.html';
        // window.location.href = 'ingles.html';
    }
}
export default changePages;