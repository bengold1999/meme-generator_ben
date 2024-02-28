'use strict'

let gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
            { id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat'] }]
let gMeme

function createMeme(imgId, imgUrl){
    gMeme = {
        selectedImgId: imgId,//back here 
        selectedLineIdx: 0,
        url: imgUrl, // back here
        lines: [
            {
                txt: 'line1',
                size: 40,
                color: "#e66465",
                x: 100,
                y: 100
            },
            {
                txt: 'line2',
                size: 40,
                color: "#e66465",
                x: 100,
                y: 150
            }
        ]
    }

    return gMeme
}
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function getMeme(imgId, imgUrl) {
    return gMeme
}

function getImgs(){
    return gImgs
}

function setLineTxt() {
    if(!gMeme) return
    var userText = document.querySelector('.text-meme')
    userText.addEventListener('input', () => {
        if (gMeme.lines.length > 0) {
            gMeme.lines[gMeme.selectedLineIdx].txt = userText.value
        }
    })
}

function addLine(){
    let last = gMeme.lines[gMeme.lines.length - 1];
    let positionY = last ? gMeme.lines[gMeme.lines.length - 1].y + 50 : 100
    gMeme.lines.push({
        txt: `line${gMeme.lines.length + 1}`,
        size: 40,
        color: "#e66465",
        x: 100,
        y: positionY
    });
}

function switchLine(){
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx + 1) %
     gMeme.lines.length
}

function switchColor(color){
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function increaseSize(){
    gMeme.lines[gMeme.selectedLineIdx].size++
}

function decreaseSize(){
    if(gMeme.lines[gMeme.selectedLineIdx].size > 0)
        gMeme.lines[gMeme.selectedLineIdx].size--
}