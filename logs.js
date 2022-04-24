const data = [
  {
    "message": "Cannot read property 'score' of undefined",
    "timestamp": 0,
  },
  {
    "message": "TypeError: 'undefined' is not an object",
    "timestamp": 0,
  },
  {
    "message": "Cannot read property 'score' of undefined",
    "timestamp": 3,
  },
  {
    "message": "Cannot read property 'score' of undefined",
    "timestamp": 4,
  },
  {
    "message": "TypeError: 'undefined' is not an object",
    "timestamp": 5,
  },
  {
    "message": "TypeError: 'undefined' is not an object",
    "timestamp": 10,
  },
  {
    "message": "Uncaught RangeError: Maximum call stack size exceeded",
    "timestamp": 14,
  },
  {
    "message": "Cannot read property 'score' of undefined",
    "timestamp": 15,
  },
  {
    "message": "ReferenceError: event is not defined",
    "timestamp": 18,
  },
  {
    "message": "Cannot read property 'score' of undefined",
    "timestamp": 21,
  },
  {
    "message": "ReferenceError: event is not defined",
    "timestamp": 22,
  },
];

const shouldJoin = (log1, log2) => {
  console.log(log1.timestamp, log2.timestamp, Math.abs(log1.timestamp - log2.timestamp) <= 5);
  return Math.abs(log1.timestamp - log2.timestamp) <= 5;
};

const reduceLogs = (logs) => {
  const result = [];
  const map = new Map();

  for (const log of logs) {
    const cached = map.get(log.message);
    if (cached !== undefined && shouldJoin(log, cached)) {
      cached.count++;
      result[cached.index].message = `${log.message} (x${cached.count})`;
    } else {
      const newCached = { timestamp: log.timestamp, index: result.length, count: 1 };
      map.set(log.message, newCached);
      result.push(log);
    }
  }

  return result;
};

console.log(data);
console.log(reduceLogs(data));
