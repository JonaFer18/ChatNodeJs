//crear conexion
var socket = io.connect();

//DOM
var message= document.getElementById('message');
  handle= document.getElementById('handle'),
 btn= document.getElementById('send'),
 outpot= document.getElementById('outpot'),
btn2= document.getElementById('clear'),
 feedback= document.getElementById('feedback');
var audio = document.getElementById("audio");


//emitir eventos
btn.addEventListener('click',function(){

	socket.emit('chat',{
		message: message.value,
		handle: handle.value

	});
});
btn2.addEventListener('click',function(){
	outpot.innerHTML="";
});
message.addEventListener('keypress',function(){
	socket.emit('typing', handle.value);
});
//listen eventos


socket.on('chat',function(data){
	feedback.innerHTML="";
	outpot.innerHTML+='<p><b><i><strong>'+data.handle+':</i></b></strong>'+data.message+'</p>';
	audio.play();
	document.getElementById('message').submit();
})

socket.on('typing',function(data){
	feedback.innerHTML = '<p><em>'+data+' esta escribiendo...</em></p>';
})
