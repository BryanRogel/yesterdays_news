import axios from "axios";

export const GET_ALL_NEWS_LOADING = "GET_ALL_NEWS_LOADING";
export const GET_ALL_NEWS_SUCCESS = "GET_ALL_NEWS_SUCCESS";
export const GET_ALL_NEWS_FAIL = "GET_ALL_NEWS_FAIL";

const getAllNewsLoading = () => ({ type: GET_ALL_NEWS_LOADING });
const getAllNewsSuccess = (payload) => ({ type: GET_ALL_NEWS_SUCCESS, payload });
const getAllNewsFail = (payload) => ({ type: GET_ALL_NEWS_FAIL, payload });

const getAllNew = () => async (dispatch) => {
    dispatch(getAllNewsLoading());
    try {
        let response = await axios.get('/api/news');
        let data = [];
        if (response.status === 200) {
            const data = {
                status: '200',
                message: "Complete",
                result: response.data.result,
            };
        dispatch(getAllNewsSuccess(data));
        } else {
        data = {
            status: null,
            message: "Error",
            result: [],
        };
        dispatch(getAllNewsFail(data));
        }
    } catch (error) {
        console.log("error actionAction getAllNews", error ? error : error);
        const data = {
        status: null,
        message: "Error",
        result: [],
        };
        dispatch(getAllNewsFail(data));
    }
    return Promise.resolve();
};

export {
    getAllNew,
};
