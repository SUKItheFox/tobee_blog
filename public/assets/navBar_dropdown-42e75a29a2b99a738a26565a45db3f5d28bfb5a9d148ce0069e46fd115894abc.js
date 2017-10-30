$('#logo img')
.css({cursor: "pointer"})
.on('click', function(){
  var txt =  $(this).text() == "img"?"img":"img";
  $(this).text(txt);
  $(this).next('#navBar').toggle();
})
;
