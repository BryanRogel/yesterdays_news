
import Slider from 'infinite-react-carousel';

import MainNews from "../../components/mainNews/MainNews";

export default function Carousel({ dataNews }) {

    const settings =  {
        autoplay: true,
        arrows: false,
        dots: false,
        duration: 100
    };

    return(
        <Slider { ...settings }>
            {dataNews && dataNews.map((data, i) => (
                <MainNews dataNews={data} key={i} />
            ))}
        </Slider>
    );
}
