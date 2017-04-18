var $messages = $('.messages-content'),
	d, h, m,
	i = 0;

$(window).load(function () {
	$messages.mCustomScrollbar();
	setTimeout(function () {
		fakeMessage();
	}, 100);
});

function updateScrollbar() {
	$messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
		scrollInertia: 10,
		timeout: 0
	});
}

function setDate() {
	d = new Date()
	if (m != d.getMinutes()) {
		m = d.getMinutes();
		$('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
	}
}

function insertMessage() {
	msg = $('.message-input').val();
	if ($.trim(msg) == '') {
		return false;
	}
	$('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
	setDate();
	$('.message-input').val(null);
	updateScrollbar();
	setTimeout(function () {
		fakeMessage();
	}, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function () {
	insertMessage();
});

$(window).on('keydown', function (e) {
	if (e.which == 13) {
		insertMessage();
		return false;
	}
})

var Fake = [
  'Olá, meu nome é Robot, qual seu nome?',
  'Prazer em conhecê-lo',
  'Como vai você?',
  'Vou bem, obrigado',
  'O que você está fazendo?',
  'Nossa que legal!',
  'Você me parece ser uma pessoa incrivel...',
  'Esta sendo um otimo conversar com você'
]

function fakeMessage() {
	if ($('.message-input').val() != '') {
		return false;
	}
	$('<div class="message loading new"><figure class="avatar"><img src="robot_face.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
	updateScrollbar();

	setTimeout(function () {
		$('.message.loading').remove();
		$('<div class="message new"><figure class="avatar"><img src="robot_face.png" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
		setDate();
		updateScrollbar();
		i++;
	}, 1000 + (Math.random() * 20) * 100);

}