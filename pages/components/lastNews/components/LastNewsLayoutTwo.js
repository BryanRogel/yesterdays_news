import moment from 'moment';

const LastNewsLayoutTwo = () => {
    return(
        <>
            <img
                className="col-xl-6 col-6"
                src="https://cdn-pro.elsalvador.com/wp-content/uploads/2019/04/apulo.jpg"
                alt="foto"
                style={{ height: '125px', width: '200px' }}
            />
            <div className="col-xl-6 col-6 right">
                <h1>Hola esta es una prueba</h1>
                <span>{moment().endOf('day').fromNow()}</span>
            </div>
            <p className="col-xl-12 col-12">Minim velit eiusmod consequat exercitation nostrud ad elit fugiat enim fugiat. Sit ipsum commodo in dolore. Magna duis do magna adipisicing laboris sunt velit id. Aute occaecat ex sint quis nulla. Exercitation quis mollit fugiat excepteur id magna ut adipisicing irure proident.</p>
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
                }
                .right {
                    padding-right: 0px;
                }
            `}</style>
        </>
    );
}

export default LastNewsLayoutTwo 