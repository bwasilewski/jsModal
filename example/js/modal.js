var Modal = {

	modalWrap: $('<div id="modalWrapper"/>')
	,modalShade: $('<div id="modalShade"/>')
	,modalContent: $('<div id="modalContent"/>')
	,closeBtn: $('<a class="close btn" href="#">Close</a>')

	,initialize: function initialize () {
		var self = this
			,body = $('body');

		this.modalContent.append(this.closeBtn);

		this.modalWrap
			.append(this.modalShade)
			.append(this.modalContent);

		body.prepend(this.modalWrap);

		this.closeBtn.bind('click', function (ev) {
			ev.preventDefault();
			self.closeClickHandler(ev);
		});

		this.modalShade.bind('click', function (ev) {
			self.hideModal();
		});
	}

	,showModal: function showModal () {
		this.centerModal();
		this.modalWrap
			.css('display','block')
			.stop()
			.animate({ opacity: 1 }, 250);
	}

	,hideModal: function hideModal () {
		this.modalWrap
			.stop()
			.animate({ opacity: 0 }, 250, function () {
				$(this).css('display', 'none');
			});
	}

	,centerModal: function centerModal () {
		var self = this
			,windowWidth = parseInt( $(window).width() )
			,modalWidth = parseInt( this.modalContent.outerWidth() )
			,xPos = ( windowWidth - modalWidth ) / 2;

		this.modalContent.css('left', xPos);
	}

	,closeClickHandler: function closeClickHandler (ev) {
		this.hideModal();
	}
};

Modal.initialize();