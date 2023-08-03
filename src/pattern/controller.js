const Model = require("./index");

exports.index = async(req, res) => {
    const _id = req.params.id;
    const data = await Model.findById(_id);
    res.status(200).json({data});
};

exports.all = async(req, res) => {
    const data = await Model.find({});
    res.status(200).json({data});
};

exports.store = async(req, res) => {
    const { 
        title,
        category,
        content
    } = req.body;

    const _row = new Model({
        title,
        category,
        content
    })

    const data = await _row.save();

    if (data) {
        return res.status(201).json({
            success: true,
            message: "Post created successfully",
        });
    }
};
