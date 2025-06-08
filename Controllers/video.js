const Video = require('../Modals/video');

exports.uploadVideo = async (req,res)=>{
    try{
        const { title, description, videoLink, videoType,thumbnail }  = req.body;
        console.log(req.user)
        
      

        // res.status(201).json({ sucess: "true", videoUpload });

       


    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}