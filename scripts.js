// let lists = JSON.parse(localstorage.getItem('records')) ? JSON.parse(localStorage.getItem('records')) : [
//    {
//        id: 1,     
//        item: Watching TV,
//        createdDate: new Date()

//    }
// ]


document.querySelector('#Add').onclick = function () {
   document.querySelector('#list').innerHTML +=`
  <div>
   ${document.querySelector('#ToDo input').value}</div>
   <button class="delete">Delete</button>
   `
}

function deleteList() {
    lists.splice(list, 1);
//     localStorage.setItem('records', JSON.stringify(lists));
// };