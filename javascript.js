
function OpenModal(value)
{
	headerModal = "";
	
	switch (value) {
	  case 1:
		headerModal = "Consulta de Filial"
		break;
	  case 2:
		headerModal = "Consulta de Produto"
		break;
	  case 3:
		headerModal = "Consulta de Preço"
		break;
	  case 4:
		headerModal = "Consulta de Cliente"
		break;
	  case 5:
		headerModal = "Nova Venda"
		break;
	}
					
	document.getElementById("id-modal-title").innerHTML = headerModal;
	$("#myModal").modal('show');				
}

function OpenModalApplications()
{	
	$("#myModalApplications").modal('show');				
}

function AlterColor()
{	
	$("#myModalColor").modal('show');				
}
			
function ChangeColor(e)
{
	e = e || window.event;
	e = e.target || e.srcElement;
	if (e.nodeName === 'BUTTON') {	

		selectedElement = document.getElementById("selectElement").value;
		switch (selectedElement) {
		  case "1":						
			for (var i = 0; i <= 5 ; i++) {
				elementChangeName = "ms" + (i + 1);														
				element = document.getElementById(elementChangeName);
				element.classList.remove(...element.classList);						
				element.classList.add(e.id);							
			}		
			
			elementChangeName = "sidebarCollapse";
			element = document.getElementById(elementChangeName);
			element.classList.remove(...element.classList);						
			element.classList.add(e.id);
			break;
		  
		  case "2":						
			for (var i = 0; i <= 30 ; i++) {
				elementChangeName = "ml" + (i + 1);														
				element = document.getElementById(elementChangeName);
				element.classList.remove(...element.classList);						
				element.classList.add(e.id);							
			}	
			break;
		  case "3":
			elementChangeName = "logoHeader";
			element = document.getElementById(elementChangeName);						
			element.classList.remove(...element.classList);										
			element.classList.add(e.id);						
			break;					  
		  default:
			elementChangeName = "";
		}					
	}
}

function ChangeBackgroundColor(e)
{
	e = e || window.event;
	e = e.target || e.srcElement;
	if (e.nodeName === 'BUTTON') {	

		selectedElement = document.getElementById("selectElement").value;
		switch (selectedElement) {
		  case "1":
			elementChangeName = "store30_navbar";
			element = document.getElementById(elementChangeName);
			element.classList.remove(...element.classList);
			element.classList.add("navbar");
			element.classList.add("navbar-default");
			element.classList.add(e.id);
			break;
		  case "2":
			elementChangeName = "sidebar";
			element = document.getElementById(elementChangeName);						
			element.classList.remove(...element.classList);						
			element.classList.add(e.id);
			break;
		  case "3":
			elementChangeName = "logo";
			element = document.getElementById(elementChangeName);						
			element.classList.remove(...element.classList);
			element.classList.add("sidebar-header");						
			element.classList.add(e.id);						
			break;		
		  case "4":
			elementChangeName = "background";
			element = document.getElementById(elementChangeName);						
			element.classList.remove(...element.classList);									
			element.classList.add(e.id);						
			break;	

			
		  default:
			elementChangeName = "";
		}					
	}
}

function ResetColor()
{
	document.getElementById("bg-default").click();
	document.getElementById("color-default").click();							
}