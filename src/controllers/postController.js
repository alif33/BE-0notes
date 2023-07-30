const Post = require("../models/Post");

exports.getPost = async(req, res) => {
    const _id = req.params.id;
    const post = await Post.findById(_id);
    res.status(200).json({post});
};

exports.getPosts = async(req, res) => {
    const posts = await Post.find({});
    res.status(200).json({posts});
};

exports.addPost = async(req, res) => {
    const { 
        title,
        category,
        content
    } = req.body;

    const _post = new Post({
        title,
        category,
        content
    })

    const post = await _post.save();

    console.log(post);

    if (post) {
        return res.status(201).json({
            success: true,
            message: "Post created successfully",
        });
    }
};
