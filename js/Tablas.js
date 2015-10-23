var Tablas=(function(){
  var tabla=function(obj){
    var tab=document.createElement("table");
    tab.className="pure-table";
    var thead=document.createElement("thead");
    tab.appendChild(thead);
    var trhead=document.createElement("tr");
    thead.appendChild(trhead);
    var tbody=document.createElement("tbody");
    tab.appendChild(tbody);
    for(var i=0;i<obj["head"].length;i++){
      var th=document.createElement("th");
      trhead.appendChild(th);
      th.textContent=obj["head"][i];
    }
    for(var key in obj["body"]){
      var arre=obj["body"][key]
      var tr=document.createElement("tr");
      tbody.appendChild(tr);
      for (var i = 0; i < obj["head"].length; i++) {
        var td=document.createElement("td");
        tr.appendChild(td);
        td.textContent=arre[i];
      }
    }
    return tab;
  };

  var tabla_con_bordes=function(obj){
    var tab=tabla(obj);
    tab.className="pure-table pure-table-bordered";
    return tab;
  }
  var tabla_lineas_horizontales=function(obj){
    var tab=tabla(obj);
    tab.className="pure-table pure-table-horizontal";
    return tab;
  };
  var tabla_zebra=function(obj){
    var tab=tabla(obj);
    tab.className="pure-table pure-table-striped";
    return tab;
  }
  return{"tabla":tabla,
          "tabla_con_bordes":tabla_con_bordes,
        "tabla_lineas_horizontales":tabla_lineas_horizontales,
      "tabla_zebra":tabla_zebra};
})();
