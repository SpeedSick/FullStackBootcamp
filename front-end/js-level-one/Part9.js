let name = prompt('What is your first name?');
let surname = prompt('What is your last name?');
let age = prompt('What is your age?');
let height = prompt('What is your height?');
let pet_name = prompt('What is your pet name?');

if(name[0] === surname[0] && 20 <= age && age <= 30 && 170 <= Number(height) && pet_name.endsWith('y')) {
    console.log('this is message for you');
  }
