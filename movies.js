"use strict";

//This is our holder to put all our content!
var holder = document.getElementById('overall_holder');

//This is our data!
var movie_data = [{"name":"Riddhi Andurkar","role":"J4502","fave_movie":"Shutter Island"},
{"name":"Bailey Becker","role":"J4502","fave_movie":"Raising Arizona"},
{"name":"Justin Efebera","role":"J4502","fave_movie":"The Fly"},
{"name":"Patrick Garvin","role":"teacher","fave_movie":"Star Wars"},
{"name":"Ashlyn Green","role":"J4502","fave_movie":"Fantasia"},
{"name":"Aryana Hadjimohammadi","role":"J4502","fave_movie":"The Empire Strikes Back"},
{"name":"Adam Healy","role":"J4502","fave_movie":"High Fidelity"},
{"name":"Bryce Johnsen","role":"J4502","fave_movie":"The Breakfast Club"},
{"name":"Ellie Lin","role":"J4502","fave_movie":"Star Trek II: The Wrath of Khan"},
{"name":"Erin Martise","role":"J4502","fave_movie":"Willow"},
{"name":"Katelynn McIlwain","role":"J7502","fave_movie":"The Land Before Time"},
{"name":"MJ Montgomery","role":"J4502","fave_movie":"The Big Lebowski"},
{"name":"Grace Noble","role":"J4502","fave_movie":"Fargo"},
{"name":"Melanie Oliva","role":"J4502","fave_movie":"Captain Marvel"},
{"name":"Lucas Owens","role":"J4502","fave_movie":"The Paper"},
{"name":"Tristen Rouse","role":"J7502","fave_movie":"Wonder Boys"},
{"name":"Amy Schaffer","role":"J4502","fave_movie":"Black Panther"},
{"name":"Leor Shomroni","role":"J4502","fave_movie":"Hairspray"},
{"name":"Sophie Stephens","role":"J4502","fave_movie":"Field of Dreams"},
{"name":"Han Vu","role":"J7502","fave_movie":"Spotlight"}];

movie_data.forEach(function(person) {
    holder.innerHTML = holder.innerHTML +
    '<div class="person-holder">'+
    '<h2>'+person.name+'</h2>'+
    '<p><strong>Status: </strong>'+person.role+'</p>'+
    '<p><strong>Favorite movie: </strong>"'+person.fave_movie+'"</p>'+
    '</div>'
});
