import express, { Request, Response } from "express";
import { dbT } from "../db/mongo-.db";

export const routerDeletDate = () => {
  const router = express.Router();

  router.delete("/", (req: Request, res: Response) => {
    dbT.getCollections().blogCollection.deleteMany({});
    dbT.getCollections().postCollection.deleteMany({});

    res.sendStatus(204);
    return;
  });

  return router;
};
