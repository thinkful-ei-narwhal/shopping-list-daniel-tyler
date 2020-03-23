const validateName = function(name) {
  if (!name) {
    throw TypeError('Name must not be blank, idiot!');
  }
};

const create = function(name) {
  
  const item =  { 
    id: cuid(),
    name,
    checked: false
  };
  return item;
};
export default {
  create,
  validateName
};