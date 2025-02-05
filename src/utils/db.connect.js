import mongoose from "mongoose";
import { dbName } from "../constants/db.name.js";
import 'dotenv/config'

const db = async () => {
    try {const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${dbName}`);
        console.log(`Database is Connected...!!!: ` + connectionInstance.connection.host);}
    catch (err) {
        console.log(`Database failed to Connect...: ` + err);
    }
}

export default db;