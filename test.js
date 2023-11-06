       
    document.getElementById('form').addEventListener('submit', findNameGendorize = (event) => {
        event.preventDefault()
   const findNameInput = document.querySelector('.findNameInput').value;
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${findNameInput}`;
    fetch(url)
    .then(response => {
        if (!response.ok || response.status === 404) {
            throw new Error('Request failed');
        }
        return response.json()
       })
   .then(data => {
       alert(`${data.name} is ${data.gender}`)
   })
   .catch(error => {
       console.error('Ошибка, ебланка:', error)
   })
})

   document.querySelector('.submitButton').addEventListener('click',() => {
    const findNameInput = document.querySelector('.findNameInput').value;
    findNameInput.value = '';
});