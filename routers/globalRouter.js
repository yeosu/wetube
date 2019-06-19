import express from "express";
import passport from "passport";
import routes from "../routes";
import { home, search } from "../controllers/videoControllers";
import { 
    getJoin, 
    getLogin, 
    logout, 
    postJoin, 
    postLogin, 
    githubLogin,
    postGithubLogin,
    getMe
} from "../controllers/userControllers";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.gitHub, githubLogin);

globalRouter.get(
    routes.githubCallback, 
    passport.authenticate("github", { failureRedirect: "/login" }),
    postGithubLogin
);

globalRouter.get(routes.me, getMe)

export default globalRouter;
