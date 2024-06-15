const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "image/pom.jpeg") {
    myImage.setAttribute("src", "image/pom2.jpeg");
  } else {
    myImage.setAttribute("src", "image/pom.jpeg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Enter your name");
    if(!myName)
    {
        setUserName();
    }else{
    localStorage.setItem("name", myName);
    myHeading.textContent = `Pom is kawaii, ${myName}. Pom is kawaii.`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Pom is kawaii, ${storedName}`;
  }
  
  myButton.onclick = () => {
    setUserName();
  };
  

