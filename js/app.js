const startButton = document.getElementById("mailbox-button-start");
const stopButton = document.getElementById("mailbox-button-stop");
const resetButton = document.getElementById("mailbox-button-reset");
const numberOfInterval = document.getElementById("mailbox-monitoring-interval");
const mailbox = document.getElementById("mailbox-data-content");



function main(){

    const iotmailbox = new IOTMailbox(500, ()=>0);
    
    startButton.addEventListener("click", ()=>{
        iotmailbox.startMonitoring();
    })
    
    stopButton.addEventListener("click", ()=>{
       iotmailbox.stopMonitoring();
    })
}

main();