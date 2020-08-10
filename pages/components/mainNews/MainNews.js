import moment from 'moment';

export default function MainNews(){
    return(
        <>
            <main className="row">
                <img
                    className="col-xl-12 col-12"
                    src="https://s.yimg.com/ny/api/res/1.2/0VNy9LjbqUjakHZLFID6Kg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyODA7aD0xNTQ0LjUzMzMzMzMzMzMzMzM-/https://s.yimg.com/uu/api/res/1.2/EpzpJwGdwi3uyJIl0zx8ag--~B/aD0zMDAwO3c9MjQ4NztzbT0xO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ap.org/87333dc45b5ac0fcf45dd299bb8c7c39"
                    alt="foto"
                    style={{ height: '275px', }}
                />
                <div className="col-xl-12 col-12">
                {/* <p>Source: Yahoo Entertainment</p> */}
                    <h1>UN experts: North Korea flouts sanctions on nukes, missiles</h1>
                    <p>U.N. experts say North Korea is flouting U.N. sanctions by expanding its nuclear arsenal and ballistic missile program and by exporting coal and illegally importing refined petroleum products in excess of its annual quota. The experts said in key sections of …</p>
                </div>
                </main>
            <style jsx>{`
                img {
                    filter: grayscale(100%);
                    object-fit: contain;
                }
                main {
                    padding-top: 15px;
                    border: solid 2px #d4d4d4;
                    margin: 0px;
                }
                p {
                    color: #979797;
                }
                h1 {
                    margin: 0;
                }
            `}</style>
        </>
    );
}