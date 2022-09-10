const textarea = document.querySelector('#text');
let voicelist = document.querySelector('&voice');
let speechbtn = document.querySelector('.submit');
let synth = speechSynthesis;
let isSpeaking = true;

function voiceSpeech(){
    for(let voices of synth.getVoices()){
        let option = document.createElement('option')
        option.text = voice.name
        voicelist.add(option)
        console.log(option);
    }
}
synth.addEventListener('voiceschanged',voiceSpeech)
function texttoSpeech(text){
    let uttername = new SpeechSynthesisUtterance(text)
    for(let voices of synth.getVoices()){
        if(voice.name===voicelist.value){
            utternance.voice = voice
        }
    }
    speechSynthesis.speak(utternance)
}
speechBtn.addEventListener("click", e =>{
    e.preventDefault();
    if(textarea.value !== ""){
        if(!synth.speaking){
            textToSpeech(textarea.value);
        }
        if(textarea.value.length > 80){
            setInterval(()=>{
                if(!synth.speaking && !isSpeaking){
                    isSpeaking = true;
                    speechBtn.innerText = "Convert To Speech";
                }else{
                }
            }, 500);
            if(isSpeaking){
                synth.resume();
                isSpeaking = false;
                speechBtn.innerText = "Pause Speech";
            }else{
                synth.pause();
                isSpeaking = true;
                speechBtn.innerText = "Resume Speech";
            }
        }else{
            speechBtn.innerText = "Convert To Speech";
        }
    }
})
