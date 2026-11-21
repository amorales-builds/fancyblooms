
const files = [
    "/docs/collabs/jihaa0001_strangeHappenings.txt",
    "/docs/collabs/test2.txt",
    "/docs/collabs/test3.txt"
];

const reporterFiles = [
    "/docs/collabs/jihaa0001_strangeHappenings.txt"
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
    document.getElementById("storyBody").style.fontFamily = "Audiowide";
    document.getElementById("contentPdf").style.fontFamily = "SyneMono";  
    document.getElementById("contentPdf").style.lineHeight = "1.19";   
    document.getElementById("contentPdf").style.color = "var(--colorWhite)"; 
    
    // document.querySelector(':root').style.setProperty('--colorLight', '#e4d8c3');
    // document.querySelector(':root').style.setProperty('--colorLighter', '#e8ddcb');
    // document.querySelector(':root').style.setProperty('--colorMediumLight', '#cdb380');
    // document.querySelector(':root').style.setProperty('--colorLightBG', 'rgb(135, 84, 84)');
    // document.querySelector(':root').style.setProperty('--colorLighterBG', 'rgb(128, 78, 78)');
    // document.querySelector(':root').style.setProperty('--colorMain', 'rgb(156, 102, 102)');
    // document.querySelector(':root').style.setProperty('--colorMedium', 'rgb(147, 84, 84)');
    // document.querySelector(':root').style.setProperty('--colorMediumDark', '#703941');
    // document.querySelector(':root').style.setProperty('--colorDark', 'rgb(93, 49, 49)');
    
    // document.querySelector(':root').style.setProperty('--colorContent', '#fff8edbe');
}
function pWorksFont() {
    document.getElementById("storyBody").style.fontFamily = "Metamorphous";    
    document.getElementById("contentPdf").style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";  
    document.getElementById("contentPdf").style.lineHeight = "1.5";  
    document.getElementById("contentPdf").style.color = "var(--colorDark)"; 

    document.getElementById("compartment").style.backgroundImage = "repeating-linear-gradient(to right, var(--colorLighter) 0, var(--colorLighter) 5px, transparent 5px, transparent 10px), linear-gradient(to bottom, var(--colorMediumLight) 1px, transparent 1px)"; 
    document.getElementById("compartment").style.backgroundSize = " 100% 100%, 100% 25px"; 

    document.getElementById("optionContent").style.backgroundImage = "repeating-linear-gradient(to right, var(--colorLighter) 0, var(--colorLighter) 5px, transparent 5px, transparent 10px), linear-gradient(to bottom, var(--colorMediumLight) 1px, transparent 1px)"; 
    document.getElementById("optionContent").style.backgroundSize = " 100% 100%, 100% 25px"; 
    
    document.querySelector(':root').style.setProperty('--colorWhite', '#fffafc');
    
    document.querySelector(':root').style.setProperty('--colorLight', '#e4d8c3');
    document.querySelector(':root').style.setProperty('--colorLighter', '#e8ddcb');
    document.querySelector(':root').style.setProperty('--colorMediumLight', '#cdb380');
    document.querySelector(':root').style.setProperty('--colorLightBG', 'rgb(135, 84, 84)');
    document.querySelector(':root').style.setProperty('--colorLighterBG', 'rgb(128, 78, 78)');
    document.querySelector(':root').style.setProperty('--colorMain', 'rgb(156, 102, 102)');
    document.querySelector(':root').style.setProperty('--colorMedium', 'rgb(147, 84, 84)');
    document.querySelector(':root').style.setProperty('--colorMediumDark', '#703941');
    document.querySelector(':root').style.setProperty('--colorDark', 'rgb(93, 49, 49)');
    
    document.querySelector(':root').style.setProperty('--colorContent', '#fff8edbe');   
    document.querySelector(':root').style.setProperty('--colorContentText', 'rgb(93, 49, 49)');   

    document.querySelector(':root').style.setProperty('--colorAccent', '#fffafc');   

}
function reviewsFont() {
    document.getElementById("storyBody").style.fontFamily = "Sniglet";
    document.getElementById("contentPdf").style.fontFamily = "Sniglet";  
    document.getElementById("contentPdf").style.lineHeight = "1.8";  
}