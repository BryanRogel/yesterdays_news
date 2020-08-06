import {
    GET_ALL_NEWS_LOADING,
    GET_ALL_NEWS_SUCCESS,
    GET_ALL_NEWS_FAIL,
} from "../actions/newsAction";

const initState = {
    getAll: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: '',
        status: '',
        data: [],
    },
}

const NewsReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_NEWS_LOADING: return {
            ...state,
            getAll: {
                ...state.getAll,
                isLoading: true,
                isSuccess: false,
                isError: false,
                message: '',
                status: '',
                data: [],
            }
        }
        case GET_ALL_NEWS_SUCCESS: return {
            ...state,
            getAll: {
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload.result,
            }
        }
        case GET_ALL_NEWS_FAIL: return {
            ...state,
            getAll: {
                isLoading: false,
                isSuccess: false,
                isError: true,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload.result,
            }
        }
        default: return state;
    }
};

export default NewsReducer;