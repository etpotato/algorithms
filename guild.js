const data = [
  [
    {
      "login": "stypeano",
      "leaguePoints": 4,
      "guild": "seabass"
    },
    {
      "login": "rstrazir",
      "leaguePoints": 356,
      "guild": "seabass"
    },
    {
      "login": "cathead",
      "leaguePoints": 930,
      "guild": "seabass"
    },
    {
      "login": "cavernous",
      "leaguePoints": 1056,
      "guild": "seabass"
    }
  ],
  [
    {
      "login": "ConspiracyLil",
      "leaguePoints": 18,
      "guild": "goldfish"
    },
    {
      "login": "CzarStories",
      "leaguePoints": 568,
      "guild": "goldfish"
    },
    {
      "login": "GottaSaiyan",
      "leaguePoints": 931,
      "guild": "goldfish"
    },
    {
      "login": "Mountaintrid",
      "leaguePoints": 1130,
      "guild": "goldfish"
    }
  ],
  [
    {
      "login": "Rectionom",
      "leaguePoints": 42,
      "guild": "catfish"
    },
    {
      "login": "JoshChase",
      "leaguePoints": 931,
      "guild": "catfish"
    },
    {
      "login": "DreamLess",
      "leaguePoints": 956,
      "guild": "catfish"
    },
    {
      "login": "BlondiePlanet",
      "leaguePoints": 1045,
      "guild": "catfish"
    }
  ],
  [
    {
      "login": "Breakingbing",
      "leaguePoints": 64,
      "guild": "bream"
    },
    {
      "login": "Goldenelox",
      "leaguePoints": 932,
      "guild": "bream"
    },
    {
      "login": "SaiyanBroadway",
      "leaguePoints": 1432,
      "guild": "bream"
    },
    {
      "login": "BoostScooby",
      "leaguePoints": 1476,
      "guild": "bream"
    }
  ]
]

function binarySearchUser(array, element, leftInit, rightInit) {
  const left = leftInit !== undefined ? leftInit : 0;
  const right = rightInit !== undefined ? rightInit : array.length - 1;
  const center = Math.floor((left + right) / 2);
  const item = array[center];

  console.log(item)

  if (left > right) return null;

  if (item.leaguePoints === element) return {guild: item.guild, placement: array.length - center};
  else if (item.leaguePoints > element) {
    return binarySearchUser(array, element, left, center - 1)
  } else {
    return binarySearchUser(array, element, center + 1, right)
  }
}

function binarySearchInGuild(array, element) {
  for (const item of array) {
    if ((item[0].leaguePoints <= element) && (item[item.length - 1].leaguePoints >= element)) {
      const result = binarySearchUser(item, element);
      console.log(result);
      if (result) return result;
    }
  };
  return null;
}

console.log(binarySearchInGuild(data, 931));
