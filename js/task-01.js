const ulElements = document.querySelectorAll('.item');
console.log(`Number of categories: ${ulElements.length}`);
ulElements.forEach(item => {
    const titleEl = item.firstElementChild.textContent;
    const childUl = item.lastElementChild.children;
    
    console.log(`Category: ${titleEl}`)
    console.log(`Elements: ${childUl.length}`);
});