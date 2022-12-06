const startButton = document.getElementById("mailbox-button-start");
const stopButton = document.getElementById("mailbox-button-stop");
const resetButton = document.getElementById("mailbox-button-reset");
const numberOfInterval = document.getElementById("mailbox-monitoring-interval");
const mailbox = document.getElementById("mailbox-data-content");

console.log(numberOfInterval.innerText)

function desableButton (node){
    node.setAttribute('disabled', true)
}
function ableButton(node){
   node.removeAttribute('disabled');
}
function main(){
   
   let  iotmailbox;
   
   startButton.addEventListener("click", ()=>{
      const numberInterval = !numberOfInterval.value ? numberOfInterval.value = 500 : numberOfInterval.value;
      iotmailbox = new IOTMailbox(numberInterval, ()=>1000, mailbox);
      iotmailbox.startMonitoring();

      desableButton(startButton);
      stopButton.removeAttribute('disabled');
   });
    
    stopButton.addEventListener("click", ()=>{
      iotmailbox.stopMonitoring();
      desableButton(stopButton)
      ableButton(startButton);
    });
    resetButton.addEventListener("click", ()=>{
      iotmailbox.stopMonitoring();
      mailbox.innerText = "";
         ableButton(startButton);
         ableButton(stopButton);
    });
    
}




main();