'use strict'

let gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: 'leaders' },
    { id: 2, url: 'img/2.jpg', keywords: "animals" },
    { id: 3, url: 'img/3.jpg', keywords: "kids" },
    { id: 4, url: 'img/4.jpg', keywords: "animals" },
    { id: 5, url: 'img/5.jpg', keywords: "kids" },
    { id: 6, url: 'img/6.jpg', keywords: "other" },
    { id: 7, url: 'img/7.jpg', keywords: "kids" },
    { id: 8, url: 'img/8.jpg', keywords: "movies" },
    { id: 9, url: 'img/9.jpg', keywords: "kids" },
    { id: 10, url: 'img/10.jpg', keywords: "leaders" },
    { id: 11, url: 'img/11.jpg', keywords: "other" },
    { id: 12, url: 'img/12.jpg', keywords: "other" },
    { id: 13, url: 'img/13.jpg', keywords: "movies" },
    { id: 14, url: 'img/14.jpg', keywords: "movies" },
    { id: 15, url: 'img/15.jpg', keywords: "movies" },
    { id: 16, url: 'img/16.jpg', keywords: "movies" },
    { id: 17, url: 'img/17.jpg', keywords: "leaders" },
    { id: 18, url: 'img/18.jpg', keywords: "movies" }
]

var gKeywordSearchCountMap = gImgs.reduce((acc, img) => {
    acc[img.keywords] = (acc[img.keywords] || 0) + 1
    return acc
}, {})



function getImgs() {
    return gImgs
}


function getKeys() {
    return gKeywordSearchCountMap
}


function clearFilterSerach() {
    var clear = document.querySelector('.keys')
    clear.value ='' 
    renderGallery()

}