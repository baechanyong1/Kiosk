const express = require("express")
const config = require("./config.js");
const connector = require("./database/db.js");
const bodyParser = require("body-parser");
const router = require("./routes/index.js");

class App{
    constructor(){
        this.app = express()
        this.connector = connector
    }
    setup(){
      this.app.use(express.json());
      this.app.use(bodyParser.urlencoded({extended:false}))
      this.app.use("/",router)
    }
    runServer() {
    this.app.listen(config.server.port, () => {
      console.log("🔥".repeat(40));
      console.log(
        `Server is running on http://localhost:${config.server.port}`
      );
    });
  }
}
module.exports = App;