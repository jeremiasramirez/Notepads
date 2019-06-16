document.getElementById("add__note--js");
class Notes{

 	createMenu(element){
		let favNotes = document.getElementById("note__favorite--js");


		let menu = document.createElement("div");
			menu.setAttribute("class","menu");
			menu.setAttribute("id","menu--js");
			menu.title = "Menu";
			document.body.insertAdjacentElement("afterbegin", menu);

		let favorite = document.createElement("p");
			favorite.setAttribute("class", "favorite fas fa-star");
			favorite.setAttribute("id", "favorite--js");
			favorite.title = "Favorito";
			favorite.textContent = "F";
			menu.insertAdjacentElement("afterbegin", favorite);


		let deleteNote = document.createElement("p");
			deleteNote.setAttribute("class", "delete fas fa-trash-alt");
			deleteNote.setAttribute("id", "deleteNote--js");
			deleteNote.title = "Eliminar";
			deleteNote.textContent = "D";
			menu.appendChild(deleteNote);

		let cancelNote = document.createElement("p");
			cancelNote.setAttribute("class", "cancelNote fas fa-ban");
			cancelNote.setAttribute("id", "cancelNote--js");
			cancelNote.title = "Cancelar";
			cancelNote.textContent = "X";
			menu.appendChild(cancelNote);
				



		
			 

	}	

	addNote(){
		
		 
		document.getElementsByTagName("html")[0].style.overflow = "hidden";
		let containerText = document.createElement("div");
			containerText.setAttribute("class", "containerText");
			containerText.setAttribute("id", "containerText");
		let textArea = document.createElement("textarea");

			textArea.setAttribute("class", "textarea__note");	 
			textArea.setAttribute("id", "textarea__note--js");	 
			textArea.setAttribute("cols", "3");	 
			textArea.setAttribute("rows", "5");	 
			textArea.setAttribute("placeholder", "Write your note");	 

		document.body.insertAdjacentElement("beforebegin", containerText);
		containerText.insertAdjacentElement("beforebegin", textArea)

		let boxButtons = document.createElement("div");
			boxButtons.setAttribute("class", "box__content")
			boxButtons.setAttribute("id", "box__content--js")
	 
		containerText.appendChild(boxButtons);

		let buttonAdd = document.createElement("button");
			buttonAdd.textContent = "Add";
			buttonAdd.title ="Agregar nota"
			buttonAdd.setAttribute("class", "add");
			buttonAdd.setAttribute("id", "add--js");
 

		containerText.appendChild(buttonAdd);
		let textAreaValue = document.getElementById("textarea__note--js");
		

		let buttonCancel = document.createElement("button");
			buttonCancel.textContent = "Cancel";
			buttonCancel.setAttribute("class", "cancel");
			buttonCancel.setAttribute("id", "cancel--js");
			buttonCancel.title = "Cancelar";


		
		buttonCancel.addEventListener("click",(e)=>{
			this.removeBanner(containerText,textArea);
		}, false);

		buttonAdd.addEventListener("click", (e) =>{
			
			if(textAreaValue.value != ""){
				let paragraph = document.createElement("p");
 					paragraph.textContent = textAreaValue.value; 
 					paragraph.setAttribute("class", "paragraph");
 					paragraph.setAttribute("id", "paragraph--js");

 				paragraph.addEventListener("click", (e)=>{
 					paragraph.classList.toggle("translate");
 					
 					// validating if does not exist menu
 					if(!document.getElementById("menu--js")){
 						this.createMenu(paragraph);
 					}
 				}, false)

			document.getElementById("all_note_container--js").appendChild(paragraph);
			}

			this.removeBanner(containerText,textArea);			
		}, false);

		boxButtons.appendChild(buttonAdd)
		boxButtons.appendChild(buttonCancel);

	}
 
	removeBanner(place, textA){
		place.remove();
		textA.remove();
	}
	
	 

}








let buttonSend = document.getElementById("add__note--js");

let all_note = document.getElementById("all_note_container--js");

let iterator = 1;
let classNotesInstance = new Notes();

buttonSend.addEventListener("click", (e)=>{
	if(iterator ==1){
		classNotesInstance.addNote();
	}
}, false)



	
