/**
 * Monitor the light levels inside an IOT enabled snail mailbox to detect
 * when the mailbox door has been opened and closed.
 * @class IOTMailbox
 */
 class IOTMailbox {
    /**
     * Creates an instance of IOTMailbox.
     * @param {number} [signalInterval=500] Timer interval for checking mailbox status.
     * @param {function} signalCallback Function to invoke when the timer interval expires.
     * @memberof IOTMailbox
     */
    constructor(signalInterval = 500, signalCallback) {
      this.signalInterval = signalInterval;
      this.signalCallback = signalCallback;
      this.intervalID = null;
      this.lastLightLevel = 0;
      this.message = "";
    }
  
    /**
     * Start monitoring of the mailbox and invoke the caller specified callback
     * function when the interval expires.
     * @memberof IOTMailbox
     */
    startMonitoring = () => {
      this.setMesaage(`Starting monitoring of mailbox...`)
      console.log(this.getMessage());
      this.intervalID = window.setInterval(this.signalStateChange, this.signalInterval);
    }
  
    /**
     * Stop monitoring the mailbox status
     * @memberof IOTMailbox
     */
    stopMonitoring = () => {
      if (this.intervalID === null) return;
      window.clearInterval(this.intervalID);
      this.intervalID = null;
      this.setMesaage(`Mailbox monitoring stopped...`)
      console.log(this.getMessage());
    }
  
    /**
     * Pass the current light level inside the mailbox to the users callback
     * function. The positive light levels indicate the door is open while 
     * negative levels indicate it is closed. Depending on the sampling interval 
     * the mailbox door could be in any postion from fully closed to fully open. 
     * This means the light level varies from interval-to-interval.
     * @memberof IOTMailbox
     */
    signalStateChange = () => {
      const lightLevel = this.lastLightLevel >= 0 
        ? Math.random().toFixed(2) * -1 
        : Math.random().toFixed(2);
      this.setMesaage(`Mailbox state changed - lightLevel: ${lightLevel}`)
      this.signalCallback(this.lightLevel);
      this.lastLightLevel = lightLevel;
      
      console.log(this.getMessage());
      return this.getMessage();
    }

    setMesaage(message){
       this.message = message;
    }
    getMessage(){
       return this.message;
    }
  };