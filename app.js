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

function getTask (event){
    // add task to localStorage
    let tasks // array user inputs
    if(localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    // loop array for each element value
    tasks.forEach(function (task){
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
    })
}

function addTask(event) {
    // user input
    const taskText = document.querySelector('#task').value
    console.log(taskText)

    // add DOM element - begin
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
    // add DOM element - end

    // add task to localStorage
    let tasks // array user inputs
    if(localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(taskText)
    localStorage.setItem('tasks', JSON.stringify(tasks))

    document.querySelector('#task').value = ''
    event.preventDefault()
}
