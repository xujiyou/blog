import * as d3 from 'd3';

export class ArticleApi {

    async findAllArticle(category: string, technology: string) {
        let query = "";
        if (category !== undefined && technology === undefined) {
            query = `?category=${category}`;
        } else if (category !== undefined && technology !== undefined) {
            query = `?category=${category}&technology=${technology}`;
        }
        return await d3.json(`http://118.126.82.184:8000/article/list/1${query}`, {
            method: "GET",
        })
    }
}
