window.addEventListener('load',()=>{
    const form = document.querySelector('#input-wrapper');
    const input = document.querySelector('#input-txt');
    const listOfTasks = document.querySelector('#text-wrapper');

    //adding listener to the form add task button
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        
        const taskSubmitted = input.value;

        //error handler incase empty input field is submitted
        if (!taskSubmitted) {
            alert ('please fill out the task');
            return;
        }

        //creating div with a class name "task" which is the child of #text-wrapper
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        //creating div with a class name "content which is the child of .task"
        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        //creating input element with a class name "text" which is the child of .content
        const taskDisplay = document.createElement('input');
        taskDisplay.classList.add('text');
        taskDisplay.type = 'text';
        taskDisplay.value = taskSubmitted;
        taskDisplay.setAttribute('readonly', 'readonly');

        //creating button element with a class name of 'action' which is the child of .task
        //task class has two children "content" and "action"
        const BtnDisplay = document.createElement('div');
        BtnDisplay.classList.add('action')

        const editBtnDisplay = document.createElement('button');
        editBtnDisplay.classList.add('edit');
        editBtnDisplay.innerHTML = 'edit'

        const deleteBtnDisplay = document.createElement('button');
        deleteBtnDisplay.classList.add('delete');
        deleteBtnDisplay.innerHTML = 'delete'

        
        task_content_el.appendChild(taskDisplay);
        
        task_el.appendChild(task_content_el);

        BtnDisplay.appendChild(editBtnDisplay);
        BtnDisplay.appendChild(deleteBtnDisplay);

        task_el.appendChild(BtnDisplay);

        listOfTasks.appendChild(task_el);
        input.value = '';

        editBtnDisplay.addEventListener('click', () =>{
            if (editBtnDisplay.innerText.toLowerCase() === 'edit'){
                taskDisplay.removeAttribute('readonly');
                taskDisplay.focus();
                editBtnDisplay.innerText = 'save';
            }else{
                alert("Task saved");
            }
        })

        deleteBtnDisplay.addEventListener('click', ()=>{
                 task_el.remove();
            
        })

        

    })
})