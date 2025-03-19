import { FunctionalComponent } from "preact/src/index.d.ts";
import { Meanings } from "../utils/dictionaryAPI.ts";


const MeaningsComponent:FunctionalComponent<Meanings> = (props) => {
    const {partOfSpeech, definitions, synonyms, antonyms} = props
    console.log(definitions);
    return (
        <div class="meaningComponent">
            
            <h1>Definitions for part of speech: {partOfSpeech}</h1>
            <ol>
                {definitions.map(e => <li>{e.definition }</li>)}
            </ol>
            
            <h3>{synonyms}</h3>
            <h3>{antonyms}</h3>

{/*{meanings.map(e => {<h3>{e.partOfSpeech}</h3>; {e.definitions.map(e => e.definition)})})}*/}
        </div>
    ) 
}

export default MeaningsComponent