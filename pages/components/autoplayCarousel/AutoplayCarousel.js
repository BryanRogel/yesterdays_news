
function AutoplayCarousel({ dataNews }){

    const lol = dataNews;

    return(
        <>
            <div className="slider">
                <div className="slide-track">
                    { lol && lol.map((item, i) => (
                        <div className="slide" key={i}>
                            <div className="slideContent" style={{ height: "80px", width: "300px" }}>{item.title}</div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`

            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-300px * 10))}
            }


            .slider {
                background: #fff;
                height: 100px;
                overflow:hidden;
                position: relative;
                width: 100%;
                border-top: solid 2px #d4d4d4;
                border-bottom: solid 2px #d4d4d4;
                margin-bottom: 10px;
            }
            .slider::before,
            .slider::after {
                    /* background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%); */
                    content: "";
                    height: 100px;
                    position: absolute;
                    width: 200px;
                    z-index: 2;
                }
                
                .slider::after {
                    right: 0;
                    top: 0;
                    transform: rotateZ(180deg);
                }

                &::before {
                    left: 0;
                    top: 0;
                }
                
                .slide-track {
                    margin: 5px 0;
                    animation: scroll 40s linear infinite;
                    display: flex;
                    width: calc(300px * 20);
                }
                
                .slide {
                    height: 90px;
                    width: 300px;
                    background: #ffbde2;
                }
                .slideContent {
                    margin: 5px 0;
                    align-items: center;
                    justify-content: center;
                    display: flex;
                    text-align: justify;
                    font-size: 15px;
                    padding: 0px 8px;
                    border-right: solid 2px #000;
                }
            `}</style>
        </>
    );
}

export default AutoplayCarousel;