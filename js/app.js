// THIS WILL ALLOW THE ALL CSS COMPONENT

// ===== QUERIES FOR THE NAVBAR

const top1 = $('#search').offset().top;
const top3 = $('#popular').offset().top;
const top2 = $('#card').offset().top;
console.log(top1)
const top4 = $('#gallery').offset().top;
const top5 = $('#contact').offset().top;
const top6 = $('#folow').offset().top;



$(document).scroll(function() {
  let scrollPos = $(document).scrollTop();
  if (scrollPos >= top1 && scrollPos < top2) {
    $('#change').css('background-color', '#ec407a');

  }
  else if(scrollPos >= top2 && scrollPos < top3){
    $('#change').css('background-color', '#fafafa');
    
    $('.nav-wrapper a').attr('style', 'color:#d81b60 !important');
    


  }else if(scrollPos >= top3 && scrollPos < top6){

    $('#change').css('background-color', 'transparent');
    $('.nav-wrapper a').attr('style', 'color:#d81b60 !important');
  }
  else if(scrollPos >= top6 && scrollPos < top4){

    $('#change').css('background-color', '#c2185b ');
    $('.nav-wrapper a').attr('style', 'color:#fff !important');

  }
  else if(scrollPos >= top4 && scrollPos < top5){
    $('#change').css('background-color', '#fafafa');
    
    $('.nav-wrapper a').attr('style', 'color:#d81b60 !important');


  }else if(scrollPos >= top5){
    $('#change').css('background-color', '#fafafa');
    
    $('.nav-wrapper a').attr('style', 'color:#d81b60 !important');


  }
  else{
    $('#change').css('background-color', '#ec407a');
    $('.nav-wrapper a').attr('style', 'color:#fff !important');

  }

});










 
$(document).ready(function(){
  $('.carousel').carousel(
  {
    
    duration:'100'
  }
  );
});
// INITILIZE THE NAVABAR BY MATERIALIZE CSS


const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav,{});


//   INITIALIZATION FOR THE SLider
const slider = document.querySelector('.slider');
M.Slider.init(slider,{
    indicators:false,
    height:500,
    transition:500,
    interval:6000
});

// INITILIZE THE AUTOCOMPLTE CLASS

const auto = document.querySelector('.autocomplete');
M.Autocomplete.init(auto,{
    data:{
"Havana":null,
'Goa':null,
'Califonia':null,
'alaska':null,
'vegas':null,
'cancun-maxico':null,
'jureca':null,
'hongkong':null,
'europe':null

    }
})
     


// INITILIZE THE PARALLAX EFFECT

const para = document.querySelector('.parallax');
M.Parallax.init(para,{});
// INITILIZE THE MAETRIAL BOX
const mat = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mat, {
  
});

// SCROLLSPY

$(document).ready(function(){
  $('.scrollspy').scrollSpy({
    
// getActiveElement:function(id){
//   console.log(id)
// return 'a[href="#' + id + '"]';


// }

  });
});

