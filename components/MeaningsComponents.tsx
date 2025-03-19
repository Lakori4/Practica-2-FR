// deno-lint-ignore-file jsx-key
import { FunctionalComponent } from "preact/src/index.d.ts";
import { Meanings } from "../utils/dictionaryAPI.ts";


const MeaningsComponent:FunctionalComponent<Meanings> = (props) => {
    const {partOfSpeech, definitions, synonyms, antonyms} = props
    console.log(definitions);
    return (
        <div class="meaningComponent">
            
            <h1>Definitions for part of speech: {partOfSpeech}</h1> 
            <ol>
                {definitions.map(e => { return <li><h2>{e.definition}</h2>
                    { e.synonyms.length !== 0 ? <div class="defSynonyms">
                        <h3>Synonyms</h3> <ul>
                        {e.synonyms.map(e => { return <li>{e}</li>})}
                        </ul></div>: null 
                    }
                    { e.antonyms.length !== 0 ? <div class="defAntonyms">
                        <h3>Antonyms</h3> <ul>
                        {e.antonyms.map(e => { return <li>{e}</li>})}
                        </ul></div>: null 
                    }
                    

                     
                </li>})}
            </ol>
            
            <h3>{synonyms}</h3>
            <h3>{antonyms}</h3>
        </div>
    ) 
}

export default MeaningsComponent