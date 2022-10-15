//Input: s = "abccccdd"
//Output: 7
//Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

const longestPalindrome = (s: string): string => {
    if (s.length === 0) return '';
    let new_str = transformString(s);
    let P = new Array(new_str.length).fill(0);
    let [right, center, longestLength, longestCenter] = [0, 0, 0, 0];
    
    for(let i = 0; i < new_str.length; i++) {
        const mirror_index = 2*center - i;

        if (i < right) {
            P[i] = Math.min(P[mirror_index], right - i);
        }

        let leftPointer = i - (P[i] + 1);
        let rightPointer = i + (P[i] + 1);

        while (leftPointer >=0 && rightPointer < new_str.length && new_str[leftPointer] === new_str[rightPointer]) {
            P[i]++;
            leftPointer--;
            rightPointer++;
        }

        if (i + P[i] > right) {
            right = i + P[i];
            center = i;
        }

        if(P[i] > longestLength) {
            longestLength = P[i];
            longestCenter = i;
        }
    }
    
    return new_str.substring(longestCenter - longestLength, longestCenter + longestLength).split('#').join('');
};

// Returns string with # characters between every character and at the start and end of the string
// For making it ready for Manacher's algorithm to identify both even/odd numbered palindrome
const transformString = (s: string) => {
    return `#${(s.split('').join('#'))}#`;
}

console.log(longestPalindrome('abccccdd'));
