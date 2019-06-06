document.getElementById("add__note--js");
class Notes{
 
	addNote(){

		let containerText = document.createElement("div");
			containerText.setAttribute("class", "containerText");
			containerText.setAttribute("id", "containerText");
		let textArea = document.createElement("textarea");

			textArea.setAttribute("class", "textarea__note");	 
			textArea.setAttribute("id", "textarea__note--js");	 
			textArea.setAttribute("cols", "39");	 
			textArea.setAttribute("rows", "8");	 
			textArea.setAttribute("placeholder", "Write your note");	 

		document.body.insertAdjacentElement("beforebegin", containerText);
		containerText.insertAdjacentElement("beforebegin", textArea)

		let boxButtons = document.createElement("div");
			boxButtons.setAttribute("class", "box__content")
			boxButtons.setAttribute("id", "box__content--js")
	 
		containerText.appendChild(boxButtons);

		let buttonAdd = document.createElement("button");
			buttonAdd.textContent = "Add";
			buttonAdd.setAttribute("class", "add");
			buttonAdd.setAttribute("id", "add--js");
 

		containerText.appendChild(buttonAdd);
		let textAreaValue = document.getElementById("textarea__note--js");
		

		let buttonCancel = document.createElement("button");
			buttonCancel.textContent = "Cancel";
			buttonCancel.setAttribute("class", "cancel");
			buttonCancel.setAttribute("id", "cancel--js");


		
		buttonCancel.addEventListener("click",(e)=>{
			this.removeBanner(containerText,textArea);
		}, false);

		buttonAdd.addEventListener("click", (e) =>{
			
			if(textAreaValue.value != ""){
				let paragraph = document.createElement("p");
 					paragraph.textContent = textAreaValue.value; 
 					paragraph.setAttribute("class", "paragraph");

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

