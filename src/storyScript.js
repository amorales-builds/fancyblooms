//collabWorks
const files = [
    ["hospital", "Grigory Ivanov", "/docs/collabs/jihaa0001_strangeHappenings.txt"], //2026.nov.21
    // ["circus", "Ringmaster", "/docs/collabs/test2.txt"],
    // ["hospital", "Grigory Ivanov", "/docs/collabs/test3.txt"],
    // ["circus", "Grigory Ivanov", "/docs/collabs/test4.txt"]
];

//personalWorks
const shorts = [
    ["/docs/stories/jihaa0001_strangeHappenings.txt", "Strange Happenings"]
];
const poetry = [
    ["/docs/stories/testOne.txt", "Test One"]
];
const novels = [
    ["/docs/stories/novels/testNovel.txt", "Test Novel"]
];


async function navFiles(index = 0, filterChoice = 0, subChoice = 0, isAll = true) {

    const content = document.getElementById("contentPdf");

    if (index == null) index = 0;

    var y;
    var chosenFiles;

    if (isAll){
        chosenFiles = files;

        document.getElementById("filterName").textContent = "@@@@@@@@@@@@@@@@@";

        //buttons
        navNumbers.innerHTML = "";

        chosenFiles.forEach((file, i) => {
            const button = document.createElement("button");

            button.innerText = `${i + 1}`;
            button.onclick = () => navFiles(i, filterChoice, subChoice, isAll);

            navNumbers.appendChild(button);
        });
        // buttonFiles(chosenFiles);
        // document.getElementById("navNumbers").style.display = "inline";        
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

        document.getElementById("filterName").textContent = "REPORTS @ —  " + y.toUpperCase();

        //buttons   
        navNumbers.innerHTML = "";

        chosenFiles.forEach((file, i) => {
            const button = document.createElement("button");

            button.innerText = `${i + 1}`;
            button.onclick = () => navFiles(i, filterChoice, subChoice, isAll);

            navNumbers.appendChild(button);
        });

    }

    const [type, name, path] = chosenFiles[index];

    const response = await fetch(path);

    const text = await response.text();

    content.innerText = text;

    
    //buttons
    // chosenFiles.forEach((file, index) => {
    //     const button = document.createElement("button");

    //     button.innerText = `${index + 1}`;
    //     button.onclick = () => navFiles(index);

    //     document.getElementById("navNumbers").appendChild(button);
    // });


    if (index > 0) document.getElementById("topFile").onclick = () => navFiles(0, filterChoice, subChoice, isAll);

    if (index > 0) document.getElementById("prevFile").onclick = () => navFiles(index - 1, filterChoice, subChoice, isAll);   

    if (index < files.length - 1) document.getElementById("nextFile").onclick = () => navFiles(index + 1, filterChoice, subChoice, isAll);
    
    if (index < files.length - 1) document.getElementById("lastFile").onclick = () => navFiles(chosenFiles.length - 1, filterChoice, subChoice, isAll);
}

// files.forEach((file, index) => {
//     const button = document.createElement("button");

//     button.innerText = `${index + 1}`;
//     button.onclick = () => navFiles(index);

//     document.getElementById("navNumbers").appendChild(button);
// });

function noFiles(){
    document.getElementById("contentPdf").textContent = "Awaiting reports... Witnesses to strange happenings in this location are asked to CREATE REPORT.";
    document.getElementById("filterName").textContent = "NO FILES FOUND";    
    navNumbers.innerHTML = "";
}

////////////////////////


async function navStories(index = 0, whichStory = 0) {

    switch(whichStory){
        case 0:            
            stories = shorts;
            break;
        case 1:            
            stories = poetry;
            break;
        case 2:            
            stories = novels;
            break;
    }

    
    const content = document.getElementById("myStories");

    const [path, title] = stories[index];
    const response = await fetch(path);
    const text = await response.text();

    if (index == null) {
        navStories(0, 0);
    } else{        
        content.innerText = text;  
        document.getElementById("storyTitle").textContent = title;  
    }
}

////////////////////////////////////

