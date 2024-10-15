const modDiv = document.getElementById('modlistdiv');
const genButton = document.getElementById('generatebutton');
const modList = document.getElementById('modList');
const modGreen = document.getElementById('modGreen');
const modRed = document.getElementById('modRed');
const modBlue = document.getElementById('modBlue');
const ironclad = document.getElementById('ironclad')
const watcher = document.getElementById('watcher')
const defect = document.getElementById('defect')
const silent = document.getElementById('silent')
const ascInput = document.getElementById('ascinput')
const header = document.getElementById('head')
const footer = document.getElementById('foot')

var i, w, d, s = false;

const characters = ["Ironclad", "Silent", "Defect", "Watcher"];
const ascensions = [Array.from({length: 20}, (_,i) => i + 1)];
const modifiersBlue = [
    "Daily Mods",
    "Draft",
    "Sealed Deck",
    "The Ending",
    "Endless",
    "Blight Chests",
    "Hoarder",
    "Insanity",
    "Chimera",
    "Praise Snecko",
    "Shiny",
    "Specialized ",
    "Vintage",
    "Controlled Chaos",
    "Inception"
];
const modifiersGreen = [ 
    "All Star",
    "Diverse",
    "Red cards",
    "Green cards",
    "Blue cards",
    "Purple cards",
    "Colorless Cards",
    "Heirloop",
    "Time Dilation",
    "Flight",
    "My True Form"
];
const modifiersRed = [ 
    "Deadly Events",
    "Binary",
    "One Hit Wonder",
    "Cursed Run",
    "Big Game Hunter",
    "Lethality",
    "Midas",
    "Night Terrors",
    "Terminal",
    "Certain Future",
    "Starter Deck"
];


function charClick(el) {
    el.classList.toggle("pressed");
    changeCharAll(el.id);
    if (el.classList.contains("pressed")) {
        header.className = el.id;
    } else {
        header.className = "";
    } 
    changeHeader();
}

function changeCharAll(id) {
    if (id == "ironclad") {
        i = true;
        w = false;
        d = false;
        s = false;
        watcher.classList.remove("pressed");
        defect.classList.remove("pressed");
        silent.classList.remove("pressed");
    } else if (id == "watcher") {
        i = false;
        w = true;
        d = false;
        s = false;
        ironclad.classList.remove("pressed");
        defect.classList.remove("pressed");
        silent.classList.remove("pressed");
    } else if (id == "defect") {
        i = false;
        w = false;
        d = true;
        s = false;

        watcher.classList.remove("pressed");
        silent.classList.remove("pressed");
        ironclad.classList.remove("pressed");
    } else if (id == "silent") {
        i = false;
        w = false;
        d = false;
        s = true;

        watcher.classList.remove("pressed");
        defect.classList.remove("pressed");
        ironclad.classList.remove("pressed");
    }

    
}

function changeHeader() {
    if (header.className == "ironclad") {
        header.style.backgroundColor = "#94130c";
        footer.style.backgroundColor = "#94130c";
    } else if (header.className == "defect") {
        header.style.backgroundColor =  "#3a8ebe";
        footer.style.backgroundColor =  "#3a8ebe";
    } else if (header.className == "watcher") {
        header.style.backgroundColor =  "#8b3fae";
        footer.style.backgroundColor =  "#8b3fae";
    } else if (header.className == "silent") {
        header.style.backgroundColor = "#799116";
        footer.style.backgroundColor = "#799116";
    } else {
        header.style.backgroundColor = "#8c8b82";
        footer.style.backgroundColor = "#8c8b82";
    }
}

function generateEverything() {
    genCharacter();
    genAscension();
    genModList();
}

function genAscension() {
    var num = randomNumber(1,20);
    ascInput.value = num;
    // console.log(num);
}

function genCharacter() {
    var num = randomNumber(1,4);
    if (num == 1) {
        changeCharAll("ironclad");
        header.className = "ironclad";
        ironclad.classList.add("pressed");
    } else if (num == 2) {
        changeCharAll("silent");
        header.className = "silent";
        silent.classList.add("pressed");
    } else if (num == 3) {
        changeCharAll("defect");
        header.className = "defect";
        defect.classList.add("pressed");
    } else if (num == 4) {
        changeCharAll("watcher");
        header.className = "watcher";
        watcher.classList.add("pressed");
    } 
    changeHeader();
}

function genModList() {
    print("aaaaa")
    const redSet = new Set();

    for (let i = 0; i < 7; i++) {
        redSet.add(randomNumber(0, 10));
    }
    const greenSet = new Set();

    for (let i = 0; i < 7; i++) {
        greenSet.add(randomNumber(0, 10));
    }

    const blueSet = new Set();

    for (let i = 0; i < 7; i++) {
        blueSet.add(randomNumber(0, 14));
    }

    var red = Array.from(redSet).sort(function (a,b) {return a - b;});
    var green = Array.from(greenSet).sort(function (a,b) {return a - b;});
    var blue = Array.from(blueSet).sort(function (a,b) {return a - b;});

    // console.log(red, blue, green);
    modRed.innerHTML = modifiersRed[red[0]]
    modBlue.innerHTML = modifiersRed[blue[0]]
    modGreen.innerHTML = modifiersRed[green[0]]
    for (let i = 1; i < red.length; i++){ 
        modRed.innerHTML = modRed.innerHTML + "<br />" + modifiersRed[red[i]];
        modRed.className = "red";
        
        // console.log(modRed.innerHTML)
    }
    for (let i = 1; i < blue.length; i++){ 
        modBlue.innerHTML = modBlue.innerHTML + "<br />" + modifiersBlue[blue[i]];
        modBlue.className = "blue";
        
        // console.log(modBlue.innerHTML)
    }
    for (let i = 1; i < green.length; i++){ 
        modGreen.innerHTML = modGreen.innerHTML + "<br />" + modifiersGreen[green[i]];
        modGreen.className = "green";
        
        // console.log(modGreen.innerHTML)
    }

}


function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}