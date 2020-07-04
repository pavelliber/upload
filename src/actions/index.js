const parser = require("fast-xml-parser");

const tempRequested = () => {
    return {
        type: 'FETCH_TEMP_REQUEST'
    }
};

const tempLoaded = (data) => {
    return {
        type: 'FETCH_TEMP_SUCCESS',
        payload: data
    };
};

const tempError = (error) => {
    return {
        type: 'FETCH_TEMP_FAILURE',
        payload: error
    };
};

const blinkingStarted = () => {
    return {
        type: 'BLINK_STARTED'
    }
};

const blinkingFinished = () => {
    return {
        type: 'BLINK_FINISHED'
    }
};

const checkedIn = () => {
    return {
        type: 'CHECKED_IN'
    }
};

const moveLightUP = (value) => {
    return {
        type: 'LIGHT_UP',
        payload: value
    }
};

const fetchTemp = (apiService, dispatch) => () => {
    dispatch(tempRequested());

    let finalObj = {t:20, h:50}; //tmp data if server will return wrong data

    apiService.getTempData()
        .then(response => response.text())
            .then((data) => {

                if( parser.validate(data) === true) {
                    const jsonObj = parser.parse(data);
                    if (jsonObj) {
                        finalObj = {t:jsonObj.response.snst0, h:jsonObj.response.snsh0};
                    }
                }

                dispatch(tempLoaded(finalObj))
            })
            .catch((err) => dispatch(tempError(err)));
};

const startBlinking = (apiService, dispatch) => () => {
    dispatch(blinkingStarted());
    apiService.startBlinking();
};

const checkIn = (apiService, dispatch) => () => {
    dispatch(blinkingFinished());
    dispatch(checkedIn())
    apiService.stopBlinking();
};

const increaseLight = (value = 0) => {
    value += 25;
    if (value > 100) value = 0;
    return value;
}

const lightUp = (apiService, dispatch) => (level=50) => {
    const newLightLevel = increaseLight(level);
    dispatch(moveLightUP(newLightLevel));
    apiService.setLightValue(newLightLevel);
};

export {
    fetchTemp, startBlinking, checkIn, lightUp
};