jQuery(window).resize(function() {
	cr_sizeCanvas(jQuery(window).width(), jQuery(window).height());
});

jQuery(document).ready(function ()
{
	if (document.getElementById("loading_gif"))
	{
		document.getElementById("loading_gif").style.zIndex = "10";
		document.getElementById("loading_gif").style.display = "inline";
	}
	// Create new runtime using the c2canvas
	cr_createRuntime("c2canvas");
});

// Pause and resume on page becoming visible/invisible
var curFocusStatus = false;
function onVisibilityChanged() {
	if (document.hidden || document.mozHidden || document.webkitHidden || document.msHidden)
	{
		cr_setSuspended(true);
		curFocusStatus = true;
	}
	else if (document.hasFocus())
	{
		cr_setSuspended(false);
		curFocusStatus = false;
	}
};

// Bug fix by Hung da dieu
function onFocus() {
	if (document.hasFocus() && curFocusStatus) {
		window.focus();
		cr_setSuspended(false);
		curFocusStatus = false;
	}
};

function onBlur() {
	if (document.hasFocus() && !curFocusStatus) {
		cr_setSuspended(true);
		curFocusStatus = true;
	}
};

document.addEventListener("visibilitychange", onVisibilityChanged, false);
document.addEventListener("mozvisibilitychange", onVisibilityChanged, false);
document.addEventListener("webkitvisibilitychange", onVisibilityChanged, false);
document.addEventListener("msvisibilitychange", onVisibilityChanged, false);
//A.W: add for check focus when KaiOS use screensaver
document.addEventListener("focus", onFocus, false);
document.addEventListener("blur", onBlur, false);

function getPixelsPerCm()
{
	/*var o = document.getElementById("device_physic_pixels_per_cm");
	alert(o.offsetWidth)
	return o.offsetWidth
	*/
	return 38;
}