import { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';

import MainNews from "../../components/mainNews/MainNews";

let changeIndex = null;

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            indexActiveUp: true,
            navLeft: {},
            navRight: {},
        };
    }

    componentDidMount() {
        this.changeItemActiveCarousel();
    }
    
    componentWillUnmount() {
        clearTimeout(changeIndex);
    }
    
    changeItemActiveCarousel = () => {
        const { index, indexActiveUp } = this.state;
        
        // maxIndexActive cuenta el total de los cupones para mostrarlos automticamente
        const maxIndexActive = 10;
        
        changeIndex = setTimeout(() => {
            if (index < 1) {
            this.setState({ index: index + 1, indexActiveUp: true });
            }
            if ((index < maxIndexActive) && index > 0) {
            if (indexActiveUp) {
                this.setState({ index: index + 1 });
            }
            if (!indexActiveUp) {
                this.setState({ index: index - 1 });
            }
            }
            if (index === maxIndexActive) {
            this.setState({ index: index - 1, indexActiveUp: false });
            }
            this.changeItemActiveCarousel();
        }, 5000);
    }

    onChangeIndexActive = (indexChange) => {
        this.setState({ index: indexChange });
        clearTimeout(changeIndex);
        this.changeItemActiveCarousel();
    }
    
    render() {
        const {
        index,
    } = this.state;

        const { dataNews } = this.props;
        console.log("Carousel -> render -> dataNews", dataNews)
    return (
        <div className="carousel-container">
        <ItemsCarousel
            requestToChangeActive={this.onChangeIndexActive}
            activeItemIndex={index}
            numberOfCards={1}
            gutter={20}
            leftChevron={null}
            rightChevron={null}
            chevronWidth={0}
            disableSwipe
        >
                { dataNews.map((data, i) => (
                    <MainNews style={{ height: '200px'}} dataNews={data} key={i} />
                ))}
        </ItemsCarousel>
        <style jsx>{`
            .carousel-container {
                max-width: 674px;
                width: 100%;
            }
        `}</style>
        </div>
    );
        }
}

export default Carousel;
