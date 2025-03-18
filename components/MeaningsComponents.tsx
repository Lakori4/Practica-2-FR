import { FunctionalComponent } from "preact/src/index.d.ts";
import { Meanings } from "../utils/dictionaryAPI.ts";

type Props = {
    Meanings: Meanings;
}
const MeaningsComponent:FunctionalComponent<Props> = (props) => {

    const meanings = props.Meanings;
    //console.log(props.map(e => e.partOfSpeech));
    return (
        <div>

            {meanings.map(e => <h3>{e.partOfSpeech}</h3>)}

{/*{meanings.map(e => {<h3>{e.partOfSpeech}</h3>; {e.definitions.map(e => e.definition)})})}*/}
        </div>
    ) 
}

export default MeaningsComponent