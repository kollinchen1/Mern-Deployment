const Pirate = require("../controllers/Pirate.controller");

module.exports = (app) => {
    app.get("/api/pirates", Pirate.findAll);
    app.get("/api/pirates/:id", Pirate.findOne);
    app.post("/api/pirates", Pirate.create);
    app.put("/api/pirates/:id", Pirate.update);
    app.delete("/api/pirates/:id", Pirate.delete);
}