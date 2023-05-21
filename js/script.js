
const noOfUsers = users.length;

document.getElementById("noUsers").innerHTML = "Total :" + noOfUsers;

const usersInEachPage = 10;

const totalPages = Math.ceil(noOfUsers / usersInEachPage); 

let currentPage = 1;

const userList = document.getElementById('user-list');
const pagination = document.getElementById('pagination');

function displayUsers(page) {
  userList.innerHTML = '';

  const startIndex = (page - 1) * usersInEachPage;
  const endIndex = Math.min(startIndex + usersInEachPage, noOfUsers);

  for (let i = startIndex; i < endIndex; i++) {
    const user = users[i];
    const userDetails = document.createElement('li');
    userDetails.className = 'contact-item cf';
    userDetails.innerHTML = `
      <div class="contact-details">
        <img class="avatar" src="${user.image}">
        <h3>${user.name}</h3>
        <span class="email">${user.email}</span>
      </div>
      <div class="joined-details">
        <span class="date">Joined ${user.joined}</span>
      </div>
    `;
    userList.appendChild(userDetails);
  }
}

function createPagination() {
  pagination.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const numbering = document.createElement('li');
    numbering.innerHTML = `<a href="#", id= "pageNumber", onclick = "displayUsers(${i})">${i}</a>`
    pagination.appendChild(numbering);
  }

  const currentPageLink = pagination.childNodes[currentPage - 1];
}

displayUsers(currentPage);
createPagination();
