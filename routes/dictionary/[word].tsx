import { FreshContext, Handlers } from "$fresh/server.ts";




type Data = {
    word: string, 
    phonetic: string, 
    meanings: string[],   
}


export const handler:Handlers = {
    GET: async (_req: Request, ctx: FreshContext <unknown, Data>) => {
        const {word} = ctx.params;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

        try {
            
        } catch (error) {
            return new Response("Error: " + error); 
        }
    }
}