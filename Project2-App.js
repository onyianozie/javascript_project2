// get photos from a collection
// click button to display a list of camp photos in a allery grid

// Camp Gallery API
// Unsplash API: kNdiDp0P503CDAj8ZVSGMG_NIn8xdGoNqYmXRMoU8s4

// First Step: handle getting the information we're requesting, it returns a promise, which is an object whcih also represents a value.

const campPhotos = {}
const client_id = 'kNdiDp0P503CDAj8ZVSGMG_NIn8xdGoNqYmXRMoU8s4'
const collectionID = 'UvyqueUTq1Q'



$("button").on('click', function(event){
    event.preventDefault();
    $('.grid').empty()

    let search = $("#search").val();

    let url = `https://api.unsplash.com/search/photos/?query=camping&landscapes&client_id=kNdiDp0P503CDAj8ZVSGMG_NIn8xdGoNqYmXRMoU8s4&per_page=30`

    $.ajax({
        url: url,
        method: 'GET', 
        success: function(data){
            console.log(data)
            data.results.forEach(photo => {
                $('.grid').append(`

                    <img class="imgs" src= ${photo.urls.full} />
                         

                `)
            })
        }

    })
})

    