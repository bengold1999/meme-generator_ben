function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    window.addEventListener('resize', ()=>resizeCanvas())
    gMemesSave = loadFromStorage(USERSAVEKEY) || []
    renderGallery()
    resizeCanvas()
    renderKeywords()
}

onInit()


function resizeCanvas() {
    const isPhone = window.innerWidth <= 768
    gElCanvas.width = isPhone ? window.innerWidth : window.innerWidth/2.5
    gElCanvas.height = isPhone ? window.innerHeight : window.innerHeight/2.5
    renderMeme()
}

function showEditor(){
    let elEditor = document.querySelector('.editor')
    let elGalerry = document.querySelector('.layout-gallery')
    let elGaleryContainer = document.querySelector('.gallery-container')
    let elAbout = document.querySelector('.about-me')
    elEditor.classList.remove('hide')
    elEditor.classList.add('grid')
    elEditor.classList.add('align-center')
    elAbout.classList.add('hide')
    // elEditor.classList.add('flow-column')
    // elEditor.classList.add('space-between')

    elGalerry.classList.add('hide')
    elGaleryContainer.classList.add('hide')
   
}

function showGallery(){
    let elEditor = document.querySelector('.editor')
    let elGalerry = document.querySelector('.layout-gallery')
    let elGaleryContainer = document.querySelector('.gallery-container')
    let elAbout = document.querySelector('.about-me')
    elEditor.classList.add('hide')
    elGalerry.classList.remove('hide')
    elGaleryContainer.classList.remove('hide')
    // elEditor.classList.remove('flex')
    elAbout.classList.add('hide')
    elEditor.classList.remove('grid')
    elEditor.classList.remove('align-center')
    // elAbout.classList.add('hide')
    // elEditor.classList.remove('flow-column')
    renderGallery()
}

function ShowSaved(){
    let elEditor = document.querySelector('.editor')
    let elGalerry = document.querySelector('.layout-gallery')
    let elGaleryContainer = document.querySelector('.gallery-container')
    let elAbout = document.querySelector('.about-me')
    elEditor.classList.add('hide')
    elGalerry.classList.remove('hide')
    elGaleryContainer.classList.remove('hide')
    // elEditor.classList.remove('flex')
    elEditor.classList.remove('grid')
    elEditor.classList.remove('align-center')
    elAbout.classList.add('hide')
    // elEditor.classList.remove('flow-column')
    // renderGallery()
    renderSaved()
    
}


function toggleMenu(){
    document.body.classList.toggle('menu-open')
}


function showMe(){
    let elEditor = document.querySelector('.editor')
    let elGalerry = document.querySelector('.layout-gallery')
    let elGaleryContainer = document.querySelector('.gallery-container')
    let elAbout = document.querySelector('.about-me')
    elEditor.classList.add('hide')
    elEditor.classList.remove('grid')
    elEditor.classList.remove('align-center')
    elGalerry.classList.add('hide')
    elGaleryContainer.classList.add('hide')
    elAbout.classList.remove('hide')
    elGalerry.classList.add('hide')
    elGaleryContainer.classList.add('hide')
    

}