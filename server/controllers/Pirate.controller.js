const Pirate = require("../models/Pirate.model") 

module.exports = {
    // READ ALL 
    findAll: (req, res) => {
        Pirate.find()
            .then(allPirates => {
                // console.log("allPirates ->", allPirates);
                res.json({allPiratesArray: allPirates})
            })
            .catch(err => {
                console.log(err)
                res.status(400).json({message: "error", error:err})
            });
    },
    // READ ONE 
    findOne: (req, res) => {
        // console.log("req.params.id =>", req.params.id);
        // Pirate.findOne({_id: req.params.id})
        Pirate.findById(req.params.id)
            .then(Pirate => {
                // console.log("retrieved one Pirate: ", Pirate);
                res.json(Pirate)})
            .catch(err => {
                // console.log("couldn't find obj");
                res.status(400).json({message: "error", error:err})
            })
    },
    // CREATE 
    create: (req, res) => {
        // const {title, content} = req.body;
        // Pirate.create({title, content})
        Pirate.create(req.body)
            .then(newPirate => res.json(newPirate))
            .catch(err => res.status(400).json(err))
    },
    // UPDATE 
    update : (req, res) => {
        // Pirate.findOneAndUpdate({_id: req.params.id})
        Pirate.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
            .then(updatedPirate => res.json(updatedPirate))
            .catch(err => res.status(400).json(err))
    },
    // DELETE 
    delete : (req, res) => {
        // console.log(req.params.id);
        // Pirate.deleteOne({_id: req.params.id})
        Pirate.findByIdAndDelete(req.params.id)
            .then(result => {
                res.json({result: result})
            })
            .catch(err => {
                console.log("ERROR", req.params.id);
                res.status(400).json(err)
            })
    }
}