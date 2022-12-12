const form = document.querySelector('form')
const taskList = document.querySelector('.collection')
const clearAllBtn = document.querySelector('#clear-all-tasks')

form.addEventListener('submit', addTask)
taskList.addEventListener('click', deleteTask)
clearAllBtn.addEventListener('click', clearTasks)

function clearTasks(){
    //taskList.innerHTML = ''
    while (taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
}

function deleteTask(e){
    if(e.target.textContent == 'X'){
        if (confirm("Do you want to delete this task?")){
            e.target.parentElement.remove()
        }
    }
}

function addTask(event) {
    const taskText = document.querySelector('#task').value
    console.log(taskText)

    let li = document.createElement('li')
    li.className = 'collection-item'
    let liText = document.createTextNode(taskText)
    li.appendChild(liText)

    const link = document.createElement('a')
    link.setAttribute('href', '#')
    link.appendChild(document.createTextNode('X'))


    let a = document.createElement('a')
    a.className = 'teal-text lighten-2 secondary-content'
    let aText = document.createTextNode('X')
    a.appendChild(aText)
    a.setAttribute('href', '#')
    link.className = 'secondary-content'

    li.appendChild(a)

    const ul = document.querySelector('ul')
    ul.appendChild(li)

    document.querySelector('#task').value = ''
    event.preventDefault()
}
