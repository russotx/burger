$('#burger-btn').on('click',function(){
  let burgerObj = {name:""};
  burgerObj.name = $('burger-input').val();
  $.ajax({
    method : "POST",
    url: "/",
    datatype: "json",
    contentType: "application/josn; charset=utf-8",
    data: JSON.stringify(burgerObj.name)
   }).done(function(newburgers){
      // display new view
      
   });
});

$('.devour-btn').on('click',function(event){
  $.ajax({
    method: "PUT",
    ulr: "/",
    datatype: "json",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(burgerObj.name)
  }).done(function(newburgers){
    // display new view
    
  });
})