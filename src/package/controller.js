const Model = require("./index");

/*
   @crud
   @index
   @all
   @store
   @update
   @delete
*/

exports.index = async(req, res) => {
    const _id = req.params.id;
    const data = await Model.findById(_id);
    res.status(200).json({ data });
};

exports.all = async(req, res) => {
    const data = await Package.find({});
    res.status(200).json({ data });
};

exports.store = async(req, res) => {
    const { 
        title,
        conf,
        pkgs
    } = req.body;

    const _row = new Model({
        title,
        conf,
        pkgs
    })

    const data = await _row.save();

    if (data) {
        return res.status(201).json({
            success: true,
            message: "Package created successfully",
        });
    }
};


