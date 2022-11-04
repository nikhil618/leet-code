const checkIfPangram =(sentence: string): boolean => {
    let a = "abcdefghijklmnopqrstuvwxyz";
    
    for (let i =0; i < sentence.length; i++) {
        const regex = new RegExp(sentence[i], 'g');
        a = a.replace(regex, '');
    }
    
    return a.length === 0;
};

console.log("1832-Check-if-the-Sentence-Is-Pangram \n")
console.log(`thequickbrownfoxjumpsoverthelazydog ==> `, checkIfPangram('thequickbrownfoxjumpsoverthelazydog'));
console.log(`leetcode ==> `, checkIfPangram('leetcode'));
