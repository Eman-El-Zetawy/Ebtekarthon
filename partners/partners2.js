let partners = [];
const add = document.getElementById("add");
const create = document.getElementById("create");

const my = new Headers();
my.append('Content-Type', 'application/json');

fetch('http://localhost:3000/partners', {
    method: 'GET',
    headers: my
}).then(res => res.json()).then((data) => {
    console.log(data);
    partners = data;

    render(partners);

});



function render(partners) {
    let html = '';
    partners.forEach(item => {
        html += `<div class="card"><img src="http://localhost:3000${item.img}" alt="" class ="imgc">
            <div class="container">
            <h4><b>${item.wsite}</b></h4><br>
            <button class="button"id='${item.id}'
            onclick="del(this.id)"><strong>DELETE</strong></button>
            </div></div> `;
    });
    create.innerHTML = html;
}

function del(id) {
    fetch('http://localhost:3000/partners/', {
            method: 'DELETE',
            headers: my,
            body: JSON.stringify({
                id:id 
            })
        })
        .then(res => {
            console.log("done delete");
            create.innerHTML = "";
            partners.forEach((item, index) => {
                if (item.id == id) {
                    partners.splice(index, 1);
                }
            });
            render(partners);
        });
}