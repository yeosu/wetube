import express from "express";
import { 
    getUpload, 
    postUpload, 
    videoDetail, 
    editVideo, 
    deleteVideo 
} from "../controllers/videoControllers";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
