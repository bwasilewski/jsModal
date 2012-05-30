var Modal = {

	modalWrap: $('<div id="modalWrapper"/>')
	,modalShade: $('<div id="modalShade"/>')
	,modalContent: $('<div id="modalContent/>')

	,initialize: function () {
		var body = $('body');

		this.modalWrap.append(this.modalShade); 
		this.modalWrap.append(this.modalContent);

		body.prepend(this.modalWrap);

		// this.modalWrap = modalWrapEl;
		// this.modalShade = modalShadeEl;
		// this.modalContent = modalContentEl;

		// bodyEl.insertBefore(modalWrapEl, bodyEl.firstChild);
		// modalWrapEl.appendChild(modalShadeEl);
		// modalWrapEl.appendChild(modalContentEl);
	}

	,showModal: function () {
		
	}

	,centerModal: function () {
		
	}
};