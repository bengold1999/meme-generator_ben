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
    const typeFont = line.font ? line.font : 'serif'
    const fontSize = gElCanvas.width * (line.size / 100)
    gCtx.font = `${fontSize}px ${typeFont}`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'


    selectedLine(line, isSelected)
    // if(isSelected===-1){
    //     isSelected=1
    // }

    gCtx.fillText(line.txt, line.x / 100 * gElCanvas.width, line.y / 100 * gElCanvas.height)
    gCtx.strokeText(line.txt, line.x / 100 * gElCanvas.width, line.y / 100 * gElCanvas.height)
    gCtx.restore()

}





function selectedLine(line, isSelected) {
    if (isSelected) {
        const padding = 5;
        gCtx.strokeStyle = "black"
        const textWidth = gCtx.measureText(line.txt).width
        const lineX = line.x / 100 * gElCanvas.width
        const lineY = line.y / 100 * gElCanvas.height
        const fontSize = gElCanvas.width * (line.size / 100)
        gCtx.strokeRect(lineX - textWidth / 2 - padding, lineY - fontSize / 2 - padding, textWidth + padding * 2, fontSize + padding * 2)
    }
}

function onImgSelect(elImg) {
    createMeme(elImg.id, elImg.src)
    renderMeme()
    updateUserColor()
    updateUserInput()
    updateUserInput()
    showEditor()

}

function onAddLine() {
    addLine()
    renderMeme()
}

function onChangeFont(elFont) {
    ChangeFont(elFont)
    renderMeme()
}

function onAddEmoji(elEmo) {
    addEmoji(elEmo)
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
    updateUserFont()
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

function updateUserFont() {
    const selectedMeme = getMeme()
    if (!selectedMeme) return
    var userText = document.querySelector('.fonts')
    userText.value = selectedMeme.lines[selectedMeme.selectedLineIdx].font
}


function updateUserColor() {
    const selectedMeme = getMeme()
    if (!selectedMeme) return
    var userColor = document.querySelector('.text-color')
    userColor.value = selectedMeme.lines[selectedMeme.selectedLineIdx].color
}

function downloadMeme() {
    var a = document.createElement("a")
    a.download = 'my-meme'
    const dataUrl = gElCanvas.toDataURL()
    a.href = dataUrl
    a.click()
    a.remove()
}

function onDownloadMeme() {
    hideSelectedLine()
    setTimeout(() => {
        downloadMeme()
    }, 0)
}

function onclickLine(ev) {
    const pos = getEvPos(ev)
    const meme = getMeme()
    let lineSelected = false

    meme.lines.forEach((line, idx) => {
        const lineY = line.y / 100 * gElCanvas.height
        const fontSize = gElCanvas.width * (line.size / 100)

        if (Math.abs(pos.y - lineY) < fontSize / 2 + 10) {
            meme.selectedLineIdx = idx
            lineSelected = true
        }
    })

    if (lineSelected) {
        renderMeme()
        updateUserInput()
        updateUserColor()
        updateUserInput()
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
    userBtnCenterText = selectedMeme.lines[selectedMeme.selectedLineIdx].x = 50

}


function onTextCenter() {
    updateUserTextCenter()
    renderMeme()
}


function updateUserTextRight() {
    const selectedMeme = getMeme()
    if (!selectedMeme) return
    var userBtnRightText = document.querySelector('.right-alignment')
    userBtnRightText = selectedMeme.lines[selectedMeme.selectedLineIdx].x = 80

}


function onTextRight() {
    updateUserTextRight()
    renderMeme()
}

function updateUserTextLeft() {
    const selectedMeme = getMeme()
    if (!selectedMeme) return
    var userBtnLeftText = document.querySelector('.left-alignment')
    userBtnLeftText = selectedMeme.lines[selectedMeme.selectedLineIdx].x = 20

}


function onTextLeft() {
    updateUserTextLeft()
    renderMeme()
}


function Onflexable() {
    flexable()
}

function OnclearFont(){
    clearFont()
    renderMeme()
}