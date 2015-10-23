var Botones=(function(){
  var boton=function(text){
    /*<button class="pure-button" type="button">Button button</button>*/
    var bot=document.createElement("button");
    bot.textContent=text;
    bot.className="pure-button";
    return bot;
  };
  var boton_desactivado=function(text){
    /*<button class="pure-button" type="button">Button button</button>*/
    var bot=document.createElement("button");
    bot.textContent=text;
    bot.className="pure-button pure-button-disabled";
    return bot;
  };

  var boton_primario=function(text){
    /*<button class="btn btn-primary" type="button">Primary button</button>*/
    var bot=document.createElement("button");
    bot.textContent=text;
    bot.className="pure-button pure-button-primary";
    return bot;
  };
  var boton_activo=function(text){
    /*<button class="btn btn-primary" type="button">Primary button</button>*/
    var bot=document.createElement("button");
    bot.textContent=text;
    bot.className="pure-button pure-button-active";
    return bot;
  };
  var boton_secundario=function(text){
    /*<button class="btn btn-primary" type="button">Primary button</button>*/
    var bot=document.createElement("button");
    bot.textContent=text;
    bot.className="pure-button button-secondary";
    return bot;
  };
  var boton_exito=function(text){
    /*<button class="btn btn-primary" type="button">Primary button</button>*/
    var bot=document.createElement("button");
    bot.textContent=text;
    bot.className="pure-button button-success";
    return bot;
  };
  var boton_error=function(text){
    /*<button class="btn btn-primary" type="button">Primary button</button>*/
    var bot=document.createElement("button");
    bot.textContent=text;
    bot.className="pure-button button-error";
    return bot;
  };
  var boton_alerta=function(text){
    /*<button class="btn btn-primary" type="button">Primary button</button>*/
    var bot=document.createElement("button");
    bot.textContent=text;
    bot.className="pure-button button-warning";
    return bot;
  };
  var boton_xchico=function(boton){
    /*<button class="btn btn-primary" type="button">Primary button</button>*/
    var bot=boton;
    var clase=bot.className;
    bot.className=clase+" button-xsmall";
    return bot;
  };
  var boton_chico=function(boton){
    /*<button class="btn btn-primary" type="button">Primary button</button>*/
    var bot=boton;
    var clase=bot.className;
    bot.className=clase+" button-small";
    return bot;
  };
  var boton_grande=function(boton){
    /*<button class="btn btn-primary" type="button">Primary button</button>*/
    var bot=boton;
    var clase=bot.className;
    bot.className=clase+" button-large";
    return bot;
  };
  var boton_xgrande=function(boton){
    /*<button class="btn btn-primary" type="button">Primary button</button>*/
    var bot=boton;
    var clase=bot.className;
    bot.className=clase+" button-xlarge";
    return bot;
  };





  return{"boton":boton,
         "boton_desactivado":boton_desactivado,
          "boton_primario":boton_primario,
          "boton_activo":boton_activo,
          "boton_secundario":boton_secundario,
          "boton_alerta":boton_alerta,
          "boton_error":boton_error,
          "boton_exito":boton_exito,
          "boton_xchico":boton_xchico,
          "boton_chico":boton_chico,
          "boton_grande":boton_grande,
          "boton_xgrande":boton_xgrande,
        };
})();
