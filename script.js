const themeButton = document.getElementById("themeButton");
let newBg = false;

themeButton.addEventListener("click", function () {
	if (newBg) {
		document.body.style.backgroundColor = "#e0c4f7";
	} else {
		document.body.style.backgroundColor = "#664974";
	}
	newBg = !newBg;
});
