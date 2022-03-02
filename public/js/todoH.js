let addBtn = document.getElementById('todo-add-btn');
let list = document.getElementById('todos-list');
let addInput = document.getElementById('todo-input');

addBtn.addEventListener('click', function () {

    var paragraph = document.createElement('p');

    paragraph.classList.add('todo-input')
    paragraph.innerText = addInput.value;
    list.appendChild(paragraph);
    addInput.value = '';
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function () {
        list.removeChild(paragraph);
    })

})

// $(function () {
//     let dataInputs = {
//         todoTask: $('[data-role="massage"]').val()
//     }
//     $('[data-role="save-btn"]').click(function () {
//         let dataInputs = {
//             todoTask: $('[data-role="massage"]').val()
//         }
//         $.post('/todo', dataInputs, {
//             dataInputs
//         })
//     })
//     $('[data-role="save-btn"]').click(function () {

//         let addBtn = $('[data-role="save-btn"]')
//         let list = $('[data-role="messages-container"]');
//         let addInput = $('[data-role="massage"]')

//         var paragraph = document.createElement('p');

//         paragraph.classList.add('todo-input')
//         paragraph.innerText = addInput.value;
//         list.appendChild(paragraph);
//         addInput.value = '';
//         paragraph.addEventListener('click', function () {
//             paragraph.style.textDecoration = 'line-through';
//         })
//         paragraph.addEventListener('dblclick', function () {
//             list.removeChild(paragraph);
//         })
//         $.ajax({
//             url: '/todo',
//             type: 'GET',
//             success: function (result) {
//                 console.log(result);
//                 document.getElementById("todo-input").textContent = JSON.stringify(result, undefined, 2);
//             }
//         });
//     })

// })