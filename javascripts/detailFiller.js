var path= "../resources/jsons/projectInfos.json";
var jsonObj;
			
/* This method will open the doc in the path and then it will parse it as json*/
function loadDoc() {
	
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      loadJson(this);
    }
  };
  xhttp.open("GET", path, true);
  xhttp.send();
  
  
}

/* This method will use the response text to get the json object */
function loadJson(xml) {
	
	var text= xml.responseText;
	//console.log("text pre parse: "+text);
	
	jsonObj= JSON.parse(text); // jsonstring to test
	
	loadDetailsForPage();
}


function loadDetailsForPage(){
	
	
	var docTitle= document.title;
	
	var spandTitle;
	var iframeVideo;
	var releaseDate;
	var description;
	var externalArea;
	var reference;
	
	var i;
	for(i=0; i<jsonObj.projects.length; i++){
		
		if(jsonObj.projects[i].title==doctitle){  /*If the title is found, then update the page */ 
			
			spandTitle = document.getElementById("dTitle");
			spandTitle.innerHTML = jsonObj.projects[i].title;
			
			iframeVideo=document.getElementById("video");
			iframeVideo.setAttribute("src",jsonObj.projects[i].video);
			
			releaseDate = document.getElementById("releaseDate");
			releaseDate.innerHTML = jsonObj.projects[i].date;
			
			description = document.getElementById("description");
			description.innerHTML = jsonObj.projects[i].description ;
			
			externalArea= document.getElementById("external");
			externalArea.innerHTML= "You can play this game ";
			reference= document.createElement("a");
			reference.setAttribute("href",json.projects[i].externalLink);
			reference.innerHTML="here";
			externalArea.appendChild(reference);
		}
	}
}
loadDoc();