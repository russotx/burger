$('#burger-btn').on('click',function(){
  let burgerObj = {name:"",devoured:false};
  burgerObj.name = $('burger-input').val();
  $.ajax({
    method : "POST",
    url: "/",
    datatype: "json",
    contentType: "application/josn; charset=utf-8",
    data: JSON.stringify(burgerObj)
   });
});



$('#burger-container').on('click','.devour-btn',function(event){
  let burgerObj = {name:""};
  burgerObj.name = event.target.id;
  console.log(burgerObj.name);
  $.ajax({
    method: "PUT",
    ulr: "/",
    datatype: "json",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(burgerObj)
  });
});