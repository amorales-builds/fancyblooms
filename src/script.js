/* Code by fancy */

function artPage(){
    window.location.href = '/public/artPage.html';
    return false;
}
function storiesPage(){
    window.location.href = '/public/storiesPage.html';
    return false;
}
function programmingPage(){
    window.location.href = '/public/programmingPage.html';
    return false;
}
function mePage(){
    window.location.href = '/public/personalPage.html';
    return false;
}

let x = 0;

function selectRight(){
    switch(x) {
        case 0:
            document.getElementById("selectArt").style.borderColor = "#7cffe0";
            document.getElementById("artDiv").style.marginTop = "-10px"; 
            document.getElementById("selectMe").style.borderColor = "transparent";
            document.getElementById("meFrame").style.marginTop = "";   
            x = x + 1;
            break;
        case 1:
            document.getElementById("selectStories").style.borderColor = "#7cffe0";
            document.getElementById("storiesDiv").style.marginTop = "-20px";    
            document.getElementById("selectArt").style.borderColor = "transparent";
            document.getElementById("artDiv").style.marginTop = ""; 
            x = x + 1;
            break;
        case 2:
            document.getElementById("selectProgramming").style.borderColor = "#7cffe0";
            document.getElementById("programmingDiv").style.marginTop = "-20px";  
            document.getElementById("selectStories").style.borderColor = "transparent";
            document.getElementById("storiesDiv").style.marginTop = "";   
            x = x + 1;
            break;
        case 3:
            document.getElementById("selectMe").style.borderColor = "#7cffe0";
            document.getElementById("meFrame").style.marginTop = "-20px"; 
            document.getElementById("selectProgramming").style.borderColor = "transparent";
            document.getElementById("programmingDiv").style.marginTop = "";    
            x = 0;
            break; 
        default:
            x = 0;       
    }
}

function selectLeft(){
    switch(x) {
        case 0:            
            document.getElementById("selectArt").style.borderColor = "transparent";
            document.getElementById("artDiv").style.marginTop = ""; 
            // document.getElementById("selectArt").style.backgroundColor = "transparent";
            document.getElementById("selectMe").style.borderColor = "#7cffe0";
            // document.getElementById("selectMe").style.backgroundColor = "#e7fff9";
            document.getElementById("meFrame").style.marginTop = "-20px";            
            x = 4;
            break; 
        case 1:
            document.getElementById("selectArt").style.borderColor = "transparent";
            document.getElementById("artDiv").style.marginTop = ""; 
            // document.getElementById("selectArt").style.backgroundColor = "transparent";
            document.getElementById("selectMe").style.borderColor = "#7cffe0";
            // document.getElementById("selectMe").style.backgroundColor = "#e7fff9";
            document.getElementById("meFrame").style.marginTop = "-20px";    
            x = 4;
            break;
        case 2:
            document.getElementById("selectStories").style.borderColor = "transparent";
            document.getElementById("storiesDiv").style.marginTop = ""; 
            // document.getElementById("selectStories").style.backgroundColor = "transparent";
            document.getElementById("selectArt").style.borderColor = "#7cffe0";
            // document.getElementById("selectArt").style.backgroundColor = "#e7fff9";
            document.getElementById("artDiv").style.marginTop = "-10px";    
            x = x-1;
            break;
        case 3:
            document.getElementById("selectProgramming").style.borderColor = "transparent";
            document.getElementById("programmingDiv").style.marginTop = ""; 
            // document.getElementById("selectProgramming").style.backgroundColor = "transparent";
            document.getElementById("selectStories").style.borderColor = "#7cffe0";
            // document.getElementById("selectStories").style.backgroundColor = "#e7fff9";
            document.getElementById("storiesDiv").style.marginTop = "-20px";    
            x = x-1;
            break;
        case 4:
            document.getElementById("selectMe").style.borderColor = "transparent";
            document.getElementById("meFrame").style.marginTop = ""; 
            // document.getElementById("selectMe").style.backgroundColor = "transparent";
            document.getElementById("selectProgramming").style.borderColor = "#7cffe0";
            // document.getElementById("selectProgramming").style.backgroundColor = "#e7fff9";
            document.getElementById("programmingDiv").style.marginTop = "-20px";    
            x = x-1;
            break; 
        default:
            x = 0;       
    }
}

function selectEnter(){
    switch(x) {
        case 1:
            window.location.href = '/public/artPage.html';
            return false;
            break;
        case 2:
            window.location.href = '/public/storiesPage.html';
            return false;
            break;
        case 3:
            window.location.href = '/public/programmingPage.html';
            return false;
            break;
        case 4:
            window.location.href = '/public/personalPage.html';
            return false;
            break; 
        case 0:
            window.location.href = '/public/personalPage.html';
            return false;
            break; 
        default:
            break;       
    }
}

document.getElementById("rightBtn").addEventListener('click', async () => {   
    selectRight();
})
document.getElementById("leftBtn").addEventListener('click', async () => {   
    selectLeft()
})
document.getElementById("upBtn").addEventListener('click', async () => {       
    selectRight();
})
document.getElementById("downBtn").addEventListener('click', async () => {   
    selectLeft()
})

document.getElementById("lightBtn").addEventListener('click', async () => {   
    window.matchMedia("(prefers-color-scheme: dark)");
})
