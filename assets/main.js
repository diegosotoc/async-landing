// const API = 'https://spotify23.p.rapidapi.com/playlist/?id=37i9dQZF1DZ06evO3qQIQo';

const API = "https://spotify23.p.rapidapi.com/artist_related/?id=5PbpKlxQE0Ktl5lcNABoFf";



const content = document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '274c4d009fmshc7ffd2adf21d8cap1a6931jsn50de5d87c0ce',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};


async function fetchData(urlApi){
    const response = await fetch(urlApi, options)
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const albums = await fetchData(API);
        let view = `
            ${albums.artists.map(artists => `
            <div class="group relative">
                <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${artists.images[0].url}" alt="${artists.name}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${artists.name}
                    </h3>
                </div>
            </div>
            `).slice(0,4).join("")}  
        `;
        content.innerHTML = view;
} catch (err){
        console.log(err);
    }
})();