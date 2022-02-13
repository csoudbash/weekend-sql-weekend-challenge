
$(document).ready(onReady);

function onReady() {
    getTasks();
    $('#add-task').on('click', postTask);
    $('#table').on('click', '.btn-delete', deleteTask);
    $('#table').on('click', '.task-done', updateTask);
}

function postTask() {
    let objectToSend = {
        task: $('#task').val(),
        description: $('#description').val(),
        date: $('#date').val(),
        isComplete: false
    }

    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: objectToSend
    }).then(function(response){
    console.log(response);
    // emptying input fields after the post statement has gone through
    $('#task').val('');
    $('#description').val('');
    $('#date').val('');
    getTasks(); // recalling the getTasks function and reappending everything to DOM
    }).catch(function(error){
        console.log('rut ro scoob', error);
    })
}
function getTasks() {
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(function(response){
        // console.log(response);
        renderToDom(response);
    }).catch(function(err){
        console.log('rut ro raggy', err);
    })
}
function deleteTask() {
    let taskId = $(this).data().id;
    // console.log(taskId);
    $.ajax({
        method: 'DELETE',
        url: `/tasks/${taskId}`
    }).then(function(response){
        console.log('twas deleted');
        getTasks();
    }).catch(function(error){
        console.log('rut ro scoob', error);
    })
}

function updateTask() {
    let taskData = $(this).closest('tr').data().iscomplete;
    let taskId = $(this).closest('tr').data().id;
    // let closestTr = $(this).closest('tr');
    console.log(taskData);
    $.ajax({
        method: 'PUT',
        url: `/tasks/${taskId}`,
        data: {
            iscomplete: taskData
        }
    }).then(function(res){
        console.log('looking good? i hope', res);
        getTasks();
        // updateColor(closestTr);
    }).catch(function(error){
        console.log('rut ro scoob', error);
    })
}


//------------------ HELPERFUNCTIONS ----------------------
function renderToDom(tasks) {
    // console.log(tasks);
    let color
    $('#tasks').empty();
    for (let task of tasks) {
        
        if (task.isComplete === true){
            color =  "green";
        }
        if (task.isComplete === false) {
            color =  "red";
        }
        $('#tasks').append(`
        <tr style= "background-color:${color}" data-id = ${task.id} data-iscomplete= ${task.isComplete}>
        <td>${task.task}</td>
        <td>${task.description}</td>
        <td>${task.date}</td>
        <td><button class="task-done">Done</button></td>
        <td><button class="btn-delete" data-id=${task.id} >Delete</button></td>
        </tr>
        `)
    //     if (task.isComplete === true){
    //        style = "color: green"
    //    }
    //    if (task.isComplete === false) {
    //        style = "color: red"
    //    }
    }
}

// function updateColor(tableRow, ) {
//     console.log(tableRow);
//     tableRow.addClass("turnRed")
//     for (let task of tasks) {
//             console.log(task.isComplete);
//             if (task.isComplete === false) {
//                 tableRow.addClass("turnRed")
//             }
//         }

    // renderToDom();
// }
// ------------------- END HELPER FUNCTIONS ---------------