var Ventanas=(function(){
  var nuevo_empleado=function(){
    var frame=Primer.Layout.container();
    var fila1=Primer.Layout.fila();
    var fila2=Primer.Layout.fila();
    var fila3=Primer.Layout.fila();
    var label_nombre=Primer.Layout.celda();
    var input_nombre=Primer.Formulario.input();
    input_nombre.set_placeholder("Nombre");
    var cel_input_nombre=Primer.Layout.celda();
    cel_input_nombre.add(input_nombre);
    cel_input_nombre.un_quinto();

    input_nombre.set_type("Text");
    label_nombre.un_quinto();
    var label_name=Primer.Formulario.label();
    label_name.set_text("Nombre:");
    label_nombre.add(label_name);
    var ol=document.createElement("ol");
    ol.setAttribute("id","lista");



    function evento_boton(){

      var nombre=input_nombre.value;
      var apellidos=input_apellidos.value;
      var li=document.createElement("li");
      function eli(){
        li.parentNode.removeChild(li);
      };

      var bt=Primer.Botones.nuevo("eliminar");
      bt.peligro();
      bt.pequeño();
      bt.set_click(eli);
      li.textContent=nombre+" "+apellidos+"   ";

      li.appendChild(bt);
      ol.appendChild(li);
    };

    var label_apellidos=Primer.Formulario.label();
    label_apellidos.set_text("Apellidos");
    var cel_label_apellidos=Primer.Layout.celda();
    cel_label_apellidos.un_quinto();
    cel_label_apellidos.add(label_apellidos);
    var input_apellidos=Primer.Formulario.input();
    input_apellidos.set_type("text");
    input_apellidos.set_placeholder("Apellidos");
    var cel_input_apellidos=Primer.Layout.celda();
    cel_input_apellidos.un_quinto();
    cel_input_apellidos.add(input_apellidos);
    var celda_vacia=Primer.Layout.celda();
    celda_vacia.un_quinto();
    var label_empty=Primer.Icono.nuevo("fa fa-database fa-3x");
    celda_vacia.add(label_empty);
    var boton=Primer.Botones.nuevo();
    boton.primary();
    boton.set_text("Aceptar");
    boton.set_click(evento_boton);
    var cel_boton=Primer.Layout.celda();
    cel_boton.un_quinto();
    cel_boton.add(boton);
    var fila4=Primer.Layout.fila();



    fila4.add(ol);
    fila1.add(label_nombre);
    fila1.add(cel_input_nombre);
    fila2.add(cel_label_apellidos);
    fila2.add(cel_input_apellidos);
    fila3.add(celda_vacia);
    fila3.add(cel_boton);

    frame.add(fila1);
    frame.add(fila2);
    frame.add(fila3);
    frame.add(fila4);
    return frame;
  };
  var registro_de_usuario=function(){
      var frame=Primer.Layout.container();
      frame.pequeño();
      var fila1=Primer.Layout.fila();
      var fila2=Primer.Layout.fila();
      var celda1=Primer.Layout.celda();
      celda1.un_tercio();
      var celda2=Primer.Layout.celda();
      celda2.un_tercio();
      var celda3=Primer.Layout.celda();
      celda3.un_tercio();
      var celda4=Primer.Layout.celda()
      celda4.un_medio();
      celda4.centrar();

      var label_nombre=Primer.Formulario.label();
      label_nombre.set_text("Nombre:");
      celda1.add(label_nombre);
      var input_nombre=Primer.Formulario.input();
      input_nombre.set_placeholder("Nombre");
      input_nombre.set_type("text");
      celda1.add(input_nombre);

      var label_mail=Primer.Formulario.label();
      label_mail.set_text("E-mail:");
      celda2.add(label_mail);
      var input_mail=Primer.Formulario.input();
      input_mail.set_placeholder("E-mail");
      input_mail.set_type("email");
      celda2.add(input_mail);

      var check=Primer.Formulario.checkbox();
      check.nuevo("Recuerdame");
      celda3.add(check);
      var radio1=Primer.Formulario.radio();
      radio1.nuevo("Premium");
      radio1.set_group("radios");
      celda3.add(radio1);
      var radio2=Primer.Formulario.radio();
      radio2.nuevo("Free");
      radio2.set_group("radios");
      celda3.add(radio2);

      var btn=Primer.Botones.nuevo("Entrar");
      btn.primary();
      celda4.add(btn);

      fila1.add(celda1);
      fila1.add(celda2);
      fila1.add(celda3);
      fila2.add(celda4);
      frame.add(fila1);
      frame.add(fila2);
      return frame
  };
  return{"nuevo_empleado":nuevo_empleado,
          "registro_de_usuario":registro_de_usuario};
})();
