const startButton = document.getElementById("mailbox-button-start");
const stopButton = document.getElementById("mailbox-button-stop");
const resetButton = document.getElementById("mailbox-button-reset");
const numberOfInterval = document.getElementById("mailbox-monitoring-interval");
const mailbox = document.getElementById("mailbox-data-content");



function main(){
    console.log()
    
    !numberOfInterval.value ? numberOfInterval.value = 5000 : "";
    const iotmailbox = new IOTMailbox(500, ()=>1000);
    
    startButton.addEventListener("click", ()=>{
       const msg =  iotmailbox.startMonitoring();
       console.log(msg)
       
    });
    
    stopButton.addEventListener("click", ()=>{
       const msg = iotmailbox.stopMonitoring();
       console.log(msg)
    });

}

main();