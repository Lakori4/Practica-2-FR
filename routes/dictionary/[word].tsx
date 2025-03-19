// deno-lint-ignore-file jsx-key
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

    if (!props.data) {
        return (
            <div>
                <h1>The word <i>{props.params.word}</i> does not exist</h1>
            </div>
        )
    }

    const {meanings, phonetics} = props.data
    return(
        <div class="container_component">
            <h2>Meanings</h2>
            {meanings.map(e => <MeaningsComponent {...e}/>)}
            <h2>Phonetics</h2>
            {phonetics.map(e => <PhoneticsComponent {...e}/>)}
        </div>
    )
}