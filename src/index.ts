import { app } from "./app";
import { dbT } from "./db/mongo-.db";
import { SETTINGS } from "./seting/seting";




const startApi = async () => {
 await dbT.run(SETTINGS.MONGO_URL)

  app.listen(SETTINGS.PORT, () => {
    console.log(`server  start`);
  });
};
startApi();
