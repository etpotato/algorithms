const data = [
  {
    "login": "DreamLess",
    "leaguePoints": 956
  },
  {
    "login": "cavernous",
    "leaguePoints": 1056
  },
  {
    "login": "SaiyanBroadway",
    "leaguePoints": 1432
  },
  {
    "login": "BlondiePlanet",
    "leaguePoints": 1045
  },
  {
    "login": "Mountaintrid",
    "leaguePoints": 1130
  },
  {
    "login": "cathead",
    "leaguePoints": 930
  },
  {
    "login": "rstrazir",
    "leaguePoints": 356
  },
  {
    "login": "stypeano",
    "leaguePoints": 4
  },
  {
    "login": "CzarStories",
    "leaguePoints": 568
  },
  {
    "login": "ConspiracyLil",
    "leaguePoints": 18
  },
  {
    "login": "GottaSaiyan",
    "leaguePoints": 931
  },
  {
    "login": "Goldenelox",
    "leaguePoints": 932
  },
  {
    "login": "Breakingbing",
    "leaguePoints": 64
  },
  {
    "login": "Rectionom",
    "leaguePoints": 42
  },
  {
    "login": "BoostScooby",
    "leaguePoints": 1476
  },
  {
    "login": "JoshChase",
    "leaguePoints": 931
  }
];

function getTop3(array) {
  let first = 0;
  let second = 0;
  let third = 0;

  for (const { leaguePoints:item } of array) {
    if (item > first) {
      third = second;
      second = first;
      first = item;
    } else if (item > second) {
      third = second;
      second = item;
    } else if (item > third) {
      third = item
    }
  }

  return [first, second, third];
}

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j].leaguePoints > array[j + 1]?.leaguePoints  ) {
        [array[j], array[j+1]] = [array[j+1], array[j]];
      }
    }
  }
  return array.slice(array.length - 3, array.length).reverse().map((item) => item.leaguePoints);
}



console.log(getTop3(data));
console.log(bubbleSort(data));
