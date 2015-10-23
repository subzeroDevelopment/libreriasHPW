var Eventos=(function(){
  var click=function(obj,f){
    obj.addEventListener("click",f,false);
    return obj;
  };
  var double_click=function(obj,f){
    obj.addEventListener("dblclick",f,false);
    return obj;
  };
  var enfoque=function(obj,f){
    obj.addEventListener("focus",f,false);
    return obj;
  };

  var desenfoque=function(obj,f){
    obj.addEventListener("blur",f,false);
    return obj;
  };

  var input=function(obj,f){
      obj.addEventListener("input",f,false);
      return obj;
    };
  var pres_tecla=function(obj,f){
      obj.addEventListener("keydown",f,false);
      return obj;
    };
    var soltar_tecla=function(obj,f){
        obj.addEventListener("keyup",f,false);
        return obj;
      };
    var mouse_encima=function(obj,f){
        obj.addEventListener("mouseenter",f,false);
        return obj;
      };
    var mouse_fuera=function(obj,f){
          obj.addEventListener("mouseleave",f,false);
          return obj;
        };

      var select=function(obj,f){
            obj.addEventListener("select",f,false);
            return obj;
          };
  return{"click":click,
          "double_click":double_click,
          "enfoque":enfoque,
          "desenfoque":desenfoque,
          "input":input,
          "pres_tecla":pres_tecla,
          "soltar_tecla":soltar_tecla,
          "mouse_encima":mouse_encima,
          "mouse_fuera":mouse_fuera,
          "select":select
  };


})();
