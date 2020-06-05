//EXAMINE THE DOCUMENT OBJECT//

// console.dir(document);
// console.log(document.domain);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.doctype);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.all[18]);

// document.all[18].textContent = 'hello';

//   GET ELEMENT BY ID  //

// const headerTitle = document.getElementById('header-title');
// const header = document.getElementById('main-header');
// // headerTitle.innerText = 'HELLO';
// // headerTitle.textContent = 'Hi';
// // console.log(headerTitle.innerText);
// // console.log(headerTitle.textContent);
// headerTitle.innerHTML = '<h1> Hello </h2>';
// // headerTitle.style.borderBottom = 'solid 2px #000';
// header.style.borderBottom = 'solid 2px #000';

//       GETELEMENTS BY CLASS NAME    //

// const itemList = document.getElementsByClassName("list-group-item");
// console.log(itemList[0].textContent);
// console.log(itemList[2].innerText);
// itemList[1].style.color = 'red';
// // itemList[3].style.backgroundColor = '#f4f4f4';

// for(let i = 0; i < itemList.length; i++){
//     if (i % 2 == 0){
//         itemList[i].style.backgroundColor = '#f4f4f4';
//     }
// }

//************GET ELEMENTS BY TAGNAME********//

// const List = document.getElementsByTagName('li');
// console.log(List);
// List[1].innerText = 'Hello';
// List[1].style.fontWeight = 'bold';

// const inputItem = document.getElementsByName('input');
// console.log(inputItem);

//***************QUERY SELECTOR**************//

// const header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 5px grey';

// const input = document.querySelector('input');
// input.placeholder = 'Type here';

// const submit = document.querySelector('input[type = "submit"]');
// // submit.value = "send";

// const lastItem = document.querySelector('.list-group-item:Last-child');
// // lastItem.textContent = 'Last item';

// const thirdItem = document.querySelector('.list-group-item:nth-child(2)');

// // console.log(thirdItem.innerText);

// const secondItem = document.querySelector('.list-group-item:nth-child(2)');

// // secondItem.style.backgroundColor = 'grey';

// // *******QUERY SELECTOR ALL****** //

// const odd = document.querySelectorAll('.list-group-item:nth-child(odd)');

// const even = document.querySelectorAll('.list-group-item:nth-child(even)');

// for(let i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'grey';
//     even[i].style.backgroundColor = '#f4f4f4';
// }

// //**********TRAVERSING THE DOM *******/
// const item = document.querySelector('#items');
// // console.log(item.parentNode);
// // item.parentNode.style.backgroundColor = '#f4f4f4';
// // console.log(item.parentNode.parentNode);
// // console.log(item.parentNode.parentElement);

// // console.log(item.childNodes[1]);
// // console.log(item.children);
// // console.log(item.children[1]);
// // item.children[1].style.backgroundColor = 'red';

// //firstChild//
// // console.log(item.firstChild);
// // //FirstChildElement//
// // console.log(item.firstElementChild);
// // item.firstElementChild.style.backgroundColor = 'yellow';
// // //LastChild//
// // console.log(item.lastChild);
// // //lastElementChild//
// // console.log(item.lastElementChild);
// // item.lastElementChild.textContent = 'Hello there';

// //nextSibling//
// // console.log(item.nextSibling);
// // //nextElementSibling//
// // console.log(item.nextElementSibling);

// // //PreviousSibling//
// // console.log(item.previousSibling);
// // console.log(item.previousElementSibling);
// // item.previousElementSibling.style.backgroundColor = 'green';


// // console.log(container);

// // const items = document.querySelector('.container .list-group-item');
// // console.log(items);

// //CREATE ELEMENT//

// // CREATE NEW DIV//

// const newDiv = document.createElement('div');
// //add class//
// newDiv.className = 'hello';

// //add id//
// newDiv.id = 'text';

// //attribute//
// newDiv.setAttribute('title', 'helloDiv');

// //createTextNode//
// const textElement = document.createTextNode('Hello There, how is going on');

// //appendChild//
// newDiv.appendChild(textElement);
// console.log(newDiv);

// const container = document.querySelector('header .container');

// const h1 = document.querySelector('header h1');

// container.insertBefore(newDiv,h1);

// newDiv.style.fontSize = '30px';