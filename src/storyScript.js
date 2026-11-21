
const files = [
    "/docs/collabs/jihaa0001_strangeHappenings.txt",
    "/docs/collabs/test2.txt",
    "/docs/collabs/test3.txt"
];

files.forEach((file, index) => {
    const button = document.createElement("button");

    button.innerText = `${index + 1}`;
    button.onclick = () => pleaseworkbro(index);

    document.getElementById("navNumbers").appendChild(button);
});

// let currentIndex = 0;

// document.getElementById("prevFile").onclick = () => {
//     if (currentIndex > 0) {
//         pleaseworkbro(currentIndex - 1);
//     }
// };

// document.getElementById("nextFile").onclick = () => {
//     if (currentIndex < files.length - 1) {
//         pleaseworkbro(currentIndex + 1);
//     }
// };

async function pleaseworkbro(index) {

    const content = document.getElementById("contentPdf");

    try {
        const response = await fetch(files[index]);

        if (!response.ok) {
            throw new Error("Could not load file");
        }

        const text = await response.text();

        content.innerText = text;

    } 
    catch (error) {
        if (index !== 0) {
            pleaseworkbro(0);
        } else {
            content.innerText = "Failed to load file 0.";
        }
    }
}

function collabFont() {
    document.getElementById("storyBody").style.fontFamily = "SyneMono";
}
function pWorksFont() {
    document.getElementById("storyBody").style.fontFamily = "Metamorphous";
}
function reviewsFont() {
    document.getElementById("storyBody").style.fontFamily = "Sniglet";
}