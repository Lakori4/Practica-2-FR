
import { FunctionalComponent } from "preact/src/index.d.ts";
import { Phonetics } from "../utils/dictionaryAPI.ts";


const PhoneticsComponent:FunctionalComponent<Phonetics> = (props) => {
    const { audio, text, sourceUrl} = props
    return(
        <div class="Phonetics_component">
            {text !== undefined ? <h3>Text: {text}</h3> : null}
            {audio !== "" ? <audio key="audio" controls><source src={audio} type="audio/ogg"></source></audio> : null}
            {sourceUrl !== undefined ? <p>SourceUrl: {sourceUrl}</p> : null}
        </div>
    )
}

export default PhoneticsComponent