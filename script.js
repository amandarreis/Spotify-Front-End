const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlist');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}
function displayResults(result) {
    resultPlaylist.classList.add("hidden")
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        resultArtist.classList.add('hidden');
        resultPlaylist.classList.remove('hidden'); // Exibir as playlists novamente
        return;
    }

    requestApi(searchTerm);
});

