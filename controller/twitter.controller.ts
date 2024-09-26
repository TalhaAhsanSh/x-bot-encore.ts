import { TwitterService } from "../twitter/twitter.service";

export class TwitterController{

    private twitterService : TwitterService;

    constructor(){
        this.twitterService = new TwitterService()
        this.post = this.post.bind(this)
    }

    public async post(): Promise<{ message: string }> {
        try {
            const response = await this.twitterService.dynamicTweet();

            if(!response){
                return { message: 'Failed to post tweet.' };
            }

            return { message: "Tweet Posted Successfully" };
        } catch (error: unknown) {
            console.error('Error posting tweet:', error instanceof Error ? error.message : error);
            return {message : 'Failed to post tweet.'};
        }
    }
}