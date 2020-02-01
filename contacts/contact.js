let contacts = [];
const add2 = document.getElementById("add2");
const card2 = document.getElementById("newMain");

const myHeader = new Headers();
myHeader.append('Content-Type', 'application/json');
fetch('http://localhost:3000/contact', {
    method: 'GET',
    headers: myHeader
}).then(res => res.json()).then((data) => {
    contacts = data;
    console.log(contacts);
    render(contacts);
});

function render(contacts) {
    let html = "";
    contacts.forEach(item => {
        html += `<div class="maincard">
        <img class="img2" src='http://localhost:3000${item.img}' alt="Avatar">
        <div class="container">
        <h4><b>${item.name}</b></h4>
        <p ><b>${item.position}</b></p><b>${item.mobile} ${item.email}
        </b><button class="button"  onclick="del(this.id)" id =${item.id}
        ><strong>DELETE</strong></button>
        <br></div><br></div>`;
    });
    card2.innerHTML = html;
}

function del(id) {
    const myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json');
    fetch('http://localhost:3000/contact/', {
            method: 'DELETE',
            headers: myHeader,
            body: JSON.stringify({
                id: id
            })
        })
        .then(res => {
            contacts.forEach((item, index) => {
                if (item.id == id) {
                    contacts.splice(index, 1);
                }
            });
            console.log("done  delete");
            card2.innerHTML = "";
            render(contacts);
        });
}