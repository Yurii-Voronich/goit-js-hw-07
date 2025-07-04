const refs = {
  itemsEl: document.querySelectorAll('.item'),
};

console.log(`Number of categories: ${refs.itemsEl.length}`);
refs.itemsEl.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.children[1].children.length}`);
});
