const getNew = process.env.REACT_APP_BASE_CONTEXT;

const getAllNew = process.env.REACT_APP_NEWS_CONTEXT;
console.log("getAllNew",process.env.REACT_APP_BASE_CONTEXT, getAllNew)

export const getNews = () => `${getNew}`;

// export const getAllNews = () => `${getAllNew}`;

export const getAllNews = () => '/api/news';
