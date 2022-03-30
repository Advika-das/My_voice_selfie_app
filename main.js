var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
    recognition.onresult=function(event){
        var content=event.results[0][0].transcript;
        document.getElementById("textbox").innerHTML=content;
        if(content=="take my selfie"){
        speak();
    }
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking you selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
    snapshot();
    save();
    },5000)
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
var camera=document.getElementById("camera");

function snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'">';
});
}

function save(){
    link=document.getElementById("link");
    img=document.getElementById("logo_img").src;
    link.href=img;
    link.click();
}