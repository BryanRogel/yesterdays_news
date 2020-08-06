import moment from 'moment';

const LastNewsLayoutOne = ({ dataNews }) => {
    return(
        <>
            <div className="col-xl-6 col-6 left">
                <h1>{dataNews?.title}</h1>
                <span>{moment().endOf('day').fromNow()}</span>
                <p>{dataNews?.description}</p>
            </div>
            <img
                className="col-xl-6 col-6"
                src={dataNews?.urlToImage}
                alt="foto"
                style={{ height: '200px', width: '200px' }}
            />
            <style jsx>{`
                @font-face {
                    font-family: 'bebas-neue';
                    src: url('/fonts/bebas-neue.ttf');
                }
                @font-face {
                    font-family: 'roboto-light';
                    src: url('/fonts/roboto-light.ttf');
                }
                h1 {
                    font-family: 'bebas-neue';
                    font-weight: 100;
                    margin-top: 0px;
                    text-align: justify;
                    font-size: 15px;
                }
                p, span {
                    font-family: 'roboto-light';
                    max-height: 133px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                img {
                    filter: grayscale(100%);
                    object-fit: cover;
                    padding-right: 0px;
                }
                p, h1, span {
                    text-align: justify;
                    padding-left: 0px;
                }
                p {
                    font-size: 13px;
                    color: #979797;
                }
                .left {
                    padding-left: 0px;
                }
            `}</style>
        </>
    );
}

export default LastNewsLayoutOne 