window.onload = () => {
  let isRecording = false;
  let recordedChunks = [];
  let mediaRecorder;
 
  const startRecording = async () => { /*console.error("record");*/}

  const stopRecording = () => {console.error("sto[p");}
    
  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }

    isRecording = !isRecording;
    const microphoneImage = document.getElementById("microphone-image");
    microphoneImage.src = isRecording ? "js/images/microphone-recording.png" : "js/images/microphone.png";
  };

  const $startButton = document.querySelector('.start');
  $startButton.addEventListener("click", toggleRecording);
}