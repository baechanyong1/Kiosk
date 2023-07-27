const express = require("express")
const config = require("./config.js");
const connector = require("./database/db.js");

class App{
    constructor(){
        this.app = express()
        this.connector = connector
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