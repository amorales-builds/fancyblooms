
function favCointaner(){
    if(document.getElementById("favContainer").style.backgroundBlendMode != "none"){
        document.getElementById("favContainer").style.backgroundBlendMode = ""
        document.getElementById("favContainer").style.backgroundImage = ""
        document.getElementById("favContainer").style.borderRadius = "";
        document.getElementById("favContainer").style.height = "";
        document.getElementById("favInfo").style.display = "none";
    }
}

function favColor(){
    document.getElementById("favInfo").style.display = "grid";
    document.getElementById("favContainer").style.backgroundImage = "url(https://img.magnific.com/premium-photo/iridescent-texture-hologram-background-holographic-rainbow-foil-holo-gradient-pearlescent-shine-effect-speckle-iridescent-metal-pastel-color-pastel-silver-texture_1028938-79299.jpg?semt=ais_hybrid&w=740&q=80)";
    document.getElementById("favImage").style.backgroundImage = "url(https://goldenanvil.com/cdn/shop/articles/PngItem_5085859.png?v=1794914310)";
    document.getElementById("favImage2").style.backgroundImage = "url(https://png.pngtree.com/png-clipart/20250119/original/pngtree-iridescent-soap-bubbles-with-multicolor-reflections-png-image_20281779.png)";
    document.getElementById("favContainer").style.backgroundBlendMode = "soft-light"
    document.getElementById("favContainer").style.borderRadius = "20px";
    document.getElementById("favContainer").style.height = "48.6vh";
    document.getElementById("favTitle").textContent = "Iridescent";
    document.getElementById("favTitle").style.fontSize = "";
    document.getElementById("favContent").textContent = "\"Iridescent\", also called Opalescent. It's also the color of bubbles, and some textiles. It's cause by wave intereference with refractions and/or combinations of light. It's like rainbows in starlight. That's why I LOVE opals. ♥";
    document.getElementById("favContent").style.display = "block";
}
function favMammal(){
    document.getElementById("favInfo").style.display = "grid";
    document.getElementById("favContainer").style.backgroundImage = "url(https://www.endangeredwolfcenter.org/wp-content/uploads/2021/11/MJS_6479-Lucky_1.jpg)";
    document.getElementById("favImage").style.backgroundImage = "url(https://www.wildlifephotographer.app/wp-content/uploads/animaux/1005948.png)";
    document.getElementById("favImage2").style.backgroundImage = "url(https://png.pngtree.com/png-vector/20250717/ourmid/pngtree-photorealistic-depiction-of-a-maned-wolf-standing-against-a-white-background-png-image_16697257.png)";
    document.getElementById("favContainer").style.backgroundBlendMode = "soft-light"
    document.getElementById("favContainer").style.borderRadius = "20px";
    document.getElementById("favContainer").style.height = "48.6vh";
    document.getElementById("favTitle").textContent = "Maned Wolf";
    document.getElementById("favTitle").style.fontSize = "26px";
    document.getElementById("favContent").textContent = "Not a wolf, not maned, but a secret third thing. The \"Maned Wolf\"is the only canine species in its genus Chrysocyn. Native to the South American grasslands. To me it looks like a mix between a fox and a deer. ♥";
    document.getElementById("favContent").style.display = "block";
}
function favFish(){
    document.getElementById("favInfo").style.display = "grid";
    document.getElementById("favContainer").style.backgroundImage = "url(https://oyla.us/wp-content/uploads/2023/06/img01-2-01-e1688544173374.jpg)";
    document.getElementById("favImage").style.backgroundImage = "url(https://s7ap1.scene7.com/is/image/rwsentosa/coelacanth:2by1?wid=2880&hei=1440&fmt=png-alpha)";
    document.getElementById("favImage2").style.backgroundImage = "url(https://png.pngtree.com/png-clipart/20250816/original/pngtree-coelacanth-isolated-on-a-transparent-background-png-image_21235143.png)";
    document.getElementById("favContainer").style.backgroundBlendMode = "overlay"
    document.getElementById("favContainer").style.borderRadius = "20px";
    document.getElementById("favContainer").style.height = "48.6vh";
    document.getElementById("favTitle").textContent = "Coelacanth";
    document.getElementById("favTitle").style.fontSize = "";
    document.getElementById("favContent").textContent = "This baby was thought to be extinct 66 million years ago! Then it was found alive and swiming in either the 1930s or 1990s (depending wwho you ask). The \"Coelacanth\" is a fossil come to life! I aspire to be as cool as this fish. ♥";
    document.getElementById("favContent").style.display = "block";
}
function favTree(){
    document.getElementById("favInfo").style.display = "grid";
    document.getElementById("favContainer").style.backgroundImage = "url(https://www.promessedefleurs.ie/media/catalog/product/G/i/Ginkgo-biloba-Arbre-aux-quarante-ecus-c-a-83013-1.jpg)";
    document.getElementById("favImage").style.backgroundImage = "url(https://aor.ca/wp-content/uploads/2023/05/Ginkgo-Biloba-AOR.png)";
    document.getElementById("favImage2").style.backgroundImage = "url(https://treemontgomery.org/wp-content/uploads/2018/12/ginkgo-fall.png)";
    document.getElementById("favContainer").style.backgroundBlendMode = "soft-light"
    document.getElementById("favContainer").style.borderRadius = "20px";
    document.getElementById("favContainer").style.height = "48.6vh";
    document.getElementById("favTitle").textContent = "Ginkgo";
    document.getElementById("favTitle").style.fontSize = "";
    document.getElementById("favContent").textContent = " We have evidence of the \"Ginkgo Biloba\" from back in the Jurassic period, and it is now the last living species in the order of Ginkgoales! These trees have survived atomic bombs, so it's no surprised they survived extinction. ♥";
    document.getElementById("favContent").style.display = "block";
}

//blog
const blog = [
    ["Fixer Upper Love", "26.11.27", "/docs/blogs/fixerUpperLove.txt"], 
    ["Wisdom Surgery", "26.11.26", "/docs/blogs/wisdomSurgery.txt"], 
];

async function navBlog(index = 0) {

    const [title, date, path] = blog[index];
    const response = await fetch(path);
    const text = await response.text();

    if (index == null) {
        navBlog(0);
    } 
    else{        
        document.getElementById("blogContent").innerText = text;  
        document.getElementById("blogTitle").textContent = title;  
        document.getElementById("blogDate").textContent = date;  
    }
}

blog.forEach((file, index) => {
    const button = document.createElement("button");

    button.innerText = `${index + 1}`;
    button.onclick = () => navBlog(index);

    document.getElementById("blogsNav").appendChild(button);
});