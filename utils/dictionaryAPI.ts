export type MeaningAPI = {
    definitions: { definition: string } 
}

export type WordAPI = {
    phonetic: string,
    meanings: MeaningAPI[],
}

type Data = {
    word: string, 
    phonetic: string, 
    meanings: string[],   
}


export const getMeanings = async (word: string): Promise<> => {
    
}