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

const fetchTemp = (tempService, dispatch) => (...args) => {
    dispatch(tempRequested());
    tempService.getUserData()
        .then((data) => dispatch(tempLoaded(data)))
        .catch((err) => dispatch(tempError(err)));
};

export {
    fetchTemp
};