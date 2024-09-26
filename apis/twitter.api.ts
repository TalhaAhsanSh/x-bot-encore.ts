import { api } from "encore.dev/api";
import { TwitterController } from "../controller/twitter.controller";

const twitterController = new TwitterController()



export const postTweet = api({
    method: 'POST',
    path: '/api/post/x/tweet',
    expose: false,
}, twitterController.post)