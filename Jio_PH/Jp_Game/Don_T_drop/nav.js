document.addEventListener("DOMContentLoaded", () => {
	document.addEventListener("keydown", handleKeydownEvent)
})

function nav(dir) {
	const items = [...document.getElementsByClassName('items')]
	items.some((el, i, arr) => {
		if (document.activeElement === document.body) {
			el.focus()
			return true
		}
		if (el !== document.activeElement) {
			return false
		}
		let next = i + dir
		if (next < 0) {
			next = arr.length - 1
		}
		if (next === arr.length) {
			next = 0
		}
		arr[next].focus()
		return true
	})
}

function handleKeydownEvent(e) {
	switch (e.key) {
		case "ArrowUp":
		case "ArrowLeft":
			nav(-1);
			break;
		case "ArrowDown":
		case "ArrowRight":
			nav(1);
			break;
	}
}
