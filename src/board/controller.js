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
    const data = await Model.find({});
    res.status(200).json({ data });
};

exports.store = async(req, res) => {
    const { 
        title,
        tasks,
        content
    } = req.body;

    const _row = new Model({
        title,
        tasks,
        content
    })

    const data = await _row.save();

    if (data) {
        return res.status(201).json({
            success: true,
            message: "Board added",
        });
    }
};

exports.update = async(req, res) => {
    const { _id } = req.query
    const { 
        title,
        tasks,
        content
    } = req.body;

    const updates = {
        title,
        tasks,
        content
    };
    
    const _row = await Model.findOneAndUpdate(
        { _id }, 
        { $set: updates },
        { returnOriginal: false },
    )

    if(_row){
        return res.status(201).json({
            success: true,
            message: "Updated"
        });
    }

    return res.status(400).json({
        err,
        message: "Something went wrong",
    });
}
