import moment from 'moment';

const LastNewsLayoutTwo = () => {
    return(
        <>
            <img
                className="col-xl-6 col-6"
                src="https://nationalcybersecurity.com/wp-content/uploads/Corona_Scam.jpg"
                alt="foto"
                style={{ height: '125px', width: '200px' }}
            />
            <div className="col-xl-6 col-6 right">
                <h1>Beware of COVID-19 scams, fraudulent activity | #coronavirus | #scams | #covid19</h1>
                <span>{moment().endOf('day').fromNow()}</span>
            </div>
            <p className="col-xl-12 col-12">The COVID-19 virus has affected just about every aspect of our lives. Government and health organizations have cautioned us to protect ourselves physically, but these are not the only safety measures to take. The Federal Trade Commission reports an increase i…</p>
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
                    padding-left: 0px;
                }
                p {
                    padding: 0px;
                    text-align: justify;
                    font-size: 13px;
                    color: #979797;
                }
                .right {
                    padding-right: 0px;
                }
            `}</style>
        </>
    );
}

export default LastNewsLayoutTwo 