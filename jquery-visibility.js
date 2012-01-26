/*! http://mths.be/visibility v1.0.3α by @mathias */
;(function(window, document, $) {

	var prefix,
	    prop,
	    eventName = 'onfocusin' in document && 'hasFocus' in document ? 'focusin focusout' : 'focus blur',
	    prefixes = ['', 'moz', 'ms', 'o', 'webkit'];

	while ((prop = prefix = prefixes.pop()) != null) {
		prop = (prefix ? prefix + 'H': 'h') + 'idden';
		if ($.support.pageVisibility = typeof document[prop] == 'boolean') {
			eventName = prefix + 'visibilitychange';
			break;
		}
	}

	$(/blur$/.test(eventName) ? window : document).on(eventName, function(event) {
		$.event.trigger((prop && document[prop] || /^(?:blur|focusout)$/.test(event.type) ? 'hide' : 'show') + '.visibility');
	});

}(this, document, jQuery));