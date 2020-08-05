export default function NewsHeadlines() {
    return(
        <>
        <aside className="row">
            <img
                className="col-xl-6 col-6"
                src="https://cdn-pro.elsalvador.com/wp-content/uploads/2019/04/apulo.jpg"
                alt="foto"
                style={{ height: '100px', width: '200px' }}
            />
            <div className="col-xl-6 col-6 center">
                <h1>Hola esta es una prueba</h1>
                <span></span>
            </div>
        </aside>
        <style jsx>{`
            color: #000;
            aside {
                border-top: solid 2px #d4d4d4;
                padding: 15px 0;
            }
            .row {
                margin: 0px;
            } 
            h1 {
                font-family: 'bebas-neue';
                font-weight: 100;
                margin-top: 0px;
                font-size: 1.5em;
            }
            img {
                filter: grayscale(100%);
                object-fit: cover;
                padding-left: 0px;
            }
            .center {
                display: flex;
                justify-content: center;
                align-items: center;
                padding-right: 0px;
            }
        `}</style>
        </>
    );
}