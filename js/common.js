$(function() {


  $('.input__label input, .input__label textarea').focus(function() {
    $(this).parent().find('.hint').hide();
});

$('.input__label input, .input__label textarea').blur(function() {
    if ($(this).val().trim() === '') {
        $('.hint').show();
    }
});

$("#phone").mask("999(99) 999-9999");

// $('#modal__link').click( function(event){ 
//   event.preventDefault();
//   let id  = $(this).attr('href');
//   let  tops = $(id).offset().top;

// $('#popup-container').fadeIn(400, 
// function(){ 
// $('#modal__window') 
// .css('display', 'block') 
// .animate({opacity: 1, top: tops }, 200); 
// });
// });

// $('.close__icon, #popup-container').click( function(){
// $('#modal__window')
// .animate({opacity: 0}, 200,  
// function(){
//   $(this).css('display', 'none'); 
//   $('#popup-container').fadeOut(400); 
// }
// );
// }); 


  $('.file_input').change(function(e){
    if ($(this).val() !== ''){
      let fileName = e.target. files[0]. name;
      $('.file__name').html('Выбран файл ' + fileName)
      $('.file__name').attr('id', 'file')
      $('.file__name').parent().attr('id', 'file_wrap')
      $('#file__about').css("max-width", "280px");
      $('.take__files').css('align-items', 'end');
    }
  })

  $('[data-fancybox="images"]').fancybox({
     baseClass: 'myFancyBox',
    thumbs : {
     
      autoStart : true,
      axis      : 'x'
    }
  })
  
  $('[data-fancybox="galery"]').fancybox({
    baseClass: 'myFancyBox',
   thumbs : {
    
     autoStart : true,
     axis      : 'x'
   }
 })
 

})