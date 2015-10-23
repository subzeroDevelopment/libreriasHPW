var Formulario=(function(){

  var formulario=function(){
    var fo=document.createElement("form");
    var fs=document.createElement("fieldset");
    fo.appendChild(fs);
    fo.className="pure-form";
    return fo;
  };
  var legend=function(texto) {
    var l=document.createElement("legend");
    l.textContent=texto;
    return l;
  };
  var formulario_stack=function(){
    var fo=document.createElement("form");
    fo.className="pure-form pure-form-stacked";
    return fo;
  };
  var formulario_alineado=function(){
    var fo=document.createElement("form");
    fo.className="pure-form pure-form-aligned";
    return fo;
  };
  var input_email=function(id){
      var inp=document.createElement("input");
      inp.type="email";
      inp.placeholder="Email";
      if(id!=undefined){
        inp.id=id;
      }
      return inp;
  };
  var input_password=function(id){
      var inp=document.createElement("input");
      inp.type="password";
      inp.placeholder="Password";
      if(id!=undefined){
        inp.id=id;
      }
      return inp;
    };
    var checkbox=function(id,label){
      var lab=document.createElement("label");
      lab.for=id;
      var check=document.createElement("input");
      check.id=id;
      check.type="checkbox";
      lab.textContent="Hola mundo";
      lab.appendChild(check);
      return lab;
    }
    var select=function(id,arre){
      var sel=document.createElement("select");
      sel.id=id;
      for (var i = 0; i < arre.length; i++) {
        var op=document.createElement("option");
          op.textContent=arre[i];
          sel.appendChild(op);
      }
      return sel;
    };
    var label=function(lab,id){
      var la=document.createElement("label");
      la.setAttribute("for",id);
      la.textContent=lab;
      return la;
    };


  return{"input_email":input_email,
          "formulario":formulario,
          "formulario_stack":formulario_stack,
          "formulario_alineado":formulario_alineado,
        "input_password":input_password,
      "legend":legend,
          "checkbox":checkbox,
          "select":select,
        "label":label};

})();
