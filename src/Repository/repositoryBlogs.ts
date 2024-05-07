import { dbT } from "../db/mongo-.db";
import { BlogInputModelT, BlogViewModelT, dbBl } from "../types/typeBlog";


export const repositoryBlogs = {
  async getBlogs(): Promise<BlogViewModelT[]> {
    const result = await dbT.getCollections().blogCollection.find({}, { projection: { _id: 0 } }).toArray();
    return result;
  },
  async createBlogs(body: BlogInputModelT): Promise<BlogViewModelT | null> {
    let idBlogs = Math.random();
    const newBlog: BlogViewModelT = {
      id: idBlogs.toString(),
      name: body.name,
      description: body.description,
      websiteUrl: body.websiteUrl,
      createdAt: new Date().toISOString(),
      isMembership: false,
    };

    await dbT.getCollections().blogCollection.insertOne(newBlog);

    const newBLogFind = this.findBlogs(newBlog.id);

    return newBLogFind;
  },
  async findBlogs(id: string): Promise<BlogViewModelT | null> {
    const result = await  dbT.getCollections().blogCollection.findOne({ id: id }, { projection: { _id: 0 } });
    if (!result) {
      return null;
    }
    return result;
  },
  async updatBlogs(body: BlogInputModelT, id: string): Promise<void> {
    await dbT.getCollections().blogCollection.updateOne({ id: id }, { $set: { name: body.name, description: body.description, websiteUrl: body.websiteUrl } });
  },
  async deleteBlogs(id: string): Promise<void> {
    await dbT.getCollections().blogCollection.deleteOne({ id: id });
  },
};
