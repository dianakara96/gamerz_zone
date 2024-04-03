
async function fetchData() {
const url = 'https://steam-api7.p.rapidapi.com/appDetails/website/271590';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '82a1a9aef4msh57aadd6611f10f9p19a85ajsn4b3c1c1dfef0',
		'X-RapidAPI-Host': 'steam-api7.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();	
	console.log(result);

	
} catch (error) {
	console.error(error);
}
}
fetchData();




// const websiteContainer = document.getElementById('website-container');

	// const websiteElement = document.createElement('div');


	// websiteContainer.appendChild(websiteElement)