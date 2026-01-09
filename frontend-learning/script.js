const users = [
    {name: "Ivan", age: 20},
    {name:"Pesho", age: 23},
    {name: "Kosta", age: 16},
    {name: "Gosho", age: 14}
];

const userList = document.getElementById("userList");
const showAllBtn = document.getElementById("showAll");
const showAdultsBtn = document.getElementById("showAdults");

const renderUsers = (usersToRender) => {
    userList.innerHTML = "";

    usersToRender.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} (${user.age})`;
        userList.appendChild(li); 
    });
};

showAllBtn.addEventListener("click", () => {
    renderUsers(users);
});


showAdultsBtn.addEventListener("click", () => {
    const adults = users.filter( user => user.age >= 18);
    renderUsers(adults);
});

