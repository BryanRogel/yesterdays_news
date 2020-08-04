import moment from "moment";

function Header({ stars }) {
    return(
        <>
            <nav className="col-12">
                <div className="left-menu centered">marca</div>
                <div className="center-menu centered">
                    <div className="title">
                        <p className="name centered">EL SALVADOR</p>
                        <p className="date centered">{moment().format("MMM D, YYYY")}</p>
                    </div>
                </div>
                <div className="right-menu">
                    <div className="content centered">
                        <p className="price">$0.25</p>
                        <p className="separator">|</p>
                        <p className="location">San Salvador</p>
                    </div>
                </div>
            </nav>
            <style jsx>{`
            @font-face {
                font-family: 'bebas-neue';
                src: url('/fonts/bebas-neue.ttf');
                }
                nav {
                    height: 3em;
                    margin: 1em;
                    display: flex;
                    font-family: 'bebas-neue';
                }
                .left-menu {
                    width: 40%;
                    justify-content: flex-start;
                }
                .center-menu {
                    border-top: solid 1.5px #979797;
                    border-bottom: solid 1.5px #979797;
                    width: 20%;
                    justify-content: center;
                    
                }
                .right-menu {
                    display: flex;
                    width: 40%;
                    justify-content: flex-end;
                }
                .centered {
                    display: flex;
                    align-items: center;
                }
                .name {
                    font-size: 20px;
                    letter-spacing: 3px;
                    margin: 0px;
                }
                .date {
                    font-size: 10px;
                    letter-spacing: 3px;
                    margin: 0px;
                    color: #979797;
                    justify-content: center;
                }
                .separator {
                    font-size: 20px;
                }
                .price, .location {
                    font-size: 15px;
                }
                .title, content {
                    margin: 0px;
                }
                .content {
                    display: flex;
                    border-bottom: solid 1.5px #979797;
                    justify-content: center;
                }
                @media only screen and (max-width: 600px) {
                    .left-menu, .right-menu {
                        width: 30%;
                    }
                    .center-menu {
                        width: 40%;
                    }
                }
                @media only screen and (max-width: 450px) {
                    nav { display: block; }
                    .left-menu, .right-menu, .center-menu {
                        width: 100%;
                        justify-content: center;
                        padding: 0.5em;
                    }
                }
            `}</style>
        </>
    );
}

export default Header
