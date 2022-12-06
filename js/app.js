const startButton = document.getElementById("mailbox-button-start");
const stopButton = document.getElementById("mailbox-button-stop");
const resetButton = document.getElementById("mailbox-button-reset");
const numberOfInterval = document.getElementById("mailbox-monitoring-interval");
const mailbox = document.getElementById("mailbox-data-content");

console.log(numberOfInterval.innerText)

function main(){
   
   let  iotmailbox;
   
   startButton.addEventListener("click", ()=>{
      const numberInterval = !numberOfInterval.value ? numberOfInterval.value = 500 : numberOfInterval.value;
      iotmailbox = new IOTMailbox(numberInterval, ()=>1000, mailbox);
      iotmailbox.startMonitoring();

      startButton.setAttribute("disbaled", true)
   });
    
    stopButton.addEventListener("click", ()=>{
      iotmailbox.stopMonitoring();
    });
    resetButton.addEventListener("click", ()=>{
      iotmailbox.stopMonitoring();
      mailbox.innerText = "";
    });
    
}


main();