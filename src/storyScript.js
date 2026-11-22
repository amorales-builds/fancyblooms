
const files = [
    ["hospital", "Grigory Ivanov", "/docs/collabs/jihaa0001_strangeHappenings.txt"],
    ["circus", "Ringmaster", "/docs/collabs/test2.txt"],
    ["hospital", "Grigory Ivanov", "/docs/collabs/test3.txt"],
    ["circus", "Grigory Ivanov", "/docs/collabs/test4.txt"]
];

files.forEach((file, index) => {
    const button = document.createElement("button");

    button.innerText = `${index + 1}`;
    button.onclick = () => navFiles(index);

    document.getElementById("navNumbers").appendChild(button);
});

// function mapChoice(x){    
//     switch(x) {
//         case 1: 
//             y = "hospital";  
//             break;
//         case 2: 
//             y = "circus";  
//             break;
        
//     }
    
//     return files.filter(file => file[0] === y);
// }

async function navFiles(index = 0, filterChoice = 0, subChoice = 0, isAll = true) {

    const content = document.getElementById("contentPdf");

    if (index == null) index = 0;
    
    // const buildingFiles = files.filter(file => file[0] === "hospital");
    // const nameFiles = files.filter(file => file[1] === "Grigory Ivanov");

    // var mapChoice = 2;

    var y;
    var chosenFiles;

    if (isAll){
        chosenFiles = files;
    }
    else{

        switch(filterChoice) {
            case 0: //buildings
                switch(subChoice) {
                    case 0: 
                        y = "hospital";  
                        break;
                    case 1: 
                        y = "circus";  
                        break;                
                }
                break;
                
            case 1: //names
                switch(subChoice) {
                    case 0: 
                        y = "Grigory Ivanov";  
                        break;
                    case 1: 
                        y = "Ringmaster";  
                        break;                
                }
                break;        
        }

        chosenFiles = files.filter(file => file[filterChoice] === y);
    }

    const [type, name, path] = chosenFiles[index];

    const response = await fetch(path);

    const text = await response.text();

    content.innerText = text;


    if (index > 0) { 
        document.getElementById("topFile").onclick = () => navFiles(0, filterChoice, subChoice, isAll);
    }  
    if (index > 0) { 
        document.getElementById("prevFile").onclick = () => navFiles(index - 1, filterChoice, subChoice, isAll);
    }    
    if (index < files.length - 1) {
        document.getElementById("nextFile").onclick = () => navFiles(index + 1, filterChoice, subChoice, isAll);
    }
    if (index < files.length - 1) {
        document.getElementById("lastFile").onclick = () => navFiles(chosenFiles.length - 1, filterChoice, subChoice, isAll);
    }
}

// async function navFiles(index = 0, type = "circus") {

//     const content = document.getElementById("contentPdf");

//     // Filter files by type
//     const filteredFiles = files.filter(file => file[0] === type);

//     // Make sure the index is valid
//     if (index >= filteredFiles.length) index = 0;

//     const response = await fetch(filteredFiles[index][1]);
//     const text = await response.text();

//     content.innerText = text;

//     if (index > 0) { 
//         document.getElementById("topFile").onclick = () => navFiles(0);
//     }  
//     if (index > 0) { 
//         document.getElementById("prevFile").onclick = () => navFiles(index - 1);
//     }    
//     if (index < files.length - 1) {
//         document.getElementById("nextFile").onclick = () => navFiles(index + 1);
//     }
//     if (index < files.length - 1) {
//         document.getElementById("lastFile").onclick = () => navFiles(files.length - 1);
//     }
// }

const stories = [
    "/docs/stories/jihaa0001_strangeHappenings.txt",
    "/docs/stories/jihaa0001_strangeHappenings.txt"
];

async function navStories(index) {

    const content = document.getElementById("myStories");
    const response = await fetch(stories[index]);
    const text = await response.text();

    if (index == null) {
        navStories(0);
    } else{        
        content.innerText = text;
    }
}

