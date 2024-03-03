const Model = require("./index");
const slugify = require("slugify");

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
        article,
        snippets,
        content
    } = req.body;

    const _row = new Model({
        title,
        slug: slugify(title, "-"),
        snippets,
        article,
        content
    })

    const data = await _row.save();

    if (data) {
        return res.status(201).json({
            success: true,
            message: "Task added",
        });
    }
};

exports.update = async(req, res) => {
    const { _id } = req.query
    const { 
        title,
        snippets,
        article,
        content
    } = req.body;

    const updates = {
        title,
        slug: slugify(title, "-"),
        snippets,
        article,
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
