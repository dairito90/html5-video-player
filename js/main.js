
 $('#slow-down').click(function(){
     $('video')[0].playbackRate -= 1.5;
 });

 $('#speed-up').click(function(){
     $('video')[0].playbackRate += 1.0;
 });


 $("video").mediaelementplayer({
   success: function(player, node){
     $("#"+node.id+"-mode").html("mode: "+playerpluginType);
   },
   startLanguage: "en",
   translationSelector: true
 });
