// DOM elements
const postList = document.querySelector('.posts');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const setupUI = (user) => {
  if (user) {
    // account info
    db.collection('users').doc(user.uid).get().then(doc => {
      const html = `
        <div>Logged in as ${user.email}</div>
      `;
    });
    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    // toggle user elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};

// setup posts
const setupPosts = (data) => {

  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const post = doc.data();
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4"> ${post.title} </div>
          <div class="collapsible-body white"> ${post.content} </div>
        </li>
      `;
      html += li;
    });
    postList.innerHTML = html
  }

};