import { googleGenAI } from "../twitter/client/setup/gemini.client.setup";
import { xClient } from "./client/setup/twitter.client.setup";

export class TwitterService{

    private async generateTweet(): Promise<string> {
        const prompt = "Generate a funny, sarcastic tweet about crypto or coding frustrations.";
    
        try {
            const model = googleGenAI.getGenerativeModel({
                model: "gemini-1.5-flash"
            });
    
            const response = await model.generateContent(prompt);
    
            return response.response.text() ?? 'Another day of coding!';
            
        } catch (error: unknown) {
            console.error('Error generating tweet:', error instanceof Error ? error.message : error);
            return 'Another day of coding!';
        }
    }


    public async dynamicTweet(): Promise<Boolean>{
        const tweet = await this.generateTweet()

        if (!tweet || typeof tweet !== 'string' || tweet.trim() === '') {
            console.error('Generated tweet is invalid:', tweet);
            return false;
        }

        try{

            const tweetResponse = await xClient.v2.tweet(tweet)
            console.log("Tweet Posted -> ", tweetResponse.data);

            return true

        }catch(error:unknown){

            console.error('Error posting tweet:', error instanceof Error ? error.message : error);
            return false;

        }
    }
    

}