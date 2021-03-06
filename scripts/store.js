'use strict';



const store = (function() {

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];

  let hideCheckedItems = false;

  let searchTerm = '';


  function findById(id){

    return store.items.find(element => element.id === id);
  }

  function addItem(name){
    try{
      Item.validateName(name);
      this.items.push(Item.create(name));
    }
    catch(error){
      console.log('Cannot add item: ' + error.message);
    }
  }

  function findAndToggleChecked(id){
    let foundId = this.findById(id);
    console.log(foundId);
    foundId.checked = !foundId.checked;
  }

  function findAndUpdateName(id, newName){
    try{
      Item.validateName(newName);
      let foundId = this.findById(id);
      foundId.name = newName;
    }
    catch(error){
      console.log('Cannot update name: ' + error.message)
    }
  }

  function findAndDelete(id){
    let foundId = this.findById(id);
    return store.items = store.items.filter(element => element != foundId);
  }


  function toggleCheckedFilter() {
    this.hideCheckedItems = !this.hideCheckedItems;
  }

  function setSearchTerm(passedSearchTerm) {
    this.searchTerm = passedSearchTerm;
  }


  return{
    items,
    hideCheckedItems,
    searchTerm,
    findAndDelete,
    findAndUpdateName,
    findAndToggleChecked,
    addItem,
    findById,
    toggleCheckedFilter,
    setSearchTerm,
  };
}());