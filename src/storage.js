function createItem() {
     localStorage.setItem('projectsList', JSON.stringify());
};

function readItem() {
     return JSON.parse(localStorage.getItem("projectsList"));
};

function updateItem(item) {
     localStorage.setItem('projectsList', JSON.stringify(item));
};

function clearStorage() {
     localStorage.clear();
}

export { createItem, readItem, updateItem, clearStorage };