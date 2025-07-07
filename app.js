let nav = document.createElement('nav');
nav.setAttribute('id','navbar');
nav.setAttribute('class','navclass');

document.body.appendChild(nav);
// logo
let dv = document.createElement('div');
let dvContent = document.createTextNode('MySite');
dv.appendChild(dvContent);

dv.setAttribute('id','myLogo');
dv.setAttribute('class','mylogoClass');
// now create menu btn 
let btn  = document.createElement('button');
let btnContent = document.createTextNode('Menu');
btn.appendChild(btnContent);
btn.setAttribute('class','btnClass');
btn.setAttribute('id','btnId');
btn.setAttribute('onclick','navFunctionality()')


let ul = document.createElement('ul');
ul.setAttribute('class','ulclass');
ul.setAttribute('id','ulId');
let items = ['Home','About','Services','Contact','Help','Support'];
for(let i = 0; i <items.length;i++){let li = document.createElement('li');
    let liContent = document.createTextNode(items[i]);
    li.appendChild(liContent);
    ul.appendChild(li)
}

nav.appendChild(dv);
nav.appendChild(btn);
nav.appendChild(ul)


function navFunctionality(){let getUl = document.getElementById('ulId');
    getUl.classList.toggle('list');
    let getnavbar = document.getElementById('navbar');
    getnavbar.classList.toggle('resizing')
}
