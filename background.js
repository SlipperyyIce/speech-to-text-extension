let isRecording = false;
let recordedChunks = [];
let mediaRecorder;


function toggleRecording() {

  isRecording = !isRecording;
  
  let invertedValue = isRecording;
  
  
  if(invertedValue){
    chrome.action.setIcon({ path: { "16": "/src/js/images/microphone-hover.png" }});
    
    //startRecording();
    
  }
  else{
    chrome.action.setIcon({ path: { "16": "/src/js/images/microphone.png" }}); 
    //stopRecording()
  }
}

const startRecording = () => {

  const stream = navigator.mediaDevices.getUserMedia({ audio: true });
  mediaRecorder = new MediaRecorder(navigator.mediaDevices.getUserMedia({ audio: true }));
  mediaRecorder.start();

  mediaRecorder.addEventListener("dataavailable", (event) => {
    recordedChunks.push(event.data);
  });
}

const stopRecording = async () => {
  mediaRecorder.stop();
  
  let chunk = recordedChunks;
  setTimeout(() => {
    save(chunk)}, 1000);
} 

async function save(recordedChunks) {
  let downloadLink = document.createElement("a");
  
  
  downloadLink.href = URL.createObjectURL(recordedChunks[0]);
  downloadLink.download = "recorded_audio.wav";
  downloadLink.click();
  
} 
  


chrome.runtime.onMessage.addListener(
  (request, message, sendResponse) => {
    // Issue Token
    
    toggleRecording();
    return
  }
);

