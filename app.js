$(document).ready(function () {
    //make request to Giphy API
    var api_key = "5XFDXRG4rTtPCpIW60ETmDoiVZ3LP6CG";
    $.ajax({
        type: "GET",
        //we got the Giphy url from the website
        //the url below will give this error {"message":"No API key found in request"}
        //we need to add our api key to the url
        // url: "https://api.giphy.com/v1/gifs/search"
        //limit is a query parameter
        //the first query parameter starts with a ? and the other query parameters start with an &
        //search looks for the string in q search
        // i combined both of the trending and search parameters in one line
        url: `https://api.giphy.com/v1/gifs/search?q="dcuo"&trending&limit=2&api_key=${api_key}`,
        //limits to 5 image gifs
        // url: `https://api.giphy.com/v1/gifs/trending?limit=5&api_key=${api_key}`,
        // url: `https://api.giphy.com/v1/gifs/search?q="cheeseburger"&api_key=${api_key}`,
        // url: `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}`,
        dataType: "json",
    }).then(function (response) {
        console.log(response);
        for (var i = 0; i < response.data.length; i++) {
            var still = response.data[i].images.original_still.url;
            var gif = response.data[i].images.original.url;
            $("body").prepend(`<img class="gif" data-still =${still} data-gif =${gif} src= ${still}></img>`);
        }
        // console.log(response.data[0].images.original_still.url);
        // var still = response.data[0].images.original_still.url;
        // //console.log(response.data[0].images.original.url);
        // var gif = response.data[0].images.original.url;
        // $("body").prepend(`<img src = "${gif}"></img>`);
        // $("body").prepend(`<img src = "${still}"></img>`);
        // $("body").prepend(`<img classes="gif" data-still =${still} data-gif =${gif} src= ${still}></img>`);

    });
    $(document).on("click", ".gif", function () {
        if ($(this).attr("src") === $(this).attr("data-still")) {
            console.log("we should make this animated");

            $(this).attr("src", $(this).attr("data-gif"));
        }
        else {
            $(this).attr("src", $(this).attr("data-still"));
        }
    });
});