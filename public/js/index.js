document.getElementById("add__note--js");
class Notes{
 
	addNote(){

		let containerText = document.createElement("div");
			containerText.setAttribute("class", "containerText");
			containerText.setAttribute("id", "containerText");
		let textArea = document.createElement("textarea");

			textArea.setAttribute("class", "textarea__note");	 
			textArea.setAttribute("id", "textarea__note--js");	 
			textArea.setAttribute("cols", "38");	 
			textArea.setAttribute("rows", "8");	 
			textArea.setAttribute("placeholder", "Write your note");	 

			document.body.insertAdjacentElement("beforebegin", containerText);

		let buttonAdd = document.createElement("");
			buttonAdd.textContent = "Add note";
			buttonAdd.setAttribute("class", "addNote");
			buttonAdd.setAttribute("id", "addNote--js");
			
			containerText.insertAdjacentElement("beforebegin", textArea)
	}
	removeNotes(){}

}
let buttonSend = document.getElementById("add__note--js");

buttonSend.addEventListener("click", (e)=>{
	let classNotesInstance = new Notes();
		classNotesInstance.addNote();
}, false)

