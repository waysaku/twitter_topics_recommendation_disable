var timerId = window.setInterval((function () {
	var eles = Array.prototype.slice.call(document.getElementsByClassName('r-1p0dtai r-1ei5mc7 r-1pi2tsx r-1d2f490 r-crgep1 r-orgf3d r-t60dpp r-u8s1d r-zchlnj r-ipm5af r-13qz1uu'));
	var checkedEles = eles.filter((ele) => {
		return ele.checked;
	});
	var count = 0;

	return function () {
		if (count >= checkedEles.length) {
			window.clearInterval(timerId);
			console.log('All Done')
			return;
		}
		checkedEles[count].click();
		console.log(count + ': Disabled Done');
		count++;
	};
}()), 5000);