
module.exports = function(){
    var $url = $('#search-box').val();
  $('audio')[0].src=$url;
  console.log($url);
  localStorage.setItem("url", $url);
  var save = localStorage.getItem('url');
  console.log(save);

}
