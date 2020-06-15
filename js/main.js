$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    // PROVA CON L'API

    //
    // var cardTemplateSrc = $('#card-template').html();
    // var cardTemplate = Handlebars.compile(cardTemplateSrc);
    var settings = {
    	"async": true,
    	"crossDomain": true,
    	"url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=hiphop",
    	"method": "GET",
    	"headers": {
    		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    		"x-rapidapi-key": "cde8486ffamsh9032eff7f5a289fp16cd06jsn16ff9fb3373f"
    	}
    }

    var cardTemplateSrc = $('#card-template').html();
    var cardTemplate = Handlebars.compile(cardTemplateSrc);

    $.ajax(settings).done(function (response) {
    	// console.log(response.data);
        var mario= response.data;
        for (var i = 0; i < mario.length; i++) {
            var disco= mario[i];
            console.log(mario[i]);
            // console.log(disco.album);
            var imma = disco.album;
            var nom = disco.artist;
            console.log(nom.name);
            console.log(imma.cover);
            var info = {
                titolo : nom.name,
                immagine: imma.cover
            }
        var movieCard = cardTemplate(info);
        $('#risultato').append(movieCard);
        }
    });

});
