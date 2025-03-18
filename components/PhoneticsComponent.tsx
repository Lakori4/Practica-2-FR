
import { FunctionalComponent } from "preact/src/index.d.ts";
import { Phonetics } from "../utils/dictionaryAPI.ts";

type Props = {
    Phonetics: Phonetics
}

const PhoneticsComponent:FunctionalComponent<Props> = (props) => {
    const phonetics = props.Phonetics
    return(
        <div>
            <div>
                {phonetics.map(e => e.audio !== "" ? <audio key="audio" controls autoplay><source src={e.audio} type="audio/ogg"></source></audio> : null)}
            </div>
        </div>
    )
}

export default PhoneticsComponent