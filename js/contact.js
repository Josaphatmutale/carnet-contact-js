 let boutonAdd = document.getElementById('btn-add');
 let listView = document.querySelector('.contact-list');
 let form = document.getElementById('form');
 let btnCancel = document.getElementById('btn-cancel')
 let contacts = [];
 boutonAdd.addEventListener('click', (e) => {
  boutonAdd.classList.toggle('d-none');
  form.classList.toggle('d-none');
 })

 btnCancel.addEventListener('click', (e) => {
    boutonAdd.classList.toggle('d-none');
  form.classList.toggle('d-none');
 })

 form.addEventListener('submit', (e) => {
     e.preventDefault();
     let data = new FormData(e.target);
     let contact = {
        'nom' : data.get('nom'),
        'prenom' : data.get('prenom'),
        'pays' : data.get('pays'),
        'genre' : data.get('genre'),
        'email' : data.get('email'),
        'phone' : data.get('phone'),
        'birthday' : data.get('birthday'),
        'age': new Date().getFullYear() - (Date.parse(data.get('birthday')).getFullYear)
        // 'profil' : data.get('profil'),
    }

    contacts.push(contact);
    renderListView()
 })

// Afiicher la liste  
 function renderListView() {
    listView.innerHTML = ''

    for (const contact of contacts) {
         let temp = `<div class="contact-item d-flex ">
            <div class="profil">
               <img src="img/avatar.png" alt="" width="100px" class="img-fluid rounded-circle bg-dark">
            </div>
            <div class="info flex-grow-1 ms-3">
                <h2 class="contact-name">${contact.nom + contact.prenom}</h2>
                <p class="m-0">${contact.pays}</p>
                <p class="m-0">${contact.phone}</p>
                <p class="m-0">${contact.email}</p>
                <p class="m-0">${contact.genre} <span>${contact.age} ans</span></p>
            </div>
            <div class="actions">
                <button class="btn btn-secondary">
                <i class="bi bi-pencil-square"></i>
            </button>
            <button class="btn btn-danger">
                <i class="bi bi-trash"></i>
            </button>
         </div>
       </div>
         `
            
         listView.innerHTML += temp


    }
}

renderListView()