function collabFont() {
    //text, titles
    document.getElementById("contentTopic").textContent = "Juniper Archives";     
    document.getElementById("contentTitle").textContent = "Community Fiction";  

    document.getElementById("storyBody").style.fontFamily = "";
    // document.getElementById("contentPdf").style.fontFamily = "";  
    // document.getElementById("contentPdf").style.color = ""; 
    // document.getElementById("contentPdf").style.lineHeight = "";   
    // document.getElementById("contentPdf").style.marginTop = ""; 
    // document.getElementById("contentTopic").style.borderRadius = ""; 
    // document.getElementById("contentTopic").style.paddingTop = ""; 
    // document.getElementById("contentTopic").style.fontSize = ""; 
    // document.getElementById("contentTopic").style.textAlign = ""; 
    // document.getElementById("contentTopic").style.paddingLeft = ""; 
    // document.getElementById("contentTitle").style.fontSize = ""; 
    document.getElementById("contentTopic").style.display = "block";
    document.getElementById("storyTitle").style.display = "none";

    //elements
    document.getElementById("collaborativeWorks").style.display = "block"; 
    document.getElementById("navButtonsColab").style.display = "grid"; 
    document.getElementById("colabContent").style.display = "block"; 
    document.getElementById("contentTitle").style.display = ""; 
    document.getElementById("contentMatter").style.minHeight = ""; 
    document.getElementById("contentMatter").style.height = ""; 
    document.getElementById("contentMatter").style.width = ""; 
    document.getElementById("contentMatter").style.marginBottom = ""; 
    document.getElementById("myStories").style.display = "none"; 
    document.getElementById("myStoriesContent").style.display = "none"; 
    document.getElementById("expandStories").style.display = "none"; 
    document.getElementById("topPage").style.display = "none"; 
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
    // document.getElementById("contentTopic").textContent = "";  
    // document.getElementById("contentTitle").textContent = "Personal Works";    

    document.getElementById("storyBody").style.fontFamily = "Metamorphous";    
    // document.getElementById("contentPdf").style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif"; 
    // document.getElementById("contentPdf").style.color = "var(--colorDark)";  
    // document.getElementById("contentPdf").style.lineHeight = "1.5";  
    // document.getElementById("contentPdf").style.marginTop = "2%"; 
    document.getElementById("contentTopic").style.display = "none";
    document.getElementById("storyTitle").style.display = "block";

    //elements
    document.getElementById("collaborativeWorks").style.display = "none"; 
    document.getElementById("navButtonsColab").style.display = "none"; 
    document.getElementById("colabContent").style.display = "none"; 
    document.getElementById("contentTitle").style.display = "none"; 
    document.getElementById("contentMatter").style.minHeight = "75vh"; 
    document.getElementById("contentMatter").style.height = "fit-content"; 
    document.getElementById("contentMatter").style.width = "50vw"; 
    document.getElementById("contentMatter").style.marginBottom = "4vw"; 
    document.getElementById("myStories").style.display = "block"; 
    document.getElementById("myStoriesContent").style.display = "block"; 
    document.getElementById("expandStories").style.display = "grid"; 
    document.getElementById("topPage").style.display = "grid"; 
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

document.getElementById("expandStories").addEventListener('click', async () => {   
    if(document.getElementById("contentMatter").style.width != "78vw"){
        document.getElementById("contentMatter").style.width = "78vw"; 
        document.getElementById("contentMatter").style.fontSize = "22px"; 
        document.getElementById("expandStories").textContent = "><";
    }else{
        document.getElementById("contentMatter").style.width = "50vw"; 
        document.getElementById("contentMatter").style.fontSize = ""; 
        document.getElementById("expandStories").textContent = "<>";
    }
})
document.getElementById("topPage").addEventListener('click', async () => { 
    // window.scrollTo(0, 0);
    window.scrollTo({
        top: 50,
        left: 60,
        behavior: 'smooth'
    })
})


document.getElementById("createReportBtn").addEventListener('click', async () => {   
    if (document.getElementById("contentPdf").style.display != "none"){
        document.getElementById("contentPdf").style.display = "none";
        document.getElementById("optionContent").style.display = "none";
        document.getElementById("collaborativeWorks").style.height = "67vh"; 
        document.getElementById("collaborativeWorks").style.overflowY = "hidden"; 
        document.getElementById("contentMatter").style.width = "88.1vw"; 
        document.getElementById("contentTitle").style.fontSize = "12px";
        document.getElementById("formReport").style.display = "block";
        document.getElementById("createReportBtn").textContent = "— BACK —";
        document.getElementById("createReportBtn").style.textAlign = "center";
        // document.getElementById("createReportBtn").style.marginLeft = "-12vw";
        document.getElementById("createReportBtn").style.backgroundColor = "var(--colorMediumDark)";
        document.getElementById("filterName").style.visibility = "hidden";
        document.getElementById("navNumbers").style.visibility = "hidden";
        document.getElementById("randomFiles").style.visibility = "hidden";
        document.getElementById("topFile").style.visibility = "hidden";
        document.getElementById("prevFile").style.visibility = "hidden";
        document.getElementById("nextFile").style.visibility = "hidden";
        document.getElementById("lastFile").style.visibility = "hidden";
        document.getElementById("allFiles").style.visibility = "hidden";
    }
    else{
        document.getElementById("contentPdf").style.display = "";
        document.getElementById("optionContent").style.display = "";
        document.getElementById("collaborativeWorks").style.height = ""; 
        document.getElementById("collaborativeWorks").style.overflowY = ""; 
        document.getElementById("contentMatter").style.width = ""; 
        document.getElementById("contentTitle").style.fontSize = "";
        document.getElementById("formReport").style.display = "none";
        document.getElementById("createReportBtn").textContent = "CREATE REPORT";
        document.getElementById("createReportBtn").style.textAlign = "end";
        // document.getElementById("createReportBtn").style.marginLeft = "";
        document.getElementById("createReportBtn").style.backgroundColor = "";
        document.getElementById("filterName").style.visibility = "visible";
        document.getElementById("navNumbers").style.visibility = "visible";
        document.getElementById("randomFiles").style.visibility = "visible";
        document.getElementById("topFile").style.visibility = "visible";
        document.getElementById("prevFile").style.visibility = "visible";
        document.getElementById("nextFile").style.visibility = "visible";
        document.getElementById("lastFile").style.visibility = "visible";
        document.getElementById("allFiles").style.visibility = "visible";        
    }
});

// function formInfo(){
//     document.getElementById("formInfo").style.visibility = "hidden"
// }

// document.getElementById("formInfo").addEventListener('click', async () => { 
   
//     window.alert("hi");
// })