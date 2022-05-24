let optionsDiv = document.querySelector('div.options'); 
const newDiv = document.createElement('div');
const  newBtn = document.createElement('button');


//let newE = parentElem.appendChild(createElemBody(newDiv,'prodol','prodol'));
//console.log(newE);



let element = createElemBody(newDiv,'prodol','prodol');
//document.getElementsByTagName('body')[0].append(element);
document.body.insertBefore(element, document.body.firstChild);




function createElemBody(tag,clasName,text){
	let element = tag;
	element.className = clasName;
	element.innerHTML = text;
	return element;
}