const maxProfit = (prices: number[]): number => {
    let pMax = 0;
    let [leftPtr,rightPtr] = [0, 1];
    
    while (rightPtr < prices.length) {
        if (prices[leftPtr] < prices[rightPtr]) {
            pMax = Math.max(pMax, prices[rightPtr] - prices[leftPtr]);
        } else {
            leftPtr = rightPtr;
        }
        rightPtr++
    }
    
    return pMax
};