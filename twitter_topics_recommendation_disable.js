var timerId = window.setInterval((function() {
	var eles = Array.prototype.slice.call(document.getElementsByClassName('r-1p0dtai r-1ei5mc7 r-1pi2tsx r-1d2f490 r-crgep1 r-orgf3d r-t60dpp r-u8s1d r-zchlnj r-ipm5af r-13qz1uu'));
	var count = 0;
	return function() {
		if (count > eles.length) {
			window.clearInterval(timerId);
			return;
		}
		var ele = eles[count];
		if (ele.checked === true) {
			ele.click();
			console.log(count + ': disabled done');
			return;
		}
		console.log(count + ': nothing to do');
    count++;
	};
}()), 5000);