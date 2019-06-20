import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import KakaoStrategy from "passport-kakao";
import User from "./models/User";
import { githubLoginCallback, facebookLoginCallback, kakaoLoginCallback } from "./controllers/userControllers";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(new GithubStrategy({
        clientID: process.env.GH_ID,
        clientSecret: process.env.GH_SECRET,
        callbackURL: `http://localhost:5001${routes.githubCallback}`
    },
    githubLoginCallback
));

passport.use(new FacebookStrategy({
        clientID: process.env.FB_ID,
        clientSecret: process.env.FB_SECRET,
        callbackURL: `https://slippery-cat-83.localtunnel.me/${routes.facebookCallback}`,
        profileFields: ["id", "displayName", "photos", "email"],
        scope: ["public_profile", "email"]
    },
    facebookLoginCallback
));

passport.use(new KakaoStrategy({
        clientID : process.env.KAKAO_ID,
        callbackURL : `http://localhost:5001${routes.kakaoCallback}`
    },
    kakaoLoginCallback
));


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());