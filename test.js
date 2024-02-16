const url = 'https://moviesminidatabase.p.rapidapi.com/movie/id/%7Bmovie_id%7D/cast/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c71d59f9bemsha0a0f007c9186efp1eb397jsn23ba399b50a5',
		'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}