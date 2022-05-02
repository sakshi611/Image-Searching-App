// url: https:/api.unslash.com/search/photos/?query=${query}&per_page=20client_id=YOUR_ACCESS_KEY

// kXa53s60T3xWAiYnWxVrnUqCNp4A_mjAsx-jvbOtwGs

// https://api.unsplash.com/search/photos/?query=cat&per_page=20&client_id=kXa53s60T3xWAiYnWxVrnUqCNp4A_mjAsx-jvbOtwGs

import {navbar} from '../components/navbar.js'

let query
let container = document.getElementById('container')
let nav = document.getElementById('navbar')
nav.innerHTML=navbar()

let categories = document.getElementById('categories').children;


function cSearch(){
    console.log(this.id)
    container.innerHTML=null
    serachImages(this.id)
}

for(let el of categories){
    el.addEventListener('click',cSearch)
}

let search = (e)=>{
    if(e.key==='Enter'){
        container.innerHTML=null
        query = document.querySelector('#query').value
        serachImages(query)
    }
}

let q =document.querySelector('#query')
q.addEventListener('keydown',search)

async function serachImages(query){
   try{
    const res = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&per_page=20&client_id=kXa53s60T3xWAiYnWxVrnUqCNp4A_mjAsx-jvbOtwGs`)
    const data = await res.json();
    const images = data.results
    console.log(images)
    appendImages( images,container )
   } catch(err){
    console.log('err:',err)
   }
}




let appendImages = (images,container)=>{
    images.forEach(({description,urls:{small}}) => {
        let div = document.createElement('div')
        let img = document.createElement('img')
        let h3 = document.createElement('h3')

        img.src=small
        h3.innerHTML=description

        div.append(img,h3)
        container.append(div)
    });
}

