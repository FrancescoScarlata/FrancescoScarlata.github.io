var path= "../resources/jsons/projectInfos.json";
/* testing  */

var jsonObj;

/* This method will open the doc in the path and then it will parse it as json*/
function loadDoc(portfolioType) {
	console.log("i've been called with: "+portfolioType);
	
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      loadJson(this,portfolioType);
    }
  };
  xhttp.open("GET", path, true);
  xhttp.send();
  
  
  //loadJson(this,portfolioType);
}

/* This method will load the text and it will be used to parse it as jsonObj.
	This will also call the for the correct order to show
  */
function loadJson(xml,portfolioType) {
	
	var text= xml.responseText;
	//console.log("text pre parse: "+text);
	
	jsonObj= JSON.parse(text); // jsonstring to test
	
	getPorfolio(portfolioType);
}



/* Method called to get if the project type is part of the porfolio elements.*/
function isTypeContained(project,portfolio){
	var j;
	console.log("portfolio length: "+portfolio.length);
	for(j=0; j<portfolio.length; j++){
		console.log("compare: "+project+" with: "+portfolio[j]);
		if(project==portfolio[j])
			return true;
	}
	return false;
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
		
		if(portfolioType[0]=="general" || isTypeContained(jsonObj.projects[i].projectType, portfolioType)) // to update this line. 
		{
			section= document.createElement("section");
			section.setAttribute("class","project");
			
			img= document.createElement("img");
			img.setAttribute("class","projectImage");
			img.setAttribute("src", jsonObj.projects[i].linkImage);
			img.setAttribute("alt", jsonObj.projects[i].title);
			
			/* first let's check for the detail page */
			if(jsonObj.projects[i].detailLink.length>1){
				extlink=document.createElement("a");
				extlink.setAttribute("href", jsonObj.projects[i].detailLink);
				extlink.setAttribute("target", "_blank");
				extlink.appendChild(img);
				section.appendChild(extlink);
			}
			else{ /* if there is not a detail page, get the external link */
				if(jsonObj.projects[i].externalLink.length>1){
					extlink=document.createElement("a");
					extlink.setAttribute("href", jsonObj.projects[i].externalLink);
					extlink.setAttribute("target", "_blank");
					extlink.appendChild(img);
					section.appendChild(extlink);
				}
				else{ /* if no link is there, just add the image w/o a link */
					section.appendChild(img);
				}
				
			}

			innerDiv= document.createElement("div");
			innerDiv.setAttribute("class", "infoDiv");
			spanTitle= document.createElement("span");
			spanTitle.setAttribute("class","projectTitle");
			spanTitle.innerHTML=jsonObj.projects[i].title;
			
			spanDate= document.createElement("span");
			spanDate.setAttribute("class","projectDate");
			spanDate.innerHTML=jsonObj.projects[i].date;
					
			innerDiv.appendChild(spanTitle);
			innerDiv.appendChild(document.createElement("br"));
			innerDiv.appendChild(spanDate);
			
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