

export const SETTINGS = {
  PORT: process.env.PORT || 3005,
  PATH: {
    BLOGS: "/api/blogs",
    POSTS: "/api/posts",
    ALLDATA: "/api/testing/all-data",
  },
  HTTPCOD: {
    HTTPCOD_200: 200,
    HTTPCOD_201: 201,
    HTTPCOD_400: 400,
    HTTPCOD_404: 404,
    HTTPCOD_204: 204,
    HTTPCOD_401: 401,
  },
  MONGO_URL: "mongodb://localhost:27017",
  DB_NAME: "page",
  DB_TEST: "test",
  BLOG_COLLECTION_NAME: "blogs",
  POST_COLLECTION_NAME: "posts",
};
