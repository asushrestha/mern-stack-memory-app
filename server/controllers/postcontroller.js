const Post = require("../models/posts.js");

exports.getPosts=async (req, res) =>{ 
  try {
    const postMessage = await Post.find();
    res.status(200).json(postMessage);

  } catch (error) {
      res.status(404).json({message:error.message})
  }
}
exports.createPost =async (req,res)=>{
    const postReq = req.body;
    const newPost = new Post(postReq);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
      console.log(error)
        res.status(409).json({message:error.message});
    }
}