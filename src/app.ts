import express from "express";
import { routerBlogs } from "./routers/routerBlogs";
import { routerPosts } from "./routers/routerPosts";
import { routerDeletDate } from "./routers/routerDeleteDate";
import { SETTINGS } from "./seting/seting";

export const app = express();

app.use(express.json());
app.use(SETTINGS.PATH.BLOGS, routerBlogs());
app.use(SETTINGS.PATH.POSTS, routerPosts());
app.use(SETTINGS.PATH.ALLDATA, routerDeletDate());
