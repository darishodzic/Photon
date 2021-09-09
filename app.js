const key =
	"563492ad6f9170000100000126f18c935b2b41e08ecef3ba44195f15";
const gallery =
	document.querySelector(".gallery");
const searchInput =
	document.querySelector(
		".search-input"
	);
const submitBtn =
	document.querySelector(".submit-btn");
let searchValue;

//Functions

async function curatedPhotos() {
	const dataFetch = await fetch(
		"https://api.pexels.com/v1/curated?per_page=15&page=1",
		{
			method: "GET",
			headers: {
				Accept: "application/json",
				Authorization: key,
			},
		}
	);
	const data = await dataFetch.json();
	data.photos.forEach((photo) => {
		const galleryDiv =
			document.createElement("div");
	});
}
curatedPhotos();
