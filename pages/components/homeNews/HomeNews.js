import { connect } from 'react-redux';

import MainNews from '../mainNews/MainNews';
import LastNews from '../lastNews/LastNews';
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
                <div id="first" className="col-12 col-sm-6 col-md-8 col-lg-3 col-xl-3">
                { isSuccess && data?.lastNews.map((dataNews, i) => (
                    <LastNews dataNews={dataNews} key={i}/>
                ))}
                </div>
                <div id="second" className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <MainNews/>
                </div>
                <div id="third" className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                    { isSuccess && data?.headLines.map((dataNews, i) => (
                        <NewsHeadlines dataNews={dataNews} key={i}/>
                    ))}
                </div>
            </div>
            <style jsx>{`
                @media only screen and (max-width: 991px) {
                    #first {
                    order: 2;
                    }
                    #second {
                    order: 1;
                    }
                    #third {
                    order: 3;
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