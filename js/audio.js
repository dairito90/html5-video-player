var click = require('./clickhandler.js');

$('#main-button').click(click);


$('#slow').click(function(){
    $('audio')[0].playbackRate -= 1.5;
});

$('#faster').click(function(){
    $('audio')[0].playbackRate += 1.0;
});
