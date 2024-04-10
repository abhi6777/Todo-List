function createItem() {
     localStorage.setItem('projectsList', JSON.stringify([]));
};

function readItem() {
     return JSON.parse(localStorage.getItem('projectsList'));
};

function updateItem(data) {
     localStorage.setItem('projectsList', JSON.stringify(data));
};

