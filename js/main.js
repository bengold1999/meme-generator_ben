function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    
   
    renderGallery()
}

onInit()


function showEditor(){
    let elEditor = document.querySelector('.editor')
    let elGalerry = document.querySelector('.layout-gallery')
    let elGaleryContainer = document.querySelector('.gallery-container')
    elEditor.classList.remove('hide')
    elEditor.classList.add('grid')
    elEditor.classList.add('align-center')
    // elEditor.classList.add('flow-column')
    // elEditor.classList.add('space-between')

    elGalerry.classList.add('hide')
    elGaleryContainer.classList.add('hide')
    showMessage()
}

function showGallery(){
    let elEditor = document.querySelector('.editor')
    let elGalerry = document.querySelector('.layout-gallery')
    let elGaleryContainer = document.querySelector('.gallery-container')
    elEditor.classList.add('hide')
    elGalerry.classList.remove('hide')
    elGaleryContainer.classList.remove('hide')
    // elEditor.classList.remove('flex')
    elEditor.classList.remove('grid')
    elEditor.classList.remove('align-center')
    // elEditor.classList.remove('flow-column')
}