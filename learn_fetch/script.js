const BtnOutput = document.querySelector('.Output');
const BtnHide = document.querySelector('.Hide');
const content = document.querySelector(".content");
const domain = 'https://gorest.co.in';
const userPath = '/public/v2/users';
const url = domain + userPath;


BtnOutput.addEventListener('click', onClickBtnOutput);
BtnHide.addEventListener('click', onClickBtnHide);




function onClickBtnOutput() {
   hideBtn(BtnOutput);
   addList();
   addInListUsers();
   showBtn(BtnHide);
};

function onClickBtnHide() {
   showBtn(BtnOutput);
   hideBtn(BtnHide);
   removeListUsers();
};

async function addInListUsers(){
   let response = await fetch(url);
   let content = await response.json();
      for (let key in content) {
         document.querySelector(".usersList").innerHTML +=
            `<li>
               <h3>Name: ${content[key].name};</h3> 
               <h4>Id: ${content[key].id};</h4>
               <h4>Email: ${content[key].email};</h4>
               <h4>Gender: ${content[key].gender};</h4>
               <h4>Status:  ${content[key].status}.</h4>
            </li>`
      }
};

function  addList(){
   content.appendChild(createElemUl());
}

function createElemUl(){
	let element = document.createElement('ul');
   element.className = "usersList";
	return element;
};

function hideBtn(btn) {
   btn.classList.add("hidden");
};

function showBtn(btn) {
   btn.classList.remove("hidden");
};

function removeListUsers(){
   let element = document.querySelector(".users");
   element.remove();
};