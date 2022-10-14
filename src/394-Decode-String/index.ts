const decodeString = (s: string): string => {
    let match = s.match(/(\d+)\[([a-z]+)\]/);
    while (match !== null) {
        s = s.replace(/(\d+)\[([a-z]+)\]/, match[2].repeat(parseInt(match[1])));
        match = s.match(/(\d+)\[([a-z]+)\]/);
    }
    return s;
};

console.log(decodeString('3[a]2[bc]'));