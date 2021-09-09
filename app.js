const key =
	"563492ad6f9170000100000126f18c935b2b41e08ecef3ba44195f15";
const gallery =
	document.querySelector(".gallery");
const searchInput =
	document.querySelector(
		".search-input"
	);
const form = document.querySelector(
	".search-form"
);
let searchValue;

//Event Listener
searchInput.addEventListener(
	"input",
	updateInput
);
form.addEventListener("submit", (e) => {
	e.preventDefault();
	searchPhotos(searchValue);
});

//Functions

function updateInput(e) {
	searchValue = e.target.value;
}

async function fetchApi(url) {
	const dataFetch = await fetch(url, {
		method: "GET",
		headers: {
			Accept: "application/json",
			Authorization: key,
		},
	});
	const data = await dataFetch.json();
	return data;
}

function generatePictures(data) {
	data.photos.forEach((photo) => {
		const galleryImg =
			document.createElement("div");
		galleryImg.classList.add(
			"gallery-img"
		);
		galleryImg.innerHTML = `<img src=${photo.src.large}/> 
        <p>${photo.photographer}</p>`;
		gallery.appendChild(galleryImg);
	});
}

async function curatedPhotos() {
	const data = await fetchApi(
		"https://api.pexels.com/v1/curated?per_page=15&page=1"
	);
	generatePictures(data);
}

async function searchPhotos(query) {
	clear();
	const data = await fetchApi(
		`https://api.pexels.com/v1/search?query=${query}+query&per_page=15&page=1`
	);
	generatePictures(data);
}

function clear() {
	gallery.innerHTML = "";
	searchInput.value = "";
}

curatedPhotos();
