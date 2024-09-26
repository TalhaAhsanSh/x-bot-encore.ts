import { TwitterApi } from "twitter-api-v2";
import { secret } from "encore.dev/config";

const appKey = secret("TWITTER_API_KEY");
const appSecret = secret("TWITTER_API_SECRET");
const accessSecret = secret("TWITTER_ACCESS_SECRET");
const accessToken = secret("TWITTER_ACCESS_TOKEN");

export const xRWClient = new TwitterApi({
    appKey : appKey(),
    appSecret: appSecret(),
    accessSecret : accessSecret(),
    accessToken: accessToken()
});

export const xClient = xRWClient.readWrite;
