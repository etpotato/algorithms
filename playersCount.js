const raiting = [
  [
    {
      "login": "stypeano",
      "leaguePoints": 4
    },
    {
      "login": "rstrazir",
      "leaguePoints": 45
    },
    {
      "login": "cathead",
      "leaguePoints": 143
    },
    {
      "login": "cavernous",
      "leaguePoints": 324
    }
  ],
  [
    {
      "login": "ConspiracyLil",
      "leaguePoints": 356
    },
    {
      "login": "CzarStories",
      "leaguePoints": 568
    },
    {
      "login": "GottaSaiyan",
      "leaguePoints": 598
    },
    {
      "login": "Mountaintrid",
      "leaguePoints": 785
    }
  ],
  [
    {
      "login": "Rectionom",
      "leaguePoints": 930
    },
    {
      "login": "JoshChase",
      "leaguePoints": 931
    },
    {
      "login": "DreamLess",
      "leaguePoints": 956
    },
    {
      "login": "BlondiePlanet",
      "leaguePoints": 1045
    }
  ],
  [
    {
      "login": "Breakingbing",
      "leaguePoints": 1056
    },
    {
      "login": "Goldenelox",
      "leaguePoints": 1130
    },
    {
      "login": "SaiyanBroadway",
      "leaguePoints": 1432
    },
    {
      "login": "BoostScooby",
      "leaguePoints": 1476
    }
  ]
];

const exampleResult = {
  "league": 2,
  "placement": 2,
};

const binarySearch = (array, compare) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const center = Math.floor((left + right)/2);
    const isEqual = compare(array[center]);
    if (isEqual === 0) return center;
    else if (isEqual < 0) {
      right = center - 1;
    } else {
      left = center + 1;
    }
  }

  return null;
};


const getPosition = (raiting, score) => {
  const compareLeague = (item) => {
    if (item[0].leaguePoints <= score && item[item.length - 1].leaguePoints >= score) return 0;
    else if (item[0].leaguePoints > score) return -1;
    else return 1;
  };

  const comparePlacement = (item) => {
    if (item.leaguePoints === score) return 0;
    else if (item.leaguePoints > score) return -1;
    else return 1;
  };

  const league = binarySearch(raiting, compareLeague);
  if (!league) return null;

  const rawPlacement = binarySearch(raiting[league], comparePlacement);
  const placement = rawPlacement !== null ? raiting[league].length - rawPlacement : null;

  return league && placement ? { league: league + 1, placement } : null;
};

console.log(getPosition(raiting, 1477));
