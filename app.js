var input = document.getElementById('input')
var task = document.getElementById('task')
var h3 = document.createElement('h3')

function addTask(){
    if(input.value === ''){
        alert("Please enter a valid task..!")
    }
    else{
        var div = document.createElement('div')
        var button = document.createElement('button')
    var button2 = document.createElement('button')
    var btntext = document.createTextNode('X')
    var btn2text = document.createTextNode('Edit')
    button2.setAttribute("onclick",'editTask()')
    button2.setAttribute("class",'list-del2')
    button2.appendChild(btn2text)
    button.setAttribute("onclick",'delTask()')
    button.setAttribute("class",'list-del')
    button.appendChild(btntext)
    div.appendChild(h3)
    div.appendChild(button2)
    div.appendChild(button)
    div.setAttribute("class",'list')
        var h3Text = document.createTextNode(input.value)
        h3.appendChild(h3Text)
        task.appendChild(div)
        input.value = ''
}
}
function delTask(){
    var a = event.target;
    a.parentNode.remove();
}

function editTask(){
var b = event.target;
var c = b.parentNode.firstChild.value;
var d = prompt("Enter Value")
c = d
}

function delAll(){
    task.innerHTML = ""
}