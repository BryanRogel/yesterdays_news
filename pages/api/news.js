import { getNews } from '../../services/path';

export default async (req, res) => {
    if (req.method === 'GET') {
        const response = await fetch(getNews());
        let data = await response.json();
        if (data?.status === 'ok') {
            const lastNews = [];
            const mainNews = [];
            const headLines = [];
            data?.articles.forEach((itemData, i) => {
                if ( i < 5 && itemData?.description && itemData?.urlToImage ) {
                    lastNews.push(itemData)
                } else if (i = 5 && i < 10 && itemData?.description && itemData?.urlToImage) {
                    headLines.push(itemData)
                } else if (i = 10 && i < 25 && itemData?.description && itemData?.urlToImage) {
                    mainNews.push(itemData)
                }
            });
            res.statusCode = 200;
            res.json({
                "code": "00",
                "message": "Operación realizada con éxito",
                "result": {
                    "lastNews": lastNews,
                    "mainNews": mainNews,
                    "headLines": headLines,
                    "allNews": data?.articles
                }
            });
        } else {
            res.statusCode = 400;
            res.json({
                "code": "400",
                "message": "Operación falló",
            });
        }
    }
}