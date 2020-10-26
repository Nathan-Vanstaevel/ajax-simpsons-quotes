function fetchSimpsonsQuoteJSON() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID
  // const simpsonName = 'Homer Simpson';
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
  axios
    .get(url)
    .then(function (response) {
      return response.data; // response.data instead of response.json() with fetch
    })
    .then(function (simpson) {
      console.log('data decoded from JSON:', simpson);

      // Build a block of HTML
      const simpsonsHtml = `
        <p><strong>${simpson[0].character}</strong></p>
        <p>${simpson[0].quote}</p>
        <img src="${simpson[0].image}" />
      `;
      document.querySelector('#simpson').innerHTML = simpsonsHtml;
    });
}

fetchSimpsonsQuoteJSON();

const reloadtButton = document.querySelector('.button');
// Reload everything:
function reload() {
  reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener('click', reload, false);
