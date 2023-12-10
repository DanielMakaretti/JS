export{cityResultText}

const cityResultText = () => {
    const cityResult = document.getElementById('saveResult');
    if (cityResult) {
        const resultText = cityResult.textContent;
        localStorage.setItem('city', resultText)
    }
}