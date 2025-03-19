
import { FunctionalComponent } from "preact/src/index.d.ts";
import { Phonetics } from "../utils/dictionaryAPI.ts";


const PhoneticsComponent:FunctionalComponent<Phonetics> = (props) => {
    const { audio, text, sourceUrl} = props
    return(
        <div class="Phonetics_component">
            <h3>Text: {text !== undefined ? text : "No available"}</h3>
            {audio !== "" ? <audio key="audio" controls><source src={audio} type="audio/ogg"></source></audio> : <p>Audio no available</p>}
            <p>SourceUrl: {sourceUrl !== undefined ? sourceUrl : "No available"}</p>
            
        </div>
    )
}

export default PhoneticsComponent