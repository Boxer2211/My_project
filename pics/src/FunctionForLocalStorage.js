export function saveNameToLocalStorage() {
    const name = prompt('For send comment you need write your name:');
    localStorage.setItem('name', name);
  }

 export function getNameFromLocalStorage() {
    const name = localStorage.getItem('name');
    return name;
  }

