interface Pagination {
  paginate: (
    data: Posts[],
    options: { pageSize: number },
  ) => PaginationResult[];
}

interface PaginationURL {
  current: string;
  next: string;
  prev: string;
  last: string;
  first: string;
}

interface PaginationResult {
  params: { page: string };
  props: {
    page: {
      data: Posts[];
      start: number;
      end: number;
      size: number;
      total: number;
      currenPage: number;
      lastPage: number;
      url: PaginationURL;
    };
  };
}
