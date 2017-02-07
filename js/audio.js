

$('#main-button').click(function() {
    var $url = $('#search-box').val();
    $('audio')[0].src= $url;
    localStorage.setItem("url", $url);
    var storage = localStorage.getItem('url')
    console.log(storage);
    console.log($url);
});


$('#slow').click(function(){
    $('audio')[0].playbackRate -= 1.5;
});

$('#faster').click(function(){
    $('audio')[0].playbackRate += 1.0;
});
