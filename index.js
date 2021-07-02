var count = 0;
 show();
$("button.increment").on("click",function(){
    if(count!=10)
    count++;
    show();
});
$("button.decrement").on("click",function(){
    if(count!=0)
    count--;
    show();
});
$("button.reset").on("click",function(){
    count = 0;
    show();
});

function show(){ 
 if(count%2==0){
     $("span#value").text(count);
     $('body').css("background-color","skyblue");
     $('#value').css("color","white");
    
 }
 else{
      $("span#value").text(count);
     $('body').css("background-color","grey");
     $('#value').css("color","red");
 }
}