function collabFont() {
    //text, titles
    document.getElementById("contentTopic").textContent = "Juniper Archives";     
    document.getElementById("contentTitle").textContent = "Community Fiction";  

    document.getElementById("storyBody").style.fontFamily = "";
    // document.getElementById("contentPdf").style.fontFamily = "";  
    // document.getElementById("contentPdf").style.color = ""; 
    // document.getElementById("contentPdf").style.lineHeight = "";   
    // document.getElementById("contentPdf").style.marginTop = ""; 
    document.getElementById("contentTopic").style.borderRadius = ""; 
    document.getElementById("contentTopic").style.paddingTop = ""; 
    document.getElementById("contentTopic").style.fontSize = ""; 
    document.getElementById("contentTitle").style.fontSize = ""; 

    //elements
    document.getElementById("collaborativeWorks").style.display = "block"; 
    document.getElementById("navButtonsColab").style.display = "grid"; 
    document.getElementById("colabContent").style.display = "block"; 
    document.getElementById("contentTitle").style.display = ""; 
    document.getElementById("contentMatter").style.minHeight = ""; 
    document.getElementById("contentMatter").style.height = ""; 
    document.getElementById("myStories").style.display = "none"; 
    document.getElementById("myStoriesContent").style.display = "none"; 
    // document.getElementById("navButtonsColab").style.justifyContent = "space-between"; 
    // document.getElementById("navButtonsColab").style.justifyContent = "space-between"; 
    // document.getElementById("navMapBtn").style.visibility = "visible"; 
    // document.getElementById("navReportBtn").style.visibility = "visible"; 
    // document.getElementById("collaborativeWorks").style.height = ""; 

    // BG images
    document.getElementById("compartment").style.backgroundImage = ""; 
    document.getElementById("compartment").style.backgroundSize = ""; 
    document.getElementById("optionContent").style.backgroundImage = ""; 
    document.getElementById("optionContent").style.backgroundSize = ""; 
    
    //root colors
    document.querySelector(':root').style.setProperty('--colorWhite', '');
    
    document.querySelector(':root').style.setProperty('--colorLight', '');
    document.querySelector(':root').style.setProperty('--colorLighter', '');
    document.querySelector(':root').style.setProperty('--colorMediumLight', '');
    document.querySelector(':root').style.setProperty('--colorLightBG', '');
    document.querySelector(':root').style.setProperty('--colorLighterBG', '');
    document.querySelector(':root').style.setProperty('--colorMain', '');
    document.querySelector(':root').style.setProperty('--colorMedium', '');
    document.querySelector(':root').style.setProperty('--colorMediumDark', '');
    document.querySelector(':root').style.setProperty('--colorDark', '');
    
    document.querySelector(':root').style.setProperty('--colorContent', '');   
    document.querySelector(':root').style.setProperty('--colorContentText', '');   

    document.querySelector(':root').style.setProperty('--colorAccent', '');   
}
function pWorksFont() {
    //text, titles
    document.getElementById("contentTopic").textContent = "The thing of the thing";     
    document.getElementById("contentTitle").textContent = "Personal Works";    

    document.getElementById("storyBody").style.fontFamily = "Metamorphous";    
    // document.getElementById("contentPdf").style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif"; 
    // document.getElementById("contentPdf").style.color = "var(--colorDark)";  
    // document.getElementById("contentPdf").style.lineHeight = "1.5";  
    // document.getElementById("contentPdf").style.marginTop = "2%"; 
    document.getElementById("contentTopic").style.borderRadius = "20px"; 
    document.getElementById("contentTopic").style.paddingTop = "20px"; 
    document.getElementById("contentTopic").style.fontSize = "65px"; 
    document.getElementById("contentTitle").style.fontSize = "12px"; 

    //elements
    document.getElementById("collaborativeWorks").style.display = "none"; 
    document.getElementById("navButtonsColab").style.display = "none"; 
    document.getElementById("colabContent").style.display = "none"; 
    document.getElementById("contentTitle").style.display = "none"; 
    document.getElementById("contentMatter").style.minHeight = "77vh"; 
    document.getElementById("contentMatter").style.height = "fit-content"; 
    document.getElementById("myStories").style.display = "block"; 
    document.getElementById("myStoriesContent").style.display = "block"; 
    // document.getElementById("navButtonsColab").style.justifyContent = "center"; 
    // document.getElementById("navMapBtn").style.visibility = "hidden"; 
    // document.getElementById("navReportBtn").style.visibility = "hidden"; 
    // document.getElementById("collaborativeWorks").style.height = "67.5vh"; 

    // BG images
    document.getElementById("compartment").style.backgroundImage = "repeating-linear-gradient(to right, var(--colorLighter) 0, var(--colorLighter) 5px, transparent 5px, transparent 10px), linear-gradient(to bottom, var(--colorMediumLight) 1px, transparent 1px)"; 
    document.getElementById("compartment").style.backgroundSize = " 100% 100%, 100% 25px"; 
    document.getElementById("optionContent").style.backgroundImage = "repeating-linear-gradient(to right, var(--colorLighter) 0, var(--colorLighter) 5px, transparent 5px, transparent 10px), linear-gradient(to bottom, var(--colorMediumLight) 1px, transparent 1px)"; 
    document.getElementById("optionContent").style.backgroundSize = " 100% 100%, 100% 25px"; 
    
    //root colors
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

    document.querySelector(':root').style.setProperty('--colorAccent', '#fffaff');   

    
    // document.querySelector('body').style.setProperty('background-image', '#fffafc');   

}
function reviewsFont() {
    //text, titles
    document.getElementById("contentTopic").textContent = "Media reviews";     
    document.getElementById("contentTitle").textContent = "";  

    // BG images
    document.getElementById("storyBody").style.fontFamily = "Sniglet";
    document.getElementById("contentPdf").style.fontFamily = "Sniglet";  
    document.getElementById("contentPdf").style.lineHeight = "1.8";  
    
    //root colors
}