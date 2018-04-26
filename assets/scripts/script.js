$(document).ready(function() {
  var sofaCost = 300;
    var qsofaCost = 400;
    var wsofaCost = 500;
    var esofaCost = 600;
    var rsofaCost = 700;
    var tsofaCost = 800;
    var ysofaCost = 900;


		$('.down').click(function () {
			var $input = $(this).parent().find('input');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 99 : count;
			$input.val(count);
			$input.change();
			return false;
		});
		$('.up').click(function () {
			var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) + 1;
      count = count > 99 ? 0 : count;
      $input.val(count);
			$input.change();
			return false;
		});
        function Calendar2(id, year, month) {
var Dlast = new Date(year,month+1,0).getDate(),
    D = new Date(year,month,Dlast),
    DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
    DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
    calendar = '<tr>',
    month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
if (DNfirst != 0) {
  for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
}else{
  for(var  i = 0; i < 6; i++) calendar += '<td>';
}
for(var  i = 1; i <= Dlast; i++) {
  if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
    calendar += '<td class="today">' + i;
  }else{
    calendar += '<td>' + i;
  }
  if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
    calendar += '<tr>';
  }
}
for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
document.querySelector('#'+id+' tbody').innerHTML = calendar;
document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
    document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
}
}
Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
// переключатель минус месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
  Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
}
// переключатель плюс месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
  Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)+1);
}
$('.point').click(function(){
$('.point').removeClass('-is-active');
    $(this).toggleClass('-is-active');
  })
$('.vniz').click(function () {
      var $input = $(this).parent().find('.minets');
      var count = parseInt($input.val()) - 30;
      count = count < 00 ? 30 : count;
      
      $input.val(count);
      $input.change();
      return false; 
    });
    $('.verh').click(function () {
      var $input = $(this).parent().find('.minets');
      var count = parseInt($input.val()) + 30;
      count = count > 40 ? 0 : count;
      $input.val(count);
      $input.change();
      return false;
    });
      $('.vniz').click(function () {
      var $input = $(this).parent().find('.hours');
      var count = parseInt($input.val()) - 1;
      count = count < 00 ? 23 : count;
      
      $input.val(count);
      $input.change();
      return false; 
    });
      $('.verh').click(function () {
      var $input = $(this).parent().find('.hours');
      var count = parseInt($input.val()) + 1;
      count = count > 23 ? 00 : count;
      
      $input.val(count);
      $input.change();
      return false; 
    });
 $('.sofa').click(function(){
    $('.span-cost').html('');
    $('.span-cost').text(sofaCost)
      })
 $('.qsofa').click(function(){
    $('.span-cost').html('');
    $('.span-cost').text(qsofaCost)
      })
 $('.wsofa').click(function(){
    $('.span-cost').html('');
    $('.span-cost').text(wsofaCost)
      })
 $('.esofa').click(function(){
    $('.span-cost').html('');
    $('.span-cost').text(esofaCost)
      })
 $('.rsofa').click(function(){
    $('.span-cost').html('');
    $('.span-cost').text(rsofaCost)
      })
 $('.tsofa').click(function(){
    $('.span-cost').html('');
    $('.span-cost').text(tsofaCost)
      })
 $('.ysofa').click(function(){
    $('.span-cost').html('');
    $('.span-cost').text(ysofaCost)
      })
});
