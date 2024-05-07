import { dbT } from "../db/mongo-.db";
import { PostViewModelT, PostInputModelT } from "./../types/typePosts";



export const repositoryPosts = {
  async getPosts(): Promise<PostViewModelT[]> {
    const result = await dbT.getCollections().postCollection.find({}, { projection: { _id: 0 } }).toArray();
    return result;
  },

  async creatPosts(body: PostInputModelT): Promise<PostViewModelT | null> {
    let idPostss = Math.random();

    const newPosts: PostViewModelT = {
      id: idPostss.toString(),
      title: body.title,
      shortDescription: body.shortDescription,
      blogId: body.blogId,
      blogName: "no name",
      content: body.content,
      createdAt: new Date().toISOString(),
    };

    await dbT.getCollections().postCollection.insertOne(newPosts);

    const newFindPost = this.findPosts(newPosts.id);

    return newFindPost;
  },

  async findPosts(id: string): Promise<PostViewModelT | null> {
    const result = dbT.getCollections().postCollection.findOne({ id: id }, { projection: { _id: 0 } });
    if (!result) {
      return null;
    }
    return result;
  },

  async updatPosts(body: PostInputModelT, id: string): Promise<void> {
    await dbT.getCollections().postCollection.updateOne(
      { id: id },
      { $set: { content: body.content, blogId: body.blogId, shortDescription: body.shortDescription, title: body.title } }
    );
  },

  async deletePosts(id: string): Promise<void> {
    await dbT.getCollections().postCollection.deleteOne({ id: id });
  },
};
