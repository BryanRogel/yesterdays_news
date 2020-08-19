import MainNews from '../../components/mainNews/MainNews';

export default function Carousel({ dataNews }) {

    if (typeof window !== 'undefined') {
        autoSlides();
    }

    var timeOut = 0;
    var slideIndex = 0;
    var autoOn = true;

    function autoSlides() {
        timeOut = timeOut - 20;
        if (autoOn == true && timeOut < 0) {
            nextSlides();
        }
        setTimeout(autoSlides, 20);
    }

    function prevSlide() {

        timeOut = 5000;

        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slideIndex--;

        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        if (slideIndex == 0) {
            slideIndex = 3
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    function nextSlides() {

        timeOut = 5000;

        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    return(
        <>
        <div className="slideshow-container">
            { dataNews && dataNews.map((data, index)=>{
                <div className="mySlides fade">
                    <MainNews dataNews={data} key={index} />
                </div>
            })
            }

            <div className="mySlides fade">
                <MainNews />
            </div>
            <div className="mySlides fade">
                <MainNews />
            </div>
            <div className="mySlides fade">
                <MainNews />
            </div>
            <div className="mySlides fade">
                <MainNews />
            </div>
            <div className="mySlides fade">
                <MainNews />
            </div>
            <div style={{textAlign: "center", margin:"-25px"}}>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            </div>
            <a className="prev" onClick={() => prevSlide()}>&#10094;</a>
            <a className="next" onClick={() => nextSlides()}>&#10095;</a>
        </div>
            <style jsx>{`
            .mySlides {
                display: none;
            }
            /* Slideshow container */
            .slideshow-container {
                width: 100%;
                height: 100%;
                max-height: 100vh;
                margin: auto;
            }
            /* The dots/bullets/indicators */
            .dot {
                height: 15px;
                width: 15px;
                margin: 0 2px;
                background-color: #bbb;
                border-radius: 50%;
                display: inline-block;
                transition: background-color 0.6s ease;
            }
            .active {
                background-color: #717171;
            }
            /* Fading animation */
            .fade {
                -webkit-animation-name: fade;
                -webkit-animation-duration: 1.5s;
                animation-name: fade;
                animation-duration: 1.5s;
            }
            @-webkit-keyframes fade {
                from {
                    opacity: .4
                }
                to {
                    opacity: 1
                }
            }
            @keyframes fade {
                from {
                    opacity: .4
                }
                to {
                    opacity: 1
                }
            }
            /* On smaller screens, decrease text size */
            @media only screen and (max-width: 300px) {
                .prev,
                .next,
                .text {
                    font-size: 11px
                }
            }
            /* Next & previous buttons */
            .prev,
            .next {
                cursor: pointer;
                position: absolute;
                width: auto;
                padding: 16px;
                margin-top: -30px;
                color: white;
                font-weight: bold;
                font-size: 18px;
                transition: 0.6s ease;
                border-radius: 0 3px 3px 0;
                user-select: none;
            }
            /* Position the "next button" to the right */
            .next {
                right: 0;
                border-radius: 3px 0 0 3px;
            }
            /* On hover, add a black background color with a little bit see-through */
            .prev:hover,
            .next:hover {
                background-color: rgba(0, 0, 0, 0.8);
            }
            
            `}</style>
        </>
    )
} 