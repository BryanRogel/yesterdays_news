import { useState, useEffect } from 'react';

import LastNewsLayoutOne from './components/LastNewsLayoutOne';
import LastNewsLayoutTwo from './components/LastNewsLayoutTwo';

function LastNews({ dataNews }) {
    useEffect(() => {
        getMeta(dataNews?.urlToImage);
    }, [])

    const [layoutType, setLayoutType] = useState(false)

    const getMeta = (url) => {
        var img = new Image();
        img.src = url;
        img.onload = function() {
            if(this.height+100 > this.width){
                setLayoutType(true)
            } else {
                setLayoutType(false)
            }
            console.log(this.width + 'px ' + this.height + 'px')
        }
    }
    
    return(
        <>
        <aside className="row">
            {layoutType ?
                <LastNewsLayoutOne dataNews={dataNews} />
                : 
                <LastNewsLayoutTwo dataNews={dataNews} />
            }
        </aside>
        <style jsx>{`
            @font-face {
                font-family: 'bebas-neue';
                src: url('/fonts/bebas-neue.ttf');
            }
            @font-face {
                font-family: 'roboto-light';
                src: url('/fonts/roboto-light.ttf');
            }
            width: 100%;
            color: #000;
            aside {
                border-top: solid 2px #d4d4d4;
                padding-top: 15px;
            }
            .row {
                margin: 0px;
            } 
        `}</style>
        </>
    );
}

export default LastNews