$(document).ready(onReady);

function onReady() {
    $('#add-task').on('click', postTask)
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
    }).catch(function(error){
        console.log('rut ro scoob', error);
    })

}