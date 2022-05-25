const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const divList = document.querySelector(".ulList");



startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);




function onStartClick() {
   hide(startBtn);
   addElemToHtml();
   show(stopBtn);
};

function onStopClick() {
   show(startBtn);
   hide(stopBtn);
   removeChil();
};

async function getRespose(){
   let response = await fetch('https://gorest.co.in/public/v2/users');
   let content = await response.json();
       content = content.splice(0, 10);
   let key;
   
      for (key in content) {
         document.querySelector(".users").innerHTML +=
            `<li>
               <h4>name:${content[key].name};</h4> 
               <h4>id: ${content[key].id};</h4>
               <h4>email: ${content[key].email};</h4>
               <h4>gender: ${content[key].gender};</h4>
               <h4>status:  ${content[key].status};</h4>
            </li>`
      }
};

function hide(btn) {
   btn.classList.add("hidden");
};
function show(btn) {
   btn.classList.remove("hidden");
};

function removeChil(){
   let element = document.querySelector(".users");
   element.remove();
};

function addElemToHtml(){
   document.querySelector('.ulList').appendChild(createElemUl());
   getRespose();
}

function createElemUl(){
	let element = document.createElement('ul');
   element.className = "users";
	return element;
};



