var Menu=(function(){
    var men=document.createElement("button");

    var nuevo=function(text){

    men.primary=function(){
      var cl=men.className;
      men.className="btn btn-primary";
      return men;
    };
    men.set_text=function(texto){
      men.textContent=texto;
      return men;
    };

      men.className="btn";
      men.textContent=text;
      return men;

    };


    return{"nuevo":nuevo};

})();
