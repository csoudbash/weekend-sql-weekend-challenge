$(document).ready(onReady);

function onReady() {
    getTasks();
    $('#add-task').on('click', postTask);
    $('#table').on('click', '.btn-delete', deleteTask);
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



//------------------ HELPERFUNCTIONS ----------------------
function renderToDom(tasks) {
    // console.log(tasks);
    $('#tasks').empty();
    for (let task of tasks) {
        $('#tasks').append(`
        <tr data-id = ${task.id}>
        <td>${task.task}</td>
        <td>${task.description}</td>
        <td>${task.date}</td>
        <td>${task.isComplete}</td>
        <td></td>
        <td><button class="btn-delete" data-id=${task.id}>Delete</button></td>
        
        </tr>
        `)
    }
}
// ------------------- END HELPER FUNCTIONS ---------------