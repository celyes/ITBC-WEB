var name = "Belkheir";
var age = 23;

var hobbies = ["Reading", "Cycling", "Writing"];

var hobbiesContainer = document.getElementById('hobbies');

var list = document.createElement('ul');
list.setAttribute('id', 'hobbiesLists');
hobbiesContainer.appendChild(list);
hobbies.forEach(function(hobby, index){
    var list = document.getElementById('hobbiesLists');
    var item = document.createElement('li');   
    item.innerHTML = hobby; 
    list.appendChild(item);
});

var form = document.getElementById('myForm');
form.addEventListener('submit', function(e){
    e.preventDefault();
    var input = document.getElementById("addElement");
    var list = document.getElementById('hobbiesLists');
    var item = document.createElement('li');
    item.innerHTML = input.value;
    list.appendChild(item);
    input.value = "";
})
