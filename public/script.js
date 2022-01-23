 ///api.ancraft.one


function sidebar() { //側邊導覽切換
    $("body").toggleClass("opennav");
  };
$(document).ready(function(){ //按下enter送出請求
  $("input").keyup(function(id){
    if(id.key === "Enter"){get()};//請求api
    });
});