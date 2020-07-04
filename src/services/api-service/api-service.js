export default class APIService {

    _API_SERVER = "http://192.168.1.168";
    _timer = 0;
    _lightStatus = false;

    getRequestToSensorAPI = (url, isXML = false) => {
        return fetch(url,{
            mode:'no-cors',
            headers: isXML ? {
                "Accept": "application/xml"
            } : {},
            method: "GET"
        })
    }

    getTempData = () => {
         //return this.getRequestToSensorAPI(`${this._API_SERVER}/sens.xml`, true)
         return this.getRequestToSensorAPI("/sens.xml", true);
    };

    turnLightOn = async () => {

        console.log("turn On");

        this._lightStatus = true;

        this.getRequestToSensorAPI(`${this._API_SERVER}/api.htm?ch=5&cmd=3`);
    }

    turnLightOff = async () => {

        console.log("turn Off");

        this._lightStatus = false;

        this.getRequestToSensorAPI(`${this._API_SERVER}/api.htm?ch=5&cmd=1`);
    }

    switchLight = () => {
        if (this._lightStatus) {
            this.turnLightOff();
        } else {
            this.turnLightOn();
        }
    }

    startBlinking = () => {
        console.log("Start Blinking");
        this._timer = setInterval(this.switchLight, 2000)
    }

    stopBlinking = () => {
        console.log("Stop Blinking");
        clearInterval(this._timer)
        this.setLightValue(50);
    }

    setLightValue(value) {
        console.log("light value: " + value);
        this.getRequestToSensorAPI(`${this._API_SERVER}/api.htm?ch=5&cmd=6&br=${value}`);
    }
}