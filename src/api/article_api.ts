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

    async viewArticleDetail(category: string, technology: string, fileName: string) {
        // http://118.126.82.184:8080/api/article/view/${category}/${technology}/${fileName}
        return await d3.text(`http://118.126.82.184:8080/api/article/view/%E4%BA%91%E5%8E%9F%E7%94%9F/Docker/redis.md`, {
            method: "GET",
        })
    }
}
