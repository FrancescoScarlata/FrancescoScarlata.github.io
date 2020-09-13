var path= "../resources/jsons/projectInfos.json";
/* testing  */

var jsonString=	'{"projects" : ['+

	'{ "title": "Robodoom", "date": "July 2020", "linkImage": "resources/images/robodoom01.png", '+
	'"description": "This game was made during the ...", "externalLink": "https://reaperscarl.itch.io/robo-doom" , "projectType" : "games",'+ '"projectPriority": "low", "video":"" },'+

	'{ "title": "Diandao", "date": "July 2020", "linkImage": "resources/images/diandao01.png", '+
	'"description": "This game was made during the ...", "externalLink": "https://polimi-game-collective.itch.io/diandao" ,"projectType" : "games", '+
	'"projectPriority": "high", "video":"" },'+

	'{ "title": "Uno-Java", "date": "July 2020", "linkImage": "resources/images/robodoom01.png",'+
	'"description": "This game was made during the ...", "externalLink": " " ,"projectType" : "programs",'+
	'"projectPriority": "high", "video":"" }'+
']}';


var jsonObj;

/* This method will open the doc in the path and then it will parse it as json*/
function loadDoc(portfolioType) {
	/*
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      LoadJson(this);
    }
  };
  xhttp.open("GET", path, true);
  xhttp.send();
  */
  alert("i've been called with: "+portfolioType);
  loadJson(this,portfolioType);
}

/* This method will load the text and it will be used to parse it as jsonObj.
	This will also call the for the correct order to show
  */
function loadJson(xml,portfolioType) {
	
	/*var text= xml.responseText;
	alert("text pre parse: "+text);*/
	
	jsonObj= JSON.parse(jsonString);
	if(document.title=="FS Portfolio" ){
		getPorfolio(portfolioType);
	
	}
	else{
		console.log(" this is not the general portfoliopage");
	}
}


/* This method is called to make the sections inside the portfolio. For now it's just the general porfolio with all the elements in random */

function getPorfolio(portfolioType){	
	console.log("projects: "+jsonObj.projects.length);
	var highProjParent= document.getElementById("highProj");
	var lowProjParent= document.getElementById("lowProj");
	
	var section;
	var extlink;
	var img
	var innerDiv;
	var spanTitle;
	var spanDate;
	var spanType;
	
	var i;
	for(i=0; i<jsonObj.projects.length; i++){
		
		if(portfolioType=="general" || jsonObj.projects[i].projectType==portfolioType)
		{
			section= document.createElement("section");
			section.setAttribute("class","project");
			
			img= document.createElement("img");
			img.setAttribute("class","projectImage");
			img.setAttribute("src", jsonObj.projects[i].linkImage);
			img.setAttribute("alt", jsonObj.projects[i].title);
			
			if(jsonObj.projects[i].externalLink.length>1){
				extlink=document.createElement("a");
				extlink.setAttribute("href", jsonObj.projects[i].externalLink);
				extlink.setAttribute("target", "_blank");
				extlink.appendChild(img);
				section.appendChild(extlink);
			}
			else{
				
				section.appendChild(img);
			}

			innerDiv= document.createElement("div");
			innerDiv.setAttribute("class", "infoDiv");
			spanTitle= document.createElement("span");
			spanTitle.setAttribute("class","projectTitle");
			spanTitle.innerHTML=jsonObj.projects[i].title;
			
			spanDate= document.createElement("span");
			spanDate.setAttribute("class","projectDate");
			spanDate.innerHTML=jsonObj.projects[i].date;
			
			spanType= document.createElement("span");
			spanType.setAttribute("class","projectType");
			spanType.innerHTML=jsonObj.projects[i].projectType;
			
			innerDiv.appendChild(spanTitle);
			innerDiv.appendChild(document.createElement("br"));
			innerDiv.appendChild(spanDate);
			innerDiv.appendChild(document.createElement("br"));
			innerDiv.appendChild(spanType);
			
			section.appendChild(innerDiv);
			if(jsonObj.projects[i].projectPriority=="high"){
				highProjParent.appendChild(section);
			}
			else{
				lowProjParent.appendChild(section);
			}	
		}
		
	}	
}

export { loadDoc };