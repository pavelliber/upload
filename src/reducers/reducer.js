
const reducer = (state, action) => {

    if (state === undefined) {
        return {
            data: {},
            loading: true,
            error: null,
            isBlinking: false,
            isCheckedIn: false,
            lightLevel: 50
        };
    }

    switch (action.type) {
        case 'FETCH_TEMP_REQUEST':
            return {
                ...state,
                data: {},
                loading: true,
                error: null
            };

        case 'FETCH_TEMP_SUCCESS': {

            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null
            };
        }

        case 'FETCH_TEMP_FAILURE':
            return {
                ...state,
                data: {},
                loading: false,
                error: action.payload
            };

        case 'BLINK_STARTED':
            return {
                ...state,
                isBlinking: true,
                isCheckedIn: false
            };

        case 'BLINK_FINISHED':
            return {
                ...state,
                isBlinking: false
            };

        case 'CHECKED_IN':
            return {
                ...state,
                isCheckedIn: true
            };

        case 'LIGHT_UP':
            return {
                ...state,
                lightLevel: action.payload
            };

        default:
            return state;
    }
};

export default reducer;