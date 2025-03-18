import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import MeaningsComponent from "../../components/MeaningsComponents.tsx";
import { Dictionary, getMeanings } from "../../utils/dictionaryAPI.ts";


export const handler:Handlers = {
    GET: async (_req: Request, ctx: FreshContext <unknown, Dictionary>) => {
        const {word} = ctx.params;
        const dictionary:Dictionary = await getMeanings(word)
        return ctx.render(dictionary)

    }
}

export default (props:PageProps<Dictionary>) => {
    const {word, meanings, phonetics} = props.data
    return(
        <div>

            <MeaningsComponent Meanings = {meanings}/>
        </div>
    )
}