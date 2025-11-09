export const getWordCount = (words: string): number => {
    if (words.length < 1) {
        return 0;
    }

    return words.split(" ").length;
}

export const getCharCount = (words: string): number => {
    return words.length;
}