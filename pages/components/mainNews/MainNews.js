import moment from 'moment';

export default function MainNews({ dataNews }){
    return(
        <>
            <main className="row">
                <img
                    className="col-xl-12 col-12"
                    src={dataNews?.urlToImage}
                    alt="foto"
                    style={{ height: '275px', }}
                />
                <div className="col-xl-12 col-12">
                {/* <p>Source: Yahoo Entertainment</p> */}
                    <h1>{dataNews?.title}</h1>
                    <p>{dataNews?.description}</p>
                </div>
                </main>
            <style jsx>{`
                main {
                    padding-top: 15px;
                    border: solid 2px #d4d4d4;
                    margin: 0px;
                    max-height: 500px;
                    min-height: 500px;
                }
                p {
                    color: #979797;
                }
                h1 {
                    margin: 0;
                    font-size: 25px;
                }
                img {
                    object-fit: cover;
                    filter: grayscale(100%);
                }
            `}</style>
        </>
    );
}