$(function() {

  $('#myform').on('submit', function(event){
    var text = $('#mytext').val();
    var name = $('#myname').val();
    event.preventDefault();
    $('#board').append(
      '<div class="allpost">'
      +'<ul class="highligt">'
      +'<li class= "highligt_post">'
      +'<img class ="highligt_img" src="assets/images/uk.png" alt="">'
      +'<p class="highligt_name">'
      + name
      +'</p>'
      +'<p class="highligt_text">'
      + text
      +'</p>'
      +'</li>'
      +'<ul class="social">'
      +'<li class="social_elements">'
      +'<a class="social_like" href="#">'
      +'<i class="glyphicon glyphicon-heart"></i>'
      +'<span class="social__number">0</span>'
      +'</a>'
      +'<span class="social__text">Likes</span>'
      +'</li>'
      +'<li class="right" >'
      +'<div class="close">'
      +'<i class="glyphicon glyphicon-remove-sign"></i>'
      +'</div>'
      +'</li>'
      +'</ul>'
      +'</ul>'
      +'</div>'
    );// append
  });// submit function

  $('#board').on('click','.close',function(event){
    event.preventDefault();
    event.stopPropagation();
    $(this).parents('.allpost').fadeOut(300);
    // alert("cerrando el pin");
  });// close

  $('.social_elements').on('click','.social_like',function(event){
    event.preventDefault();
    event.stopPropagation();
    $(this).find('.glyphicon-heart').toggleClass('social_like--black');
  });// like

});// document.ready
