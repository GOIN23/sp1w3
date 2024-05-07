export type BlogViewModelT = {
  id:string
  name: string;
  description: string;
  websiteUrl: string;
  createdAt: string;
  isMembership: boolean;
};


export type BlogInputModelT = {
  name: string;
  description: string;
  websiteUrl: string;
};

export type dbBl = {
  dbBlogs: BlogViewModelT[];
};
