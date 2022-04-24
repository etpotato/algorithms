const colors = ['#DCD6F7', '#A6B1E1', '#B4869F'];

const list = document.querySelector('ul');

function paintListDfs(listElement, nestLevel = 0) {
  const color = colors[nestLevel % colors.length];

  for (const item of listElement.children) {
    item.style.backgroundColor = color;
    const nestedLists = [...item.children].filter(child => child.localName === 'ul')
    if (nestedLists.length) {
      nestedLists.forEach(nestedList => paintList(nestedList, nestLevel+1));
    }
  }
};

function paintListBfs(listElement) {
  const queue = [];
  queue.push({
    node: listElement,
    level: 0,
  });

  while (queue.length > 0) {
    const list = queue.shift();
    for (const item of list.node.children) {
      if (item.localName === 'li') {
        item.style.backgroundColor = colors[list.level % colors.length];
        for (const child of item.children) {
          if (child.localName === 'ul') {
            queue.push({
              node: child,
              level: list.level + 1,
            });
          }
        }
      }
    }
  }
}

// paintListDfs(list);
paintListBfs(list);
