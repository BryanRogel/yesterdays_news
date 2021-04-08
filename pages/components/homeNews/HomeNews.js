import { connect } from 'react-redux';

import LastNews from '../lastNews/LastNews';
import Carousel from '../carousel/Carousel';
import NewsHeadlines from '../newsHeadlines/NewsHeadlines';

function HomeNews({
    data,
    isLoading,
    isSuccess,
    isError
}) {

    return (
        <>
            <div className="row" style={{ margin: 0 }}>
                <div id="first" className="col-12 col-sm-6 col-md-8 col-lg-3 col-xl-3 scroll">
                { isSuccess && data?.lastNews.map((dataNews, i) => (
                    <LastNews dataNews={dataNews} key={i}/>
                ))}
                </div>
                <div id="second" className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    {isSuccess && <Carousel className="m-auto" dataNews={data?.mainNews}/> }
                </div>
                <div id="third" className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 scroll">
                    { isSuccess && data?.headLines.map((dataNews, i) => (
                        <NewsHeadlines dataNews={dataNews} key={i}/>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .row {
                    width: 100%;
                    max-width: 1366px;
                }
                .scroll {
                    max-height: calc(100vh - 5em);
                    overflow-y: auto;
                }

                .scroll::-webkit-scrollbar-track {
                    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                    background-color: #F5F5F5;
                    border-radius: 10px;
                }

                .scroll::-webkit-scrollbar {
                    width: 10px;
                    background-color: #F5F5F5;
                }

                .scroll::-webkit-scrollbar-thumb {
                    border-radius: 10px;
                    background-image: -webkit-gradient(linear,
                    left bottom,
                    left top,
                    color-stop(0.44, rgb(132, 134, 140)),
                    color-stop(0.72, rgb(103, 105, 110)),
                    color-stop(0.86, rgb(74, 75, 77)));
                }
                @media only screen and (max-width: 991px) {
                    #first {
                        order: 2;
                    }
                    #second {
                        order: 1;
                        margin-bottom: 10px;
                    }
                    #third {
                        order: 3;
                    }
                }
                @media only screen and (max-width: 575px){
                    .scroll {
                        max-height: 100%;
                        overflow-y: inherit;
                    }
                }
            `}</style>
        </>
    );
}

const mapStateToProps = (state) => ({
    data: state.newsReducer.getAll.data,
    isLoading: state.newsReducer.getAll.isLoading,
    isSuccess: state.newsReducer.getAll.isSuccess,
    isError: state.newsReducer.getAll.isError
})


export default connect( mapStateToProps, null )(HomeNews);