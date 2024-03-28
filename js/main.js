let inputFiled = document.querySelector('input')
addButton = document.querySelector('.plus')
tasksContainer = document.querySelector('.task-content')
tasksCount = document.querySelector('.tasks-count span')
tasksCompleted = document.querySelector('.tasks-completed span')

window.onload = function () {
  inputFiled.focus()
}

addButton.onclick = function () {
  if (inputFiled.value === '') {
    console.log('no value')
  } else {
    noTasksMsg = document.querySelector('.no-tasks')
    if (document.body.contains(document.querySelector('.no-tasks'))) {
      noTasksMsg.remove()
    }

    //* Remove no tasks msg
    let mainSpan = document.createElement('span')
    let deleteSpan = document.createElement('span')

    mainSpan.appendChild(document.createTextNode(inputFiled.value))
    deleteSpan.appendChild(document.createTextNode('Delete'))
    mainSpan.className = 'task-box'
    deleteSpan.className = 'delete'

    mainSpan.appendChild(deleteSpan)
    tasksContainer.appendChild(mainSpan)

    inputFiled.value = ''

    calculateTasks()
  }
}

document.addEventListener('click', function (e) {
  // if (e.target.classList.contains('delete')) {
  //   e.target.parentNode.remove()
  // }
  if (e.target.className === 'delete') {
    e.target.parentNode.remove()

    if (tasksContainer.childElementCount === 0) {
      createNoTasks()
    }
  }

  if (e.target.classList.contains('task-box')) {
    e.target.classList.toggle('finished')
  }
  calculateTasks()
})

function createNoTasks() {
  let msgSpan = document.createElement('span')
  msgSpan.appendChild(document.createTextNode('No tasks to show'))

  msgSpan.className = 'no-tasks'

  tasksContainer.appendChild(msgSpan)
}

function calculateTasks() {
  tasksCount.innerHTML = document.querySelectorAll(
    '.task-content .task-box'
  ).length
  tasksCompleted.innerHTML = document.querySelectorAll(
    '.task-content .finished'
  ).length
}
