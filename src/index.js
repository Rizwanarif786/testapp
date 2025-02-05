import {app} from "./app.js";
import 'dotenv/config'
import db from "./utils/db.connect.js";


db()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.info(`Server started on port ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.error('Server Could not be started: ' + err);
    })

//test comments