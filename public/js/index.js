
class Notes{


 	createMenu(element){
 		this.hiddenButtonFloat()
		var favNotes = document.getElementById("note__favorite--js");
		if(!document.getElementById("menu--js")){
		let menu = document.createElement("div");
			menu.setAttribute("class","menu");
			menu.setAttribute("id","menu--js");
			menu.title = "Menu";
			document.body.insertAdjacentElement("afterbegin", menu);

		let favorite = document.createElement("p");
			favorite.setAttribute("class", "favorite fas fa-star");
			favorite.setAttribute("id", "favorite--js");
			favorite.title = "Favorito";
			menu.insertAdjacentElement("afterbegin", favorite);
			 	
			 favorite.addEventListener("click", (e)=>{
				 this.pushFavorite(favNotes, element, menu);
			 }, false);
				 

		let deleteNote = document.createElement("p");
			deleteNote.setAttribute("class", "delete fas fa-trash-alt");
			deleteNote.setAttribute("id", "deleteNote--js");
			deleteNote.title = "Eliminar";
			menu.appendChild(deleteNote);

			deleteNote.addEventListener("click", (e)=>{
				this.showButtonFloat()
				this.removeNote(element, menu);
			}, false);	


			let edit = document.createElement("p");
				edit.setAttribute("class", "editNote fas fa-edit");
				edit.setAttribute("id", "editNote--js");
				edit.title = "Editar";
				menu.appendChild(edit);
				
			edit.addEventListener("click", (e)=>{

				 this.removeBanner(menu);
				 this.removeEfectToParagraph(element)
				 this.windowEditNote(element);
			}, false);


			let showview = document.createElement("p");
				showview.setAttribute("class", "editNote fas fa-binoculars");
				showview.setAttribute("id", "showView--js");
				showview.title = "Visualizar";
				menu.appendChild(showview);

			showview.addEventListener("click",(e)=>{
				this.removeBanner(menu);
				this.removeEfectToParagraph(element);
				this.showVisualizer(element);
			})

			let cancelNote = document.createElement("p");
				cancelNote.setAttribute("class", "cancelNote fas fa-long-arrow-alt-left size");
				cancelNote.setAttribute("id", "cancelNote--js");
				cancelNote.title = "Cancelar";
				menu.appendChild(cancelNote);
				
			cancelNote.addEventListener("click", (e)=>{
				this.showButtonFloat()
				this.removeBanner(menu);
				this.removeEfectToParagraph(element);
			 	

			}, false);	
		}
	}	
	hiddenButtonFloat(){
		document.getElementById("add__note--js").classList.add("buttonfloat");
		
	}
	showButtonFloat(){
		document.getElementById("add__note--js").classList.remove("buttonfloat");
	}
	showVisualizer(element){
		this.hiddenButtonFloat()

		let menuEdit = document.createElement("div");
			menuEdit.setAttribute("class","menu zoom");
			menuEdit.setAttribute("id","menuEdit--js");
			menuEdit.title = "Edicion de notas";
			document.body.insertAdjacentElement("afterbegin", menuEdit);

		let cancelNote = document.createElement("p");
				cancelNote.setAttribute("class", "cancelNote fas fa-long-arrow-alt-left size");
				cancelNote.setAttribute("id", "cancelNote--js");
				cancelNote.title = "Cancelar";
				menuEdit.insertAdjacentElement("afterbegin",cancelNote);
				
			cancelNote.addEventListener("click", (e)=>{

			 	this.showButtonFloat()
				this.removeBanner(menuEdit);
				this.removeEfectToParagraph(element);

			}, false);


			let visualizerParagraph = document.createElement("p");
 					visualizerParagraph.textContent = element.innerHTML; 
 					visualizerParagraph.setAttribute("class", "visualizer");
 					visualizerParagraph.setAttribute("id", "visualizer--js");

 					menuEdit.appendChild(visualizerParagraph);
	}

