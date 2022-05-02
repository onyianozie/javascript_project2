// We want to display a list of camp photos with their locations.
// when the user inputs a location 
// clicks the explore button to show list of camp images



// Camp Gallery API

// Unsplash API: kNdiDp0P503CDAj8ZVSGMG_NIn8xdGoNqYmXRMoU8s4


let apiData = {}

const input = document.getElementById('input');
const grid = getelementbyclassName('grid')[0];


input.addEventListener('keydown', function(e){
    if(e.key === 'Enter')
    loadImg()
})

function loadImg(){

    removeImg();

    const url = 'https://api.unsplash.com/search/photo/?query='+input.value+'$per_page=9&client_id=kNdiDp0P503CDAj8ZVSGMG_NIn8xdGoNqYmXRMoU8s4';

    fetch(url)

    .then(response => {
        if(response.ok)
        return response.json();
        else
            alert(response.status)
    })

    .then(data => {
        const imageNodes = [];
        for(let i = 0; i < data.results.length; i++){
            imageNodes[i] = document.createElement('div');
            imageNodes[i].className = 'img';
            imageNodes[i].style.backgroundImage = 'url('+data.results[i].url.raw+')'
            imageNodes[i].addEventListener('dbclick', function(){
                window.open(data.results[i].links.download, '_blank');
            })

            grid.appendChild(imageNodes[i]);
        }

    })
}

function removeImg(){
    grid.innerHTML = '';
}


$('nav')