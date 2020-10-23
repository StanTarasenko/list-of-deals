let form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
})

let ul = document.querySelector('#ul');

ul.addEventListener('mousedown', function (e) {
    e.preventDefault();
})

ul.addEventListener('click', function (e) {
    console.log(e);

    if (e.target == this) {
        return false;
    }
    if (!e.ctrlKey) {
        clearSelected(this.children);
    } 
    addSelected(e.target);
})

function clearSelected(elems) {
    for (let elem of elems) {
        console.log(elem.classList.remove('selected'));
    }
}

function addSelected(target) {
    target.classList.add('selected');
}

let menu = document.querySelector('#menu');
let arrayTask = ['Убрать дома', 'Почитать книгу', 'Послушать музыку', 'Поиграть с братом', 'Сходить на курсы', 'Помыть посуду', 'Погулять', 'Поиграть в игру', 'Выучить 10 слов на английском'];
function getRandomElem(arrayTask) {
  rand = Math.floor(Math.random() * arrayTask.length);
  return arrayTask[rand]
}

class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); // (*)
    }

    save() {
      alert('сохраняю');
    }

    load() {
      alert('загружаю');
    }

    search() {
      alert('ищу');
    }

    addToStart() {
      let li = document.createElement('li');
      li.innerHTML = getRandomElem(arrayTask);
      ul.prepend(li);
    }

    addToEnd() {
      let li = document.createElement('li');
      li.innerHTML = getRandomElem(arrayTask);
      ul.append(li)
    }

    delete() {
      let allSelectedLi = document.querySelectorAll('.selected');
      for (let elem of allSelectedLi) {
      elem.remove()
      }
    }

    sort() {
      alert('сортирую');
    }

    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    };
  }

new Menu(menu);