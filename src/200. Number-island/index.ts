function numIslands(grid: string[][]): number {
    let islands = 0;

    for(let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        for(let colIndex = 0; colIndex < grid[rowIndex].length; colIndex++) {
            if (grid[rowIndex][colIndex] === '1') {
                islands++;
                teraform(rowIndex, colIndex, grid);
            }
        }
    }

    return islands;
};

const teraform = (row: number, col: number, grid: string[][]) => {
    if (grid[row] === undefined || grid[row][col] === undefined || grid[row][col] === '0') return;

    grid[row][col] = '0';
    teraform(row + 1, col, grid);
    teraform(row - 1, col, grid);
    teraform(row, col + 1, grid);
    teraform(row, col - 1, grid);
}
// Expected output: 1
console.log(numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]));

// Expected output: 3
console.log(numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]))