const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

// create post
router.post("/",async (req,res) =>{
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err);
    }
})


//update post 
router.put("/:id",async(req,res) =>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).json("your post has been updated");
        }else{
            res.status(403).json("you can update only your post");
        }
    }catch(err){
        res.status(500).json(err);
    }
})

//delete post
router.delete("/:id",async (req,res) =>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("your post has been deleted");
        }else{
            res.status(403).json("you can delete only your post");
        }
    }catch(err){
        res.status(500).json(err);
    }
})

// like and dislike post
router.put("/:id/like",async (req,res) =>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}});
            res.status(200).json("post has been liked");
        }else{
            await post.updateOne({$pull:{likes:req.body.userId}});
            res.status(200).json("post has been diliked");
        }
    }catch(err){
        res.status(500).json(err)
    }
})

//get post
router.get("/:id", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(err);
    }
});


//timeline posts
router.get("/timeline/:userId",async (req,res)=>{
    try{
        const currentUser = await User.findById(req.params.userId);
        const userPost = await Post.find({userId:currentUser._id});
        const friendPost = await Promise.all(
            currentUser.followings.map(friendId => {
                return Post.find({userId:friendId});
            })
        );
        console.log(friendPost)
        res.status(200).json(userPost.concat([...friendPost]));
        console.log(userPost)
    }catch(err){
        res.status(500).json(err);
    }
})


//get user's all posts
router.get("/profile/:username",async (req,res)=>{
    try{
        const user = await User.findOne({username:req.params.username});
        const posts = await Post.find({userId:user._id});
        res.status(200).json(posts);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;


