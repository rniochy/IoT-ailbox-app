const startButton = document.getElementById("mailbox-button-start");
const stopButton = document.getElementById("mailbox-button-stop");
const resetButton = document.getElementById("mailbox-button-reset");
const numberOfInterval = document.getElementById("mailbox-monitoring-interval");
const mailbox = document.getElementById("mailbox-data-content");


function main(){
    
    !numberOfInterval.value ? numberOfInterval.value = 5000 : "";
    const iotmailbox = new IOTMailbox(500, ()=>1000, mailbox);
    
    startButton.addEventListener("click", ()=>{
       const msg =  iotmailbox.startMonitoring();
    });
    
    stopButton.addEventListener("click", ()=>{
       const msg = iotmailbox.stopMonitoring();
    });

}

main();