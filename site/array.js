const list = document.querySelector("list");
const items = list.querySelectorAll("li");
const arr = Array.from(items).map(li => li.textContent.trim());
console.log(arr);


const educationParagraphs = document.querySelectorAll("#education p");
const institutionsArr = Array.from(educationParagraphs).map(p => p.textContent.trim());
const institutionsArrFiltered = institutionsArr.filter(str => str.includes("University") || str.includes("School") || str.includes("Faculty"));
console.log(institutionsArrFiltered);


const educationFirstWords = Array.from(educationParagraphs).map(el => {return el.textContent.trim().split(/\s+/)[0];});
console.log(educationFirstWords);


const totalAniStudiu = Array.from(educationParagraphs).reduce((acc, el) => {
    const matches = el.textContent.match(/\d+/g);
   
    if (matches) {
        const aniInParagraf = matches.reduce((sum, num) => sum + Number(num), 0);
        return acc + aniInParagraf;
    }
   
    return acc;
}, 0);


console.log("%c Total ani de studiu: " + totalAniStudiu, "color: #1e85da; font-weight: bold; font-size: 1.2rem;");