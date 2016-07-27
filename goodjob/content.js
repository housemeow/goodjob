(function() {
	var blackList = [
		{name: 'facebook', hostname: 'www.facebook.com'},
		{name: 'dcard', hostname: 'www.dcard.tw'}
	];

	var hostname = location.hostname;

	if (isInBlackList(hostname)) {
		showWarningMask(hostname);
	} else {
		console.log('allow');
	}

	function isInBlackList(hostname) {

		var result = false;
		blackList.forEach(function(black) {
			if (hostname == black.hostname) {
				result = true;
			}
		});

		return result;
	}

	function showWarningMask(hostname) {
		var title = '這是' + getBlackName(hostname) + '你懂嗎';
		var content = '專心上班好嗎';

		var mask = document.createElement('div');
		mask.className = 'gj-mask';
		mask.innerHTML =
			'<div class="gj-frame"><h1 class="gj-title">' +
			title + '</h1><p class="gj-content">' +
			content + '</p></div>'

		document.body.appendChild(mask);
	}

	function getBlackName(hostname) {
		var result = '';
		blackList.forEach(function(black) {
			if (hostname == black.hostname) {
				result = black.name;
			}
		});

		return result;
	}
})();