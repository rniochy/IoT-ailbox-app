const startButton = document.getElementById("mailbox-button-start");
const stoptButton = document.getElementById("mailbox-button-stop");
const resetButton = document.getElementById("mailbox-button-reset");
const mailbox = document.getElementById("mailbox-data-content");

const iotmailbox = new IOTMailbox(500, ()=>0);
iotmailbox.startMonitoring();


startButton.addEventListener("click", ()=>{
    window.setTimeout(()=> iotmailbox.stopMonitoring(), 5000);

})