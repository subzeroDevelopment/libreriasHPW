var b=Botones.boton_desactivado("hola");
document.body.appendChild(b);
b=Botones.boton("hola");
document.body.appendChild(b);
b=Botones.boton_primario("hola");
document.body.appendChild(b);
b=Botones.boton_activo("hola");
document.body.appendChild(b);
b=Botones.boton_secundario("hola");
document.body.appendChild(b);
b=Botones.boton_exito("hola");
document.body.appendChild(b);
b=Botones.boton_alerta("hola");
document.body.appendChild(b);
b=Botones.boton_error("hola");
document.body.appendChild(b);
b=Botones.boton_bloque("hola");
document.body.appendChild(b);

var c=Botones.boton_xchico(Botones.boton_exito("hola"));
document.body.appendChild(c);
c=Botones.boton_chico(Botones.boton_exito("hola"));
document.body.appendChild(c);
c=Botones.boton_grande(Botones.boton_exito("hola"));
document.body.appendChild(c);
c=Botones.boton_xgrande(Botones.boton_exito("hola"));
document.body.appendChild(c);

var t=Tablas.tabla({"head":["hola",56,"holis"],"body":{"un":["hola",2,3],"do":[45,34,"adios"]}});
document.body.appendChild(t);
t=Tablas.tabla_con_bordes({"head":["hola",56,"holis"],"body":{"un":["hola",2,3],"do":[45,34,"adios"]}});
document.body.appendChild(t);
t=Tablas.tabla_lineas_horizontales({"head":["hola",56,"holis"],"body":{"un":["hola",2,3],"do":[45,34,"adios"]}});
document.body.appendChild(t);
t=Tablas.tabla_zebra({"head":["hola",56,"holis"],"body":{"un":["hola",2,3],"do":[45,34,"adios"],"3":[223,23,45]}});
document.body.appendChild(t);

var i=Formulario.input_email();
var f=Formulario.formulario();
var p=Formulario.input_password();
var fie=document.createElement("fieldset");
fie.appendChild(p);
fie.appendChild(i);
f.appendChild(fie);
document.body.appendChild(f);

var leg=Formulario.legend("Hola mundo");
var fs=Formulario.formulario_stack();
var fss=document.createElement("fieldset");
var is=Formulario.input_email();
var ps=Formulario.input_password();
var che=Formulario.checkbox("hola","Recuedame");
var l=Formulario.label("Hola","h");
var se=Formulario.select("h",["f","fm","her"]);
fss.appendChild(leg);
fss.appendChild(ps);
fss.appendChild(is);
fss.appendChild(che);
fss.appendChild(l);
fss.appendChild(se);
fs.appendChild(fss);
document.body.appendChild(fs);

var i=Formulario.input_email();
var f=Formulario.formulario_alineado();
var p=Formulario.input_password();
var fie=document.createElement("fieldset");
fie.appendChild(p);
fie.appendChild(i);
f.appendChild(fie);
document.body.appendChild(f);
