const controllers = require("../../app/controllers/controller");
const router = (app) => {
  app.post("/createQR", controllers().sendQr);
};
module.exports = router;
