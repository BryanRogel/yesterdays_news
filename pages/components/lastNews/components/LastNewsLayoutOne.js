import moment from 'moment';

const LastNewsLayoutOne = () => {
    return(
        <>
            <div className="col-xl-6 col-6">
                <h1>Hola esta es una prueba</h1>
                <span>{moment().endOf('day').fromNow()}</span>
                <p>Minim velit eiusmod consequat exercitation nostrud ad elit fugiat enim fugiat. Sit ipsum commodo in dolore. Magna duis do magna adipisicing laboris sunt velit id. Aute occaecat ex sint quis nulla. Exercitation quis mollit fugiat excepteur id magna ut adipisicing irure proident.</p>
            </div>
            <img
                className="col-xl-6 col-6"
                src="https://cdn-pro.elsalvador.com/wp-content/uploads/2019/04/apulo.jpg"
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
                }
                p, span {
                    font-family: 'roboto-light';
                    max-height: 130px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                img {
                    filter: grayscale(100%);
                    object-fit: cover;
                }
            `}</style>
        </>
    );
}

export default LastNewsLayoutOne 