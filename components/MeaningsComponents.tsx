// deno-lint-ignore-file jsx-key
import { FunctionalComponent } from "preact/src/index.d.ts";
import { Meanings } from "../utils/dictionaryAPI.ts";


const MeaningsComponent:FunctionalComponent<Meanings> = (props) => {
    const {partOfSpeech, definitions, synonyms, antonyms} = props
    return (
        <div class="Meaning_component">
            
            <h2>Definitions for part of speech: {partOfSpeech}</h2> 
            <ol>
                {definitions.map(e => { return <li><h3>{e.definition}</h3>
                    { e.synonyms.length !== 0 ? <div class="defSynonyms">
                        <h4>Synonyms</h4> <ul>
                        {e.synonyms.map(e => { return <li>{e}</li>})}
                        </ul></div>: null 
                    }
                    { e.antonyms.length !== 0 ? <div class="defAntonyms">
                        <h4>Antonyms</h4> <ul>
                        {e.antonyms.map(e => { return <li>{e}</li>})}
                        </ul></div>: null 
                    }
                    { e.example ? <h4>Example: {e.example}</h4>: null}                     
                </li>})}
            </ol>
            
            {synonyms.length ? <div><h2>Synonyms</h2>
                <ol>
                    {synonyms.map(e => { return <li><h4>{e}</h4></li>})}
                </ol></div>
            : null}

            {antonyms.length ? <div><h2>Antonyms</h2>
                <ol>
                    {antonyms.map(e => { return <li><h4>{e}</h4></li>})}
                </ol></div>
            : null}
        </div>
    ) 
}

export default MeaningsComponent