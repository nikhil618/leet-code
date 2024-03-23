const xl = require("excel4node");
const wb = new xl.Workbook();
const ws_a = wb.addWorksheet("A - Two route concentration");
const ws_b = wb.addWorksheet("B - One route conentration");
const ws_c = wb.addWorksheet("C - Average contentration");

const parser = (data) => {
  data = data.split("\n");
  const results = [];
  data.map((i) => {
    const [name, power] = i.split("\t");
    results.push({ name, power: +power });
  });
  return results;
};

function greedyEqualPartitioning(sorted, numberOfSubsets = 3) {
  const out = [...Array(numberOfSubsets)].map((x) => {
    return {
      sum: 0,
      elements: [],
    };
  });

  for (const elem of sorted) {
    const chosenSubset = out.sort((a, b) => a.sum - b.sum)[0];
    chosenSubset.elements.push(elem);
    chosenSubset.sum += elem.power;
  }

  return out.map((subset) => subset.elements);
}

function greedyTwoPartioning(sorted, numberOfSubsets = 3) {
  const weak = sorted.slice(40);
  const total = weak.reduce((sum, curr) => curr.power + sum, 0);
  sorted = sorted.slice(0, 40);
  const out = [...Array(numberOfSubsets - 1)].map((x) => {
    return {
      sum: 0,
      elements: [],
    };
  });

  for (const elem of sorted) {
    const chosenSubset = out.sort((a, b) => a.sum - b.sum)[0];
    chosenSubset.elements.push(elem);
    chosenSubset.sum += elem.power;
  }

  out.push({sum: total, elements: [...weak]})

  return out.map((subset) => subset.elements);
}


function greedyOnePartioning(sorted, numberOfSubsets = 3) {
    const strong = sorted.slice(0, 20);
    const total = strong.reduce((sum, curr) => curr.power + sum, 0);
    sorted = sorted.slice(20);
    const out = [...Array(numberOfSubsets - 1)].map((x) => {
      return {
        sum: 0,
        elements: [],
      };
    });
  
    for (const elem of sorted) {
      const chosenSubset = out.sort((a, b) => a.sum - b.sum)[0];
      chosenSubset.elements.push(elem);
      chosenSubset.sum += elem.power;
    }
  
    out.push({sum: total, elements: [...strong]})
  
    return out.map((subset) => subset.elements);
  }

const data = `WillowMc	3662
Sinister	2965
IceKing	2658
Akatosh	2481
HunterX	2315
Stryker	2209
SonLord	2083
tome3	2065
Nukem	1970
Sunshine	1878
ThiccBumsal	1877
HarryPutta	1804
Kaboom	1741
YoungMonster	1725
Saniks	1710
Spunky	1682
Morgan	1682
Turan	1668
Aki	1660
Verz	1651
Ace	1646
ItachiSama	1628
Miyav	1622
Fury	1579
Gapcio	1539
Xeno	1490
Hellbilly	1488
Cube	1471
Bropheus	1464
Champion	1453
Zadkiel	1450
Ahtoh	1428
emporer	1419
Askanah	1411
Beer	1391
Cintia	1388
ProPraham	1378
Quirinius	1373
Vito	1363
loki	1358
sultan	1354
sundil	1353
Keira	1348
MilchMaid	1342
BiGGz	1341
KingMohammed	1340
Cahyoc	1338
MGD	1335
Fern	1333
Zephren	1333
HogDemo	1328
Mustafa Sandal	1328
Tomek	1327
Stingy	1323
Kitali	1320
Davey	1319
Tyco	1318
Samet	1317
Pilot	1315
ArToSiv	1315`;
const parsedData = parser(data).sort((a, b) => b.power - a.power);
const arrA = greedyTwoPartioning(parsedData);
const arrB = greedyOnePartioning(parsedData);
const arrC = greedyEqualPartitioning(parsedData);

const stringify = (arrA, arrB, arrC) => {
  arrA.map((subset, groupIdx) => {
    const col = 2 * groupIdx + (groupIdx + 1);
    subset.map((i, idx) => {
      ws_a.cell(idx + 1, col).string(i.name);
      ws_a.cell(idx + 1, col + 1).number(i.power);
    });
  });

  arrB.map((subset, groupIdx) => {
    const col = 2 * groupIdx + (groupIdx + 1);
    subset.map((i, idx) => {
      ws_b.cell(idx + 1, col).string(i.name);
      ws_b.cell(idx + 1, col + 1).number(i.power);
    });
  });

  arrC.map((subset, groupIdx) => {
    const col = 2 * groupIdx + (groupIdx + 1);
    subset.map((i, idx) => {
      ws_c.cell(idx + 1, col).string(i.name);
      ws_c.cell(idx + 1, col + 1).number(i.power);
    });
  });
  wb.write("Excel.xlsx");
};

stringify(arrA, arrB, arrC);
