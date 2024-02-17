// "use strict";

// let users = [];
// let posts = [];

// let user = {
//   id: "bops1",
//   firstName: "Sana",
//   lastName: "Rahimpur",
//   age: 22,
//   hasPet: true,
//   postIds: [],
// };

// users.push(user);

// // CREATE USER
// function addUser(usersArray, newUser) {
//   usersArray.push(newUser);
// }

// // READ USER
// function getUser(usersArray, findId) {
//   return usersArray.find((item) => item.id === findId);
// }

// // UPDATE USER
// function editUser(usersArray, editId, editParams) {
//   let editUser = usersArray.find((item) => item.id === editId);
//   editUser.id = editParams?.id !== undefined ? editParams?.id : editUser.id;
//   editUser.firstName =
//     editParams?.firstName !== undefined
//       ? editParams?.firstName
//       : editUser.firstName;

//   if (editParams?.age) {
//     editUser.age = editParams.age;
//   }
// }

// // DELETE USER
// function removeUser(usersArray, deleteId) {
//   const deletUser = usersArray.find((user) => user.id === deleteId);
//   const deleteIndex = usersArray.indexOf(deletUser);
//   usersArray.splice(deleteIndex, 1);
// }

// addUser(users, {
//   id: "bops2",
//   firstName: "Abulfazel",
//   lastName: "Razawi",
//   age: 24,
//   hasPet: true,
// });

// addUser(users, {
//   id: "bops3",
//   firstName: "Elyas",
//   lastName: "Barakzai",
//   age: 17,
//   hasPet: false,
// });

// editUser(users, "bops2", { id: "bops6", firstName: "Abu" });

// removeUser(users, "bops6");
// console.log(users);

// const newPost = {
//   id: "1001",
//   title: "Amazing adventure",
//   date: new Date(),
//   userId: "bops1",
// };

// // CREATE POST
// function addPost(postsArray, newPost) {
//   postsArray.push(newPost);
// }

// // READ POST
// function getPost(postsArray, postId) {
//   return postsArray.find((post) => post.id === postId);
// }

// // UPDATE POST
// function editPost(postsArray, postId, editParams) {
//   let editPost = postsArray.find((post) => post.id === postId);
//   if (editParams?.title) {
//     editPost.title = editParams.title;
//   }
//   if (editParams?.date) {
//     editPost.date = editParams.date;
//   }
// }

// // DELETE POST
// function removePost(postsArray, postId) {
//   const deletePost = postsArray.find((post) => post.id === postId);
//   const deleteIndex = postsArray.indexOf(deletePost);
//   postsArray.splice(deleteIndex, 1);
// }

// addPost(posts, newPost);
// console.log(users);
// console.log(posts);


// let data = [];

// function createData() {
//   const name = document.getElementById('name').value;
//   const age = document.getElementById('age').value;

//   if (name && age) {
//     const newData = {
//       name,
//       age
//     };

//     data.push(newData);
//     renderTable();
//     clearForm();
//   } else {
//     alert('Name and Age are required');
//   }
// }

// function deleteData(index) {
//   data.splice(index, 1);
//   renderTable();
// }

// function renderTable() {
//   const tableBody = document.getElementById('table-body');
//   tableBody.innerHTML = '';

//   data.forEach((item, index) => {
//     const row = document.createElement('tr');
//     row.innerHTML = `
//       <td>${item.name}</td>
//       <td>${item.age}</td>
//       <td><button onclick="deleteData(${index})">Delete</button></td>
//     `;
//     tableBody.appendChild(row);
//   });
// }

// function clearForm() {
//   document.getElementById('crud-form').reset();
// }


let data = [];
let editingIndex = -1; // Variable to track the index being edited

function createData() {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;

  if (name && age) {
    const newData = {
      name,
      age
    };

    if (editingIndex !== -1) {
      // If editing, replace the existing data
      data[editingIndex] = newData;
      editingIndex = -1; // Reset editingIndex after editing
    } else {
      // If not editing, add new data
      data.push(newData);
    }

    renderTable();
    clearForm();
  } else {
    alert('Name and Age are required');
  }
}

function deleteData(index) {
  data.splice(index, 1);
  renderTable();
}

function editData(index) {
  const selectedData = data[index];

  // Populate the form with the selected data for editing
  document.getElementById('name').value = selectedData.name;
  document.getElementById('age').value = selectedData.age;

  // Set editingIndex to the current index
  editingIndex = index;
}

function renderTable() {
  const tableBody = document.getElementById('table-body');
  tableBody.innerHTML = '';

  data.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.age}</td>
      <td>
        <button onclick="editData(${index})">Edit</button>
        <button onclick="deleteData(${index})">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

function clearForm() {
  document.getElementById('crud-form').reset();
}


