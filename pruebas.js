var bt=Primer.Botones.nuevo("hola");
document.body.appendChild(bt);

var b2=Primer.Botones.nuevo("h");
b2.primary();

document.body.appendChild(b2);
b2.set_text("modificacion");

var b3=Primer.Botones.nuevo("Gigante");
b3.bloque();


document.body.appendChild(b3);


var lab=Primer.Formulario.label();
lab.set_text("Hola mundo");
lab.set_for("uno");
var inp=Primer.Formulario.input();
inp.set_id("uno");
inp.set_type("password");
inp.set_placeholder("Subzero");
document.body.appendChild(lab);
document.body.appendChild(inp);

var che=Primer.Formulario.checkbox();
che.nuevo("hola");
che.set_id("check1");
var che1=Primer.Formulario.checkbox();
che1.nuevo("hola2");
che1.set_id("check2");
document.body.appendChild(che);
document.body.appendChild(che1);

var r1=Primer.Formulario.radio();
var r2=Primer.Formulario.radio();
document.body.appendChild(r1);
document.body.appendChild(r2);
var inp2=Primer.Formulario.input("uno","hola mundo","text");
document.body.appendChild(inp2);

var sel=Primer.Formulario.select();
sel.set_contenido(["hola","ahora","input"]);
document.body.appendChild(sel);
var sel2=Primer.Formulario.select();
var opt1=Primer.Formulario.option();
opt1.set_text("hola");
var opt2=Primer.Formulario.option();
opt2.set_text("adios");
sel2.add(opt1);
sel2.add(opt2);
document.body.appendChild(sel2);


var me=Primer.Nav.menu(["Principal","Contacts","SkyBlue","navy","Test"]);
document.body.appendChild(me);

var bt=Menu.nuevo("hola");
document.body.appendChild(bt);
