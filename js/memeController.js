'use strict'
let gElCanvas
let gCtx
let userPassIt = false

function renderMeme() {
    const selectedMeme = getMeme()
    if (!selectedMeme) return


    const img = new Image()
    img.src = selectedMeme.url

    img.onload = () => {
        gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        selectedMeme.lines.forEach((line, index) =>
            drawText(line, index === selectedMeme.selectedLineIdx))
    }
}



function drawText(line, isSelected) {
    gCtx.save()
    gCtx.lineWidth = 2
    gCtx.strokeStyle = "black"

    gCtx.fillStyle = line.color

    gCtx.font = `${line.size}px Arial`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'


    selectedLine(line, isSelected)
    // if(isSelected===-1){
    //     isSelected=1
    // }

    gCtx.fillText(line.txt, line.x, line.y)
    gCtx.strokeText(line.txt, line.x, line.y)
    gCtx.restore()

}





function selectedLine(line, isSelected) {
    if (isSelected) {
        const padding = 5;
        gCtx.strokeStyle = "black"
        const textWidth = gCtx.measureText(line.txt).width
        gCtx.strokeRect(line.x - textWidth / 2 - padding, line.y - line.size / 2 - padding, textWidth + padding * 2, line.size + padding * 2)








    }
}







function onImgSelect(elImg) {
    createMeme(elImg.id, elImg.src)
    renderMeme()
    updateUserColor()
    updateUserInput()

    showEditor()
   
}

function onAddLine() {
    addLine()
    renderMeme()
}

function onLineTextChanged() {
    setLineTxt()
    renderMeme()
}

function onSwitchLine() {
    switchLine()
    renderMeme()
    updateUserColor()
    updateUserInput()
}

function onIncreaseSize() {
    increaseSize()
    renderMeme()
}

function onDecreaseSize() {
    decreaseSize()
    renderMeme()
}

function onColorPicked(colorValue) {
    switchColor(colorValue)
    renderMeme()
}

function updateUserInput() {
    const selectedMeme = getMeme()
    if (!selectedMeme) return
    var userText = document.querySelector('.text-meme')
    userText.value = selectedMeme.lines[selectedMeme.selectedLineIdx].txt
}

function updateUserColor() {
    const selectedMeme = getMeme()
    if (!selectedMeme) return
    var userColor = document.querySelector('.text-color')
    userColor.value = selectedMeme.lines[selectedMeme.selectedLineIdx].color
}

function downloadMeme(elLink) {
    elLink.download = 'my-meme'
    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
}

function onDownloadMeme(elLink) {

    downloadMeme(elLink)
}
function onclickLine(ev) {
    const pos = getEvPos(ev)
    const meme = getMeme()
    let lineSelected = false

    meme.lines.forEach((line, idx) => {
        if (Math.abs(pos.y - line.y) < line.size / 2 + 10) {
            meme.selectedLineIdx = idx
            lineSelected = true
        }
    })

    if (lineSelected) {
        renderMeme()
        updateUserInput()
        updateUserColor()

    }

}

function updateUserLineUp() {
    const selectedMeme = getMeme()
    if (!selectedMeme) return
    var userBtnUp = document.querySelector('.top')
    userBtnUp = selectedMeme.lines[selectedMeme.selectedLineIdx].y -= 5

}


function updateUserLineDown() {
    const selectedMeme = getMeme()
    if (!selectedMeme) return
    var userBtnDown = document.querySelector('.bottom')
    userBtnDown = selectedMeme.lines[selectedMeme.selectedLineIdx].y += 5
}

function onLineUp() {
    updateUserLineUp()
    renderMeme()
}

function onLineDown() {
    updateUserLineDown()
    renderMeme()
}

function updateUserLineLeft() {
    const selectedMeme = getMeme()
    if (!selectedMeme) return
    var userBtnLeft = document.querySelector('.left')
    userBtnLeft = selectedMeme.lines[selectedMeme.selectedLineIdx].x -= 5
    console.log(userBtnLeft)
}


function onLineLeft() {
    updateUserLineLeft()
    renderMeme()
}


function updateUserLineRight() {
    const selectedMeme = getMeme()
    if (!selectedMeme) return
    var userBtnRight = document.querySelector('.right')
    userBtnRight = selectedMeme.lines[selectedMeme.selectedLineIdx].x += 5

}


function onLineRight() {
    updateUserLineRight()
    renderMeme()
}



function onDeleteLine(elLine) {
    deleteLine(elLine)
    renderMeme()

}




function updateUserTextCenter() {
    const selectedMeme = getMeme()
    if (!selectedMeme) return
    var userBtnCenterText = document.querySelector('.center-alignment')
    userBtnCenterText = selectedMeme.lines[selectedMeme.selectedLineIdx].x = gElCanvas.width / 2

}


function onTextCenter() {
    updateUserTextCenter()
    renderMeme()
}


function updateUserTextRight() {
    const selectedMeme = getMeme()
    if (!selectedMeme) return
    var userBtnRightText = document.querySelector('.right-alignment')
    userBtnRightText = selectedMeme.lines[selectedMeme.selectedLineIdx].x = gElCanvas.width - 50

}


function onTextRight() {
    updateUserTextRight()
    renderMeme()
}

function updateUserTextLeft() {
    const selectedMeme = getMeme()
    if (!selectedMeme) return
    var userBtnLeftText = document.querySelector('.left-alignment')
    userBtnLeftText = selectedMeme.lines[selectedMeme.selectedLineIdx].x = 50

}


function onTextLeft() {
    updateUserTextLeft()
    renderMeme()
}


function Onflexable(){
    flexable()
}



