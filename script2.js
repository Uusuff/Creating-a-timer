const divConteiner = createElemDiv('container',"");
const divTime = createElemDiv('time',"00:00:00");
const divOptions = createElemDiv('options',"");
const btnStart = createElemBtn('start',"Start");
const btnStop = createElemBtn('stop hidden',"Stop");
const btnReset = createElemBtn('reset hidden',"Reset");

document.body.insertBefore(divConteiner,document.body.firstChild);
document.querySelector('.container').appendChild(divTime);
document.querySelector('.container').appendChild(divOptions);
document.querySelector('.options').appendChild(btnStart);
document.querySelector('.options').appendChild(btnStop);
document.querySelector('.options').appendChild(btnReset);



function createElemDiv(clasName,text){
	let element = document.createElement('div');
	element.className = clasName;
	element.innerHTML = text;
	return element;
};

function createElemBtn(clasName,text){
	let element = document.createElement('button');
	element.className = clasName;
	element.innerHTML = text;
	return element;
};