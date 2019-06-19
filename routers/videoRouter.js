import express from "express";
import { 
    getUpload, 
    postUpload, 
    videoDetail, 
    deleteVideo,
    getEditVideo,
    postEditVideo
} from "../controllers/videoControllers";
import routes from "../routes";
import { uploadVideo, onlyPrivate } from "../middlewares";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

//Delete Video
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;
