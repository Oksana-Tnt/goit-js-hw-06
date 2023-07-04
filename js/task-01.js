const categoriesEl = document.querySelector("#categories");

console.log(`Number of categories : ${categoriesEl.children.length}`);
[...categoriesEl.children].forEach(item => {
    console.log(`${item.children[0].textContent}`);
    [...item.children].forEach(child => {
        console.log(`${[...child.children].length}`);
    })
    
});


