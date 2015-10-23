var Primer=(function(){

  var Botones=(function(){
    var nuevo=function(text){
      var boton=document.createElement("button");
      if(text!=undefined){
        boton.textContent=text;
      }
      boton.className="btn";
       boton.set_text=function(text){
        boton.textContent=text;
        return boton;
      };
      boton.primary=function(){
        boton.className="btn btn-primary";
        return boton;
      };
      boton.pequeño=function(){
        var cl=boton.className;
        boton.className=cl+" btn-sm";
        return boton;
      };
      boton.peligro=function() {
        boton.className="btn btn-danger";
        return boton;
      };
      boton.outline=function(){
        boton.className="btn btn-outline";
        return boton;
      };
      boton.desactivar=function(){
        boton.disabled=!boton.disabled;
        return boton;
      };
      boton.bloque=function(){
        boton.className="btn btn-block";
        return boton;
      };
      boton.set_click=function(f){
        boton.addEventListener("click",f);
        return boton;
      };
      return boton;
    };
    return{"nuevo":nuevo};
  })();

  var Formulario=(function(){
    var label=function(){
      var la=document.createElement("label");

      la.set_for=function(id){
        la.setAttribute("for",id);
        return la;
      }
      la.set_text=function(text){
        la.textContent=text;
        return la;
      }
      return la;
    };
    var input=function(){
      var inp=document.createElement("input");
      inp.set_id=function(id){
        inp.setAttribute("id",id);
        return inp;
      }
      inp.set_type=function(tipo){
        inp.setAttribute("type",tipo);
        return inp;
      };
      inp.set_placeholder=function(place){
        inp.placeholder=place;
        return inp;
      }
      inp.add=function(obj){
        inp.appendChild(obj);
        return inp;
      }
      return inp;
    };
    var checkbox=function(){
      var di=document.createElement("div");
      di.className="form-checkbox";
      di.nuevo=function(text){
        var inp=document.createElement("input");
        inp.setAttribute("type","checkbox");
        var l=document.createElement("label");
        l.appendChild(inp);
        if(text!=undefined){
          var t=document.createTextNode(" "+text);
          l.appendChild(t);
        }
        di.appendChild(l);
        return di;
      }
      di.set_id=function(id){
        di.setAttribute("id",id);
        return di;
      }
      return di;

    };
    var radio=function(){
      var di=document.createElement("div");
      var inp;
      di.className="form-radio";
      di.nuevo=function(text){
        inp=document.createElement("input");
        inp.setAttribute("type","radio");
        var l=document.createElement("label");
        l.appendChild(inp);
        if(text!=undefined){
          var t=document.createTextNode(" "+text);
          l.appendChild(t);
        }
        di.appendChild(l);
        return di;
      }
      di.set_id=function(id){
        inp.setAttribute("id",id);
        return inp;
      }
      di.set_group=function(grupo){
        inp.setAttribute("name",grupo);
        return inp;
      }
      di.set_contrast=function(){
        var t=di.className;
        di.className=t+" input-contrast";
        return di;
      }
      return di;
    };

    var select=function(){
      var sel=document.createElement("select");
      sel.className="select";
      sel.set_contenido=function(arre){
        for (var i = 0; i < arre.length; i++) {
          var op=document.createElement("option");
          op.textContent=arre[i];
          sel.appendChild(op);
        }
        return sel;
      }
      sel.add=function(obj){
        sel.appendChild(obj);
        return sel;
      };
      sel.set_id=function(id){
        sel.setAttribute("id",id);
        return sel;
      }
      return sel;
    };
    var option=function(){
      var opt=document.createElement("option");
      opt.set_text=function(texto){
          opt.textContent=texto;
          return opt;
      };
      return opt;
    }
    return{"label":label,
          "input":input,
          "checkbox":checkbox,
          "radio":radio,
          "option":option,
          "select":select}

  })();
  var Layout=(function() {
    var container=function(){
      var cont=document.createElement("div");
      cont.className="container";
      cont.set_id=function(id){
        cont.setAttribute("id",id);
        return cont;
      };
      cont.add=function(obj){
        cont.appendChild(obj);
      }
      cont.pequeño=function(){
        cont.className="container one-half";
        return cont;
      }
      return cont;
    };
    var fila=function(){
      var fil=document.createElement("div");
      fil.className="columns";
      fil.set_id=function(id){
        fil.setAttribute("id",id);
        return fil;
      };
      fil.add=function(obj){
        fil.appendChild(obj);
      }
      return fil;
    };
    var celda=function(){
      var cel=document.createElement("div");
      cel.centrar=function(){
        var cla=cel.className;
        cel.className=cla+" "+"centered";
        return cel;
      }
      cel.un_quinto=function(){
        cel.className="one-fifth column";
        return cel;
      };
      cel.cuatro_quintos=function(){
        cel.className="four-fifth column";
        return cel;
      };
      cel.un_cuarto=function(){
        cel.className="one-fourth column";
        return cel;
      };
      cel.tres_cuartos=function(){
        cel.className="three-fourths column";
        return cel;
      };
      cel.un_tercio=function(){
        cel.className="one-third column";
        return cel;
      };
      cel.dos_tercios=function(){
        cel.className="two-third column";
        return cel;
      }
      cel.un_medio=function(){
        cel.className="two-third column";
        return cel;
      }
      cel.add=function(obj){
        cel.appendChild(obj);
        return cel;
      };
    return cel;
    };
    return{"container":container,
          "fila":fila,
          "celda":celda}

  })();

  var Nav=(function(){
    var menu=function(arre){
      var na=document.createElement("nav");
      na.className="menu";
      var ap=document.createElement("a");
      ap.className="menu-item selected";
      ap.textContent=arre[0];
      na.appendChild(ap);
      for (var i = 1; i < arre.length; i++) {
        var a=document.createElement("a");
        a.className="menu-item";
        a.textContent=arre[i];
        na.appendChild(a);
      }
      return na;

    }
    return{"menu":menu}
  })();

  var Icono=(function(){
    var nuevo=function(clase){
      var icono=document.createElement("i");
      icono.set_class=function(clas){
        icono.className=clas;
        return icono
      };
      if(clase!=undefined){
        icono.className=clase;
      }
      return icono;
    }
    return{"nuevo":nuevo}
  })();





  return{"Botones":Botones,
          "Formulario":Formulario,
          "Layout":Layout,
          "Icono":Icono,
        "Nav":Nav};
})();
