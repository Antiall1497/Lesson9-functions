`use strict`

fetch("http://192.168.1.148:3000/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    const cards = data.map((user) => {
      return createUserCard(user);
    })

    document.body.append(...cards);

    console.log(cards);
  });

let position = ['manager', 'owner', 'administrator', 'director']

function createUserCard(user) {

  const mainContainer = document.createElement('div');
  const secondContainer = document.createElement('div');
  const userName = document.createElement('h1');
  const position = document.createElement('p');
  const img = document.createElement('img');
  const button = document.createElement('button');

  const name = `${user.firstName} ${user.lastName}`;

  userName.textContent = name.trim() || 'Anon' ;
  position.textContent = 'manager';
  img.src = user.profilePicture;
  button.textContent = 'button';

  mainContainer.classList.add('userCardContainer');
  secondContainer.classList.add('secondContainer');
  img.classList.add('imageForAvatar');
  userName.classList.add('userName');
  position.classList.add('position');
  button.classList.add('button');

  mainContainer.append(secondContainer, button);
  secondContainer.append(img,userName, position );

  // img.addEventListener(error, img);

  return mainContainer

};

