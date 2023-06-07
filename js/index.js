$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
		//修改密码请改此处
    if(userName=="12122003" &&  pwd=="31062000"){
			event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');
			setTimeout(function(){location.href="BirthdayCake.html";},2000);
		}
	else{
		alert("Ahihi đồ ngốc!!! Sai mật khẩu rồi lêu lêu");
	}
});

//loadAudioFile('../music/y2meta.com - 【女性が歌う】back number _ happy birthday (covered by コバソロ & 藤川千愛) (320 kbps).mp3');