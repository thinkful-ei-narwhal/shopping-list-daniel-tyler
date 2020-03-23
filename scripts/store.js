import item from './item.js';
const items = [];
const hideCheckedItems = false;

const findById = function(id) {
  store.items.find(x => x.id === id);
  //replace store with 'this' if doesnt work
  console.log('findById works!');
};

const addItem = function(name) {
  try {
    validateName(name);
    this.items.push(name);
  }
  catch(error) {
    console.log(`${error.message}`);
  }
  console.log('addItem works!');
};

const findAndUpdateName = function(id, newName) {
  try {
    validateName(name);
    findById(id).name = newName;
  }
  catch(error) {
    console.log(`Cannot update name: ${error.message}`);
  }
  console.log('Name updated!');
};

const findAndDelete = function(id) {
  const deleteObj = findById(id);
  this.items.splice(deleteObj, 1);
  console.log('Deleted!');
};



export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndUpdateName,
  findAndDelete
};