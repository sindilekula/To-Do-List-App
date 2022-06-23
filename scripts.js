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
   `
}

function deleteList() {
    lists.splice(list, 1);
    localStorage.setItem('records', JSON.stringify(lists));
}

//   function addReord(e) {
//     e.preventDefault();
//     lists.push(
//         {
//             id: parseInt(document.getElementById('id').value),
//             item: document.getElementById('item').value,
//             createdDate: document.getElementById('date').value,
//         }
//     )
//   };

//   localStorage.setItem()

// let lists = JSON.parse( localStorage.getItem('records')) ?
// JSON.parse( localStorage.getItem('records')) : [
//     {
//         name: 'Lerato',
//         surname: 'Tebi',
//         age: 39
//     }
// ];

// function addRecord() {
//     //   e.preventDefault();
//       lists.push(
//           {
//                 name: document.getElementById('name').value,
//                 surname: document.getElementById('surname').value,
//                 age: parseInt(document.getElementById('date').value)
//           }
//       );
//       localStorage.setItem('records', JSON.stringify(lists));
//      };

// function deleteRecord(id) {
//     lists.splice(id, 1);
//     localStorage.setItem('records', JSON.stringify(lists));
// }

// // Load data

// (function loadData() {
//     console.log(lists)
// }) ();

// // add event listener
// document.querySelector('#addRecord').addEventListener('click', addRecord);