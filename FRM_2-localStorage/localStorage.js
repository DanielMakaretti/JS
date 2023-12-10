export{cityResultText, addLocalStorageCity}
const cityResult = document.getElementById('saveResult');
const resultText = cityResult.textContent;

const cityResultText = () => {
    if (cityResult) {
        localStorage.setItem('city', resultText)
    }
}

const addLocalStorageCity = () => {
if (localStorage === resultText) {
    localStorage.setItem('city', resultText)
}
}