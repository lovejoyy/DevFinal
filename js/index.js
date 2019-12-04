$(function(){
 
  $('#console-box').append('console is waiting on your input...');
  
  $('input[type=radio]').click(function(){
    $('#console-box').append('<br>class:'+$(this).attr("class")+'|value:'+$(this).parent().text());
    $(this).toggleClass('selected').siblings().removeClass('selected');
  });

  $('input[type=text]').blur(function(){
    $('#console-box').append('<br>class:'+$(this).attr("class")+'|value:'+$(this).val());
    $(this).toggleClass('selected').siblings().removeClass('selected');
  });
});