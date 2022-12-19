const timeContainer = document.querySelector("#time");

setInterval(() => {
	timeContainer.innerText = new Date().toLocaleTimeString();
}, 1000);
