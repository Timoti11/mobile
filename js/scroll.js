$(".buy_between_btn").click(function(){
		$("#form__f1").removeClass('action_1').addClass('action_0');
		$("#form__f2").removeClass('action_0').addClass('action_1');
});

$(".buy_between_submit").click(function(){
		$("#form__f2").removeClass('action_1').addClass('action_0');
		$("#form__f3").removeClass('action_0').addClass('action_1');
		setTimeout(close, 1500);
		setTimeout(next, 2000);
});

$(".form_exit").click(function(){
		$("#form__f1").removeClass('action_0').addClass('action_1');
		$("#form__f2").removeClass('action_1').addClass('action_0');
});

function next() {
		$("#form__f1").removeClass('action_0').addClass('action_1');
}

function close() {
		$("#form__f3").removeClass('action_1').addClass('action_0');
}





$(".flex_buy_between_btn").click(function(){
		$("#flex_form__f1").removeClass('action_1').addClass('action_0');
		$("#flex_form__f2").removeClass('action_0').addClass('action_1');
});

$(".flex_buy_between_submit").click(function(){
		$("#flex_form__f2").removeClass('action_1').addClass('action_0');
		$("#flex_form__f3").removeClass('action_0').addClass('action_1');
		setTimeout(close, 1500);
		setTimeout(next, 2000);
});

$(".flex_form_exit").click(function(){
		$("#flex_form__f1").removeClass('action_0').addClass('action_1');
		$("#flex_form__f2").removeClass('action_1').addClass('action_0');
});

function next() {
		$("#flex_form__f1").removeClass('action_0').addClass('action_1');
}

function close() {
		$("#flex_form__f3").removeClass('action_1').addClass('action_0');
}





$(".def_buy_between_btn").click(function(){
		$("#def_form__f1").removeClass('action_1').addClass('action_0');
		$("#def_form__f2").removeClass('action_0').addClass('action_1');
});

$(".def_buy_between_submit").click(function(){
		$("#def_form__f2").removeClass('action_1').addClass('action_0');
		$("#def_form__f3").removeClass('action_0').addClass('action_1');
		setTimeout(close, 1500);
		setTimeout(next, 2000);
});

$(".def_form_exit").click(function(){
		$("#def_form__f1").removeClass('action_0').addClass('action_1');
		$("#def_form__f2").removeClass('action_1').addClass('action_0');
});

function next() {
		$("#def_form__f1").removeClass('action_0').addClass('action_1');
}

function close() {
		$("#def_form__f3").removeClass('action_1').addClass('action_0');
}