var path= "../resources/jsons/projectInfos.json";

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		var res= xhttp.responseText;
		alert(res);
      myFunction(this);
    }
  };
  xhttp.open("GET", path, true);
  xhttp.send();
}


function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Artist</th><th>Title</th></tr>";
  /*
  var x = xmlDoc.getElementsByTagName("CD");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
  */
}


function GetGeneralPorfolio(){
	
	console.log("projects: "+jsonObj.projects.length);
	
}

loadDoc();