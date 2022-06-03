/* Footer name and year*/ 
const currentYear= new Date() 
const thisYear= currentYear.getFullYear()
const footer= document.querySelector("footer")
const copyright= document.createElement("p")
copyright.innerHTML = "&copy;"+ thisYear + "- Onella Powell " 
footer.appendChild(copyright)

console.log(footer);

/* Skills */
const skills = ["HTML", "CSS", "JavaScript","Visual Studios","Travel Consultant"] 
const skillsSection = document.querySelector("#skills")

const skillsList = skillsSection.querySelector("ul")
    for ( let i = 0; i < skills.length; i++) {
       const skill = document.createElement("li")
       skill.innerHTML = skills[i]
       skillsList.appendChild(skill)
    }
 
    /* Form */
    const messageForm= document.getElementsByTagName("form")[0]; 
    console.log(messageForm);

    /* Submitting Form */
messageForm.addEventListener("submit", (event) => { 
    event.preventDefault();
  const name = event.target.name.value;
  const email= event.target.email.value;
  const message = event.target.message.value;

  console.log(event.target.name.value,event.target.email.value,event.target.message.value);

  /* List of message dispaly */
  const messageSection= document.querySelector("#messages"); 
  const messageList= messageSection.querySelector("ul");
  const newMessage= document.createElement("li"); 

  console.log(email);
  console.log(name);

  /* Message dispaly */
  newMessage.innerHTML= `<a href = mailto:${email}>${name}</a> wrote:<span>${message}</span>` 

  /* Remove button */
  const removeButton= document.createElement("button");  
  removeButton.innerText= "remove";
  removeButton.addEventListener("click", (event) => {
      const entry= event.target.parentNode;
      entry.remove();
  });

  /* Edit Button */
  const editButton= document.createElement("button"); 
  editButton.textContent= "edit"; 
  editButton.addEventListener("click", (event) => {
    const entry= event.target.parentNode;
    const span = entry.querySelector("span");
        if (editButton.textContent === "edit") {
    console.log(entry);

    /* Message input to edit */
    const editText = document.createElement("input"); 
    console.log(editText);
        editText.type="text";
        editText.value = span.textContent;
        editButton.textContent= "save"; 
        entry.appendChild(editText);
        editButton.textContent = "save"; 

        /* Save edit */
        } else if (editButton.textContent === "save"){ 
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

/* Dark & Light Mode */
function toggleDarkMode() {
    var bodyElement = document.getElementsByTagName("body")
    var darkModeBtnElement = document.getElementById("darkModeButton")
    var textElement = document.getElementById("text")
    console.log(darkModeBtnElement);
    console.log(bodyElement);
    console.log(textElement);

    // if it's in dark mode, change it to light mode
    // what does dark mode look like here?
    // dark mode looks like a black background and the button will say Change to Light Mode
    if (textElement.style.backgroundColor == "black") {
        console.log("switch to darkmode");
        textElement.style.backgroundColor = "#e5f2fc"
        darkModeBtnElement.innerHTML="Change to Dark Mode"
        for (var i = 0; i<textElement.length; i++) {
        }

   // if it's in light mode, change it to dark mode
    // what does light mode look like here?
    // light mode looks like a tan background and the button will say Change to Dark Mode
    } else {
        console.log("switch to light mode");
        textElement.style.backgroundColor = "black"
        darkModeBtnElement.innerHTML="Change to Light Mode"
        for (var i = 0; i<textElement.length; i++) {
        }
    }
}


// Fetch API Github //
fetch("https://api.github.com/users/Nelly-OP/repos")
.then(response => response.json())
.then(load => {
    
// Display List of Repositories in Browser //
let projectSection = document.getElementById("projects");
let projectList = projectSection.querySelector("ul");
for (let i = 0; i < load.length; i++) {
    let project = document.createElement("li");
    let projectLinks = document.createElement("a");
     projectLinks.className = "project-link";
     projectLinks.href = load[i].html_url;
    projectLinks.innerHTML= load[i].name;
    project.className ="projects-li";

    projectList.appendChild(project);
    project.appendChild(projectLinks);

}

})
.catch(error => alert("We have a problem!", error));
