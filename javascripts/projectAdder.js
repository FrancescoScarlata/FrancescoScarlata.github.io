var path= "../resources/jsons/projectInfos.json";
var jsonObj;

/* This method will open the doc in the path and then it will parse it as json*/
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      LoadJson(this);
    }
  };
  xhttp.open("GET", path, true);
  xhttp.send();
}

/* This method will load the text and it will be used to parse it as jsonObj.
	This will also call the for the correct order to show
  */
function LoadJson(xml) {
	
	jsonObj= JSON.parse(xml.responseText);
	alert("projects length: "+jsonObj.projects.length);

	if(document.title=="FS Portfolio" ){
		GetPorfolio();
	
	}
	else{
		console.log(" this is not the general portfoliopage");
	}
  /*
  var table="<tr><th>Artist</th><th>Title</th></tr>";

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
/* This method is called to make the sections inside the portfolio. For now it's just the general porfolio with all the elements in random */

function GetPorfolio(){
	
	console.log("projects: "+jsonObj.projects.length);
	var projectParent= document.getElementsByClassName("projects")[0];
	var i;
	var section;
	var img
	var innerDiv;
	for(i=0; i<jsonObj.projects.length; i++){
		
		section= document.createElement("section");
		section.setAttribute("class","project");
		
		img= document.createElement("img");
		img.setAttribute("class","projectImage");
		img.setAttribute("src", jsonObj.projects[i].linkImage);
		img.setAttribute("alt", jsonObj.projects[i].title);
		section.appendChild(img);
		
		innerDiv= document.createElement("div");
		innerDiv.innerHTML= "<span>"+ jsonObj.projects[i].title +"</span> <br> <span> "+ jsonObj.projects[i].date+"</span>";
		section.appendChild(innerDiv);
		projectParent.appendChild(section);
	}
	
}

loadDoc();