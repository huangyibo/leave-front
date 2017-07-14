export class Page<T> {
  page_size: number = 10;    // 每页多少条数据
  total_page: number;   // 总页数
  row_count: number;    // 总记录数
  current_page: number = 1; // 当前页
  pre_page: number;     // 当前页的上一页
  next_page: number;    // 当前页的下一页
  has_next_page: boolean = false;// 当前页是否有下一页
  has_pre_page: boolean = false;  // 当前页是否有上一页
  list: Array<T>;    // 查询结果

  public static ReviewCategory: string[] = ['ALL','OFFICER','LEADER'];

  public static generateUrlOptions(page_no: number, limit: number): string {
    if (page_no === null || page_no <= 0) {
      page_no = 1;
    }
    if (limit === null || page_no <= 0) {
      limit = 10;
    }
    let options = "?page_no=" + page_no + "&limit=" + limit;
    return options;
  }

  public static generateUrlOptionWithCategory(category: string, page_no: number, limit: number): string {
    let isExistedCategory = false;
    if(category){
      Page.ReviewCategory.forEach((value, index) => {
        if (category.toUpperCase() === value){
          isExistedCategory = true;
        }
      });
    }
    let options = isExistedCategory? (Page.generateUrlOptions(page_no, limit)+'&category='+category) : Page.generateUrlOptions(page_no, limit);

    return options;
  }

}
