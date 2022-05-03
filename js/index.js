const today= new Date() /* footer name and year*/ 
const thisYear= today.getFullYear()
const footer= document.querySelector("footer")
const copyright= document.createElement("p")
copyright.innerHTML = "Onella Powell " + thisYear
footer.appendChild(copyright)

console.log(footer);

const skills = ["HTML", "CSS", "JavaScript","Visual Studios","Travel Consultant"] /* skills */
const skillsSection = document.querySelector("#skills")

const skillsList = skillsSection.querySelector("ul")
    for ( let i = 0; i < skills.length; i++) {
       const skill = document.createElement("li")
       skill.innerHTML = skills[i]
       skillsList.appendChild(skill)
    }
 
    const messageForm= document.getElementsByTagName("form")[0]; /* form */
    console.log(messageForm);

messageForm.addEventListener("submit", (event) => { /* submitting form */
    event.preventDefault();
  const name = event.target.name.value;
  const email= event.target.email.value;
  const message = event.target.message.value;

  console.log(event.target.name.value,event.target.email.value,event.target.message.value);

  const messageSection= document.querySelector("#messages"); /* list of message dispaly */
  const messageList= messageSection.querySelector("ul");
  const newMessage= document.createElement("li"); 

  console.log(email);
  console.log(name);

  newMessage.innerHTML= `<a href = mailto:${email}>${name}</a>wrote:<span>${message}</span>` /*message dispaly */

  const removeButton= document.createElement("button");  /* remove button */
  removeButton.innerText= "remove";
  removeButton.addEventListener("click", (event) => {
      const entry= event.target.parentNode;
      entry.remove();
  });

  const editButton= document.createElement("button"); /* edit button */
  editButton.textContent= "edit"; 
  editButton.addEventListener("click", (event) => {
    const entry= event.target.parentNode;
    const span = entry.querySelector("span");
        if (editButton.textContent === "edit") {
    console.log(entry);
    const editText = document.createElement("input"); /* message input to edit */
    console.log(editText);
        editText.type="text";
        editText.value = span.textContent;
        editButton.textContent= "save"; 
        entry.appendChild(editText);
        editButton.textContent = "save"; 
        } else if (editButton.textContent === "save"){ /* save edit */
            const input = entry.querySelector("input");
            console.log(input);
            span.textContent= input.value;
            entry.removeChild(input);
            editButton.textContent= "edit";
    }    
  });
  newMessage.appendChild(editButton);
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messageForm.reset();
});


