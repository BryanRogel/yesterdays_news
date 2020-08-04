import { useState, useEffect } from 'react';

import LastNewsLayoutOne from './components/LastNewsLayoutOne';
import LastNewsLayoutTwo from './components/LastNewsLayoutTwo';

function LastNews() {
    useEffect(() => {
        getMeta(
            "https://cdn-pro.elsalvador.com/wp-content/uploads/2019/04/apulo.jpg"
        );
    }, [])

    const [layoutType, setLayoutType] = useState(false)

    const getMeta = (url) => {
        var img = new Image();
        img.src = url;
        img.onload = function() {
            if(this.height+100 > this.width){
                setLayoutType(true)
            } else {false
                setLayoutType(false)
            }
            console.log(this.width + 'px ' + this.height + 'px')
        }
    }
    
    return(
        <>
        <aside className="row">
            {layoutType ?
                <LastNewsLayoutOne/>
                : 
                <LastNewsLayoutTwo/>
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
                border-top: solid 2px #979797;
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