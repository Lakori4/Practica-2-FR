import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import PhoneticsComponent from "../../components/PhoneticsComponent.tsx";
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
    const {meanings, phonetics} = props.data
    return(
        <div class="container_component">
            {meanings.map(e => <MeaningsComponent key={e.partOfSpeech} {...e}/>)}
            {phonetics.map(e => <PhoneticsComponent key={e.audio} {...e}/>)}
        </div>
    )
}