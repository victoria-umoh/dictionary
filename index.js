
const inputEl = document.getElementById("input");



function fetchApi(word){
	const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
	const result = fetch(url).then((res) => res.json());
	console.log(result);
}


inputEl.addEventListener("keyup", (e) => {
	if (e.target.value && e.key === "Enter") {
		fetchApi(e.target.value);
	}
});