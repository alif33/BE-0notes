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
    // .populate("articles", { Model })
    res.status(200).json({ data });
};

exports.all = async(req, res) => {
    const data = await Model.find({});
    res.status(200).json({ data });
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
            message: "Project inserted",
        });
    }
};

// exports.added = async(req, res) => {
//     const { _id } = req.query
//     const { 
//         article
//     } = req.body;

//     const _row = await Model.findOneAndUpdate(
//         { _id }, 
//         { $push: { articles: article }},
//         { returnOriginal: false },
//     )

//     if(_row){
//         return res.status(201).json({
//             success: true,
//             message: "Added"
//         });
//     }

//     return res.status(400).json({
//         err,
//         message: "Something went wrong",
//     });

// }