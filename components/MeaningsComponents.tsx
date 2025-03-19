import { FunctionalComponent } from "preact/src/index.d.ts";
import { Meanings } from "../utils/dictionaryAPI.ts";

const MeaningsComponent:FunctionalComponent<Meanings> = (props) => {
    const {partOfSpeech, definitions, synonyms, antonyms} = props
    //console.log(props.map(e => e.partOfSpeech));
    return (
        <div>
            <h3>{partOfSpeech}</h3>

{/*{meanings.map(e => {<h3>{e.partOfSpeech}</h3>; {e.definitions.map(e => e.definition)})})}*/}
        </div>
    ) 
}

export default MeaningsComponent