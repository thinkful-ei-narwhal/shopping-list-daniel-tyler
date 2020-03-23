import item from './item.js';
const items = [];
const hideCheckedItems = false;

const findById = function(idnum) {
  return this.items.find(el => el.id === idnum); 
};

const addItem = function(name) {
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  }
  catch(error) {
    console.log(`${error.message}`);
  }
  console.log('addItem works!');
};

const findAndUpdateName = function(id, newName) {
  try {
    item.validateName(newName);
    findById(id).name = newName;
  }
  catch(error) {
    console.log(`Cannot update name: ${error.message}`);
  }
  console.log('Name updated!');
};

const findAndToggleChecked = function(id) {
  const item = this.findById(id);
  item.checked = !item.checked;
};

const findAndDelete = function(id) {
  const deleteObj = findById(id); 
  this.items.splice(deleteObj, 1);
  console.log('Deleted!');
};

/**
 * Toggles the store.hideCheckedItems property
 */
const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndUpdateName,
  findAndToggleChecked,
  findAndDelete,
  toggleCheckedFilter
};