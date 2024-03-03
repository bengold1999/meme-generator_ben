'use strict'

const USERSAVEKEY = 'savedmems'
let gMemesSave




let gMeme


function createMeme(imgId,imgSrc) {
    gMeme = {
        selectedImgId:imgId,
        selectedLineIdx: 0,
        prevSelectedLineIdx: null,
        url: imgSrc,
        lines: [
            {
                id: makeId(),
                txt: 'line1',
                size: 10,
                color: "#FFFFFF",
                x: 50,
                y: 10,
                font: 'Serif'
            },
            {
                id: makeId(),
                txt: 'line2',
                size: 10,
                color: "#FFFFFF",
                x: 50,
                y: 90,
                font: 'Serif'
            }
        ],

    }

    return gMeme
}



function getMeme() {
    return gMeme
}



function setLineTxt() {
    if (!gMeme) return
    var userText = document.querySelector('.text-meme')
    userText.addEventListener('input', () => {
        if (gMeme.lines.length > 0) {

            gMeme.lines[gMeme.selectedLineIdx].txt = userText.value
        }
    })
}

function addLine() {
    gMeme.lines.push({
        id: makeId(),
        txt: `line${gMeme.lines.length + 1}`,
        size: 10,
        color: "#FFFFFF",
        x: 50,
        y: 50,
        font: 'Serif'
    });
}

function addEmoji(elEmo) {
    gMeme.lines.push({
        id: makeId(),
        txt: elEmo.value,
        size: 10,
        color: "#FFFFFF",
        x: 50,
        y: 50,

    });
}

function switchLine() {
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx + 1) %
        gMeme.lines.length
}

function switchColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function increaseSize() {
    if (gMeme.lines[gMeme.selectedLineIdx].size < 100)
        gMeme.lines[gMeme.selectedLineIdx].size++
}

function decreaseSize() {
    if (gMeme.lines[gMeme.selectedLineIdx].size > 0)
        gMeme.lines[gMeme.selectedLineIdx].size--
}


function deleteLine(elLine) {
    const selectedMeme = getMeme()
    if (!selectedMeme) return
    elLine = selectedMeme.lines.splice(selectedMeme.selectedLineIdx, 1)
    console.log(elLine)
}




function hideSelectedLine() {
    const selectedMeme = getMeme()
    selectedMeme.selectedLineIdx = -1
    renderMeme()
    document.querySelector('.text-meme').value = ''


}



function flexable() {
    let imgs = getImgs()
    let randomNumber = getRandomIntInclusive(1, imgs.length - 1)
    let randomImg = imgs.find(img => img.id === randomNumber)

    if (randomImg)
     createMeme(randomNumber, randomImg.url)
    renderMeme()
    updateUserColor()
    updateUserInput()
    showEditor()
}


function showMessage() {
    document.querySelector('.modal').showModal()
}

function closeModal() {
    document.querySelector('.modal').close()
}


function ChangeFont(elFont) {
    gMeme.lines[gMeme.selectedLineIdx].font = elFont.value
}

function clearFilter(){
    var userText = document.querySelector('.Clear')
    userText.value=''
}


function clearFont() {
    var userText = document.querySelector('.fonts')
    userText.value = ''
    gMeme.lines[gMeme.selectedLineIdx].font = 'Serif'
}

function SaveMeme() {
    gMemesSave.push(gMeme)
    saveToStorage(USERSAVEKEY, gMemesSave)
}

function getMemeSave(elImg) {
    const saveMeme = gMemesSave.find((meme) => elImg.id === meme.selectedImgId)
    if (saveMeme) {
        gMeme = saveMeme
    }
}

