// 
async function getUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/")
    let users = await response.json()
    return users
}
// 
function getUserDiv(user) {
    return `
    <div class="my-online-user" id="user-${user.id}" onClick='getUserDetails(${JSON.stringify(user)})'>
        <div class="user-username">${user.name}</div>
    </div>`
}

getUsers().then(users => {
    document.body.innerHTML = `
    <div class="header">
        <p id="header-title">User Profile Data</p>
    </div>
    <div class="my-online-users">
        ${users.map(user => getUserDiv(user)).join('')}
    </div>
    <div id="main-content">
        <h2 class="user-heading">User Profile</h2>
        <h4 class="user-name"><span class="detail-name">Name: | Username:</span> </h4>
        <h2 class="user-heading">Contact Details</h2>
        <h4 class="user-details"><span class="detail-name">Email:  | Phone: </h4>
        <h2 class="user-heading">Address</h2>
        <h4 class="user-details"><span class="detail-name">Address:</span> </h4>
        <h2 class="user-heading">Website</h2>
        <h4 class="user-details"><span class="detail-name">Website:</span></h4>
    </div>
    <div class="footer">
    <p id="footer-title">Footer</p>
    </div>
    `
})

async function getUserDetails(user) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/`)
    let userData = await res.json()
    console.log(userData)
    document.getElementById('main-content').innerHTML = `
    <h2 class="user-heading">User Profile</h2>
    <h4 class="user-name"><span class="detail-name">Name:</span> ${userData.name} <span class="detail-name">| Username:</span> ${userData.username}</h4>
    <h2 class="user-heading">Contact Details</h2>
    <h4 class="user-details"><span class="detail-name">Email:</span> ${userData.email} <span class="detail-name">| Phone:</span> ${userData.phone}</h4>
    <h2 class="user-heading">Address</h2>
    <h4 class="user-details"><span class="detail-name">Address:</span> ${userData.address.street} ${userData.address.city} ${userData.address.zipcode}</h4>
    <h2 class="user-heading">Website</h2>
    <h4 class="user-details"><span class="detail-name">Website:</span> ${userData.website}</h4>
    <h2 class="user-heading">Employer</h2>
    <h4 class="user-details"><span class="detail-name">Company:</span> ${userData.company.name} <span class="detail-name">| Catch Phrase:</span> ${userData.company.catchPhrase}</h4>
    `
}
// DISPLAY USER PROFILE

