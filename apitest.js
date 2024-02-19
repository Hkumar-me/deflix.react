
const url = 'https://imdb146.p.rapidapi.com/v1/find/?query=game';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0df54359b3mshbd7b7a9767dc511p11c103jsn2c3ca5f224bb',
		'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result.titleResults.results);
} catch (error) {
	console.error(error);
}