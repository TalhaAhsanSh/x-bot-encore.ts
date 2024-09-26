import { CronJob } from "encore.dev/cron";
import { postTweet } from "../apis/twitter.api";

const _ = new CronJob("Post-Tweet", {
    every: "30m",
    endpoint: postTweet
})