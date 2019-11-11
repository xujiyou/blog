export interface ArticleState {
    category: any,
    technology: any,
    articleList: [{
        _id: {$oid: String},
        title: string,
        category: string,
        technology: string,
        create_date: string,
        tags: [string],
        view_count: number,
        introduce: string
    }];
}
