export type Phonetics = {
    audio: string
    text?: string
    sourceUrl?: string 
}

export type Meanings = {
    partOfSpeech: string
    definitions: {
        definition: string
        synonyms: string [],
        antonyms: string [],
        example?: string
    }[]
    synonyms: string []
    antonyms: string []
}

type DictionaryAPI = {
    word: string
    phonetics: Phonetics[]
    meanings: Meanings[]
}[]

type DictionaryErrorAPi = {
    title: string
}

export type Dictionary = {
    word: string
    phonetics: Phonetics[]
    meanings: Meanings[]
    title?: string
}

export const getMeanings = async (word: string) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const data = await fetch(url)
    const result: DictionaryAPI = await data.json()
    const resultFinal: Dictionary = result[0] 
    return resultFinal
}