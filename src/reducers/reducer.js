const reducer = (state, action) => {

    if (state === undefined) {
        return {
            data: {},
            loading: true,
            error: null
        };
    }

    switch (action.type) {
        case 'FETCH_TEMP_REQUEST':
            return {
                data: {},
                loading: true,
                error: null
            };

        case 'FETCH_TEMP_SUCCESS':
            return {
                data: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_TEMP_FAILURE':
            return {
                data: {},
                loading: false,
                error: action.payload
            };

        default:
            return state.data;
    }
};

export default reducer;