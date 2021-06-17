let add = document.getElementById("submit");
let contain = document.getElementById("toDo");
let input = document.getElementById("text");
let cancel = document.getElementById("cancel");
let taskChecker = false;


function taskCount(){

    // function for task counting
    var remain = document.getElementsByClassName('list-style');
    var count =document.getElementById("count");
    var size = remain.length;
    
    count.textContent = size;
}

add.addEventListener('click', function(){
    // on click starts operation
    if ( input.value == '')
    {
        // checks if the box is empty and issues a warning
        input.style.borderColor = "red";
    }else
    {
        input.style.borderColor = ""; //reverts the border style to normal
    
        var list = document.createElement('li');
        list.classList.add('list-style');
        list.innerText = input.value;
        contain.appendChild(list);
        input.value = "";
        
        list.addEventListener('click', function(){
            taskChecker = !taskChecker;
            
            if (taskChecker) {
                list.classList.add('task-done');
            } else {
                list.classList.remove('task-done');
            }
        })
        
        // Delete a task
        list.addEventListener('dblclick', function(){
            contain.removeChild(list);
        })
        taskCount()
        setInterval(taskCount, 100)
    
        // Delete all Task
        cancel.addEventListener('click', function(){
            contain.removeChild(list);
        })
    }
})