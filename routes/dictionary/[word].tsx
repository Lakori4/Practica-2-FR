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


const capitalize = (word: string) => {

    const firstLetter = word.charAt(0)
    const firstLetterCap = firstLetter.toUpperCase()
    const remainingLetters = word.slice(1)

    return firstLetterCap + remainingLetters;
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
    const word = capitalize(props.params.word);

    return(
        <div class="container_component">
            <h1>{word}</h1>
            {meanings.map(e => <MeaningsComponent {...e}/>)}
            <h2>Phonetics</h2>
            {phonetics.map(e => <PhoneticsComponent {...e}/>)}
        </div>
    )
}