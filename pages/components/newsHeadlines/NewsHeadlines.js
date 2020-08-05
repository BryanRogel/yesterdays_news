export default function NewsHeadlines() {
    return(
        <>
        <aside className="row">
            <img
                className="col-xl-6 col-6"
                src="https://s3media.freemalaysiatoday.com/wp-content/uploads/2020/08/Wires-Twitter-hack-050820-AP.jpg"
                alt="foto"
                style={{ height: '100px' }}
            />
            <div className="col-xl-6 col-6 center">
                <h1>US teen suspect behind Bitcoin scam pleads not guilty to Twitter hack</h1>
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
                font-size: 15px;
            }
            img {
                filter: grayscale(100%);
                object-fit: contain;
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