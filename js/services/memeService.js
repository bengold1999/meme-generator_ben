'use strict'

let gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat'] },
    { id: 3, url: 'img/3.jpg', keywords: ['funny', 'cat'] },
    { id: 4, url: 'img/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'img/5.jpg', keywords: ['funny', 'cat'] },
    { id: 6, url: 'img/6.jpg', keywords: ['funny', 'cat'] },
    { id: 7, url: 'img/7.jpg', keywords: ['funny', 'cat'] },
    { id: 8, url: 'img/8.jpg', keywords: ['funny', 'cat'] },
    { id: 9, url: 'img/9.jpg', keywords: ['funny', 'cat'] },
    { id: 10, url: 'img/10.jpg', keywords: ['funny', 'cat'] },
    { id: 11, url: 'img/11.jpg', keywords: ['funny', 'cat'] },
    { id: 12, url: 'img/12.jpg', keywords: ['funny', 'cat'] },
    { id: 13, url: 'img/13.jpg', keywords: ['funny', 'cat'] },
    { id: 14, url: 'img/14.jpg', keywords: ['funny', 'cat'] },
    { id: 15, url: 'img/15.jpg', keywords: ['funny', 'cat'] },
    { id: 16, url: 'img/16.jpg', keywords: ['funny', 'cat'] },
    { id: 17, url: 'img/17.jpg', keywords: ['funny', 'cat'] },
    { id: 18, url: 'img/18.jpg', keywords: ['funny', 'cat'] }
]

let gMeme

function createMeme(imgId, imgUrl) {
    gMeme = {
        selectedImgId: imgId,
        selectedLineIdx: 0,
        url: imgUrl,
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

function getMeme() {
    return gMeme
}

function getImgs() {
    return gImgs
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

function switchLine() {
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx + 1) %
        gMeme.lines.length
}

function switchColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function increaseSize() {
    gMeme.lines[gMeme.selectedLineIdx].size++
}

function decreaseSize() {
    if (gMeme.lines[gMeme.selectedLineIdx].size > 0)
        gMeme.lines[gMeme.selectedLineIdx].size--
}