	pushFavorite(favNotes, element, menu){
		this.showButtonFloat()
		element.classList.add("efect")
		favNotes.appendChild(element);
		this.removeEfectToParagraph(element);
		this.removeBanner(menu);
	 
		setTimeout(()=>{
		 	element.classList.remove("efect")
	     }, 1000)

	}
	 
	addNote(){

		if(!document.getElementById("containerText") && !document.getElementById("menu--js") && !document.getElementById("menuEdit--js")){
			this.hiddenButtonFloat()
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
			 this.showButtonFloat()
		}, false);

		buttonAdd.addEventListener("click", (e) =>{
			
			if(textAreaValue.value != ""){
				this.showButtonFloat()
				let paragraph = document.createElement("p");
 					paragraph.textContent = textAreaValue.value; 
 					paragraph.setAttribute("class", "paragraph");
 					paragraph.setAttribute("id", "paragraph--js");

 				paragraph.addEventListener("click", (e)=>{
 					if (!document.getElementById("containerText") && !document.getElementById("menu--js")){
 					paragraph.classList.toggle("translate");
 					
 					// validating if does not exist menu
 					if(!document.getElementById("menu--js")){
 						this.createMenu(paragraph);
 						}
 					}
 				}, false)


			document.getElementById("all_note_container--js").appendChild(paragraph);
			}

			this.removeBanner(containerText,textArea);		

		}, false);

		boxButtons.appendChild(buttonAdd)
		boxButtons.appendChild(buttonCancel);
	 }
	}
	removeEfectToParagraph(element){
		element.classList.remove("translate");
		 
	}

 	removeNote(elementToDelete, menu){
		elementToDelete.remove();	
		this.removeBanner(menu);
		 

	}

	removeBanner(place, textA){
		if(place){
			place.remove();
		 
		}
		if(textA){
			textA.remove();
			 
		}
		
	}
	editNote(){

	}
	
	windowEditNote(element){
		let menuEdit = document.createElement("div");
			menuEdit.setAttribute("class","menu");
			menuEdit.setAttribute("id","menuEdit--js");
			menuEdit.title = "Edicion de notas";
			document.body.insertAdjacentElement("afterbegin", menuEdit);

			let textEdit = document.createElement("textarea");
				textEdit.setAttribute("cols", 38)
				textEdit.setAttribute("class", "textEdit textarea__note")
				textEdit.setAttribute("id", "textEdit--js")
				textEdit.setAttribute("rows", 6);
				menuEdit.appendChild(textEdit)
				textEdit.innerHTML = element.innerHTML;

			let addEdit = document.createElement("div");
				addEdit.setAttribute("class", "box__content");
				addEdit.setAttribute("id", "");
				menuEdit.appendChild(addEdit);


			let editAdd = document.createElement("button");
				editAdd.setAttribute("class", "add__note Add--feature");
				editAdd.setAttribute("id", "editAdd--js");
				editAdd.textContent = "Edit"
				addEdit.appendChild(editAdd);

				editAdd.addEventListener("click", (e)=>{

					let vals = textEdit.value;
					element.innerHTML = vals;
					this.removeBanner(menuEdit);
					this.showButtonFloat()
				 
				},false)

			let editCancel = document.createElement("button");
				editCancel.setAttribute("class", "cancel");
				editCancel.setAttribute("id", "editCancel--js");
				editCancel.textContent = "Cancel"
				addEdit.appendChild(editCancel);

				editCancel.addEventListener("click", (e)=>{
					this.removeBanner(menuEdit);
					this.showButtonFloat()
				}, false);
				
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
// let x = document.getElementById("menu--js");
// let y = document.getElementById("containerText");
// if(x){
// 	x.style.overflow = "hidden";
// }
// if(y){
// 	y.style.overflow = "hidden";
// }

let getscrollzero = document.getElementById("title__data--js");

if(getscrollzero){
	getscrollzero.addEventListener("click", (e)=>{
		if( (window.scrollY > 0) == true){
			window.scrollTo(0, 0);
		}
	}, false)
}