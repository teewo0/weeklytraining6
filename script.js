// console.log(' I ');
// console.log(' code ');
// console.log(' in javascript ');

// console.log(' I ');

// setTimeout(() => {
//     console.log(' code ')
// }, 2000);

// console.log(' in javascript ');





// fetch('https://randomuser.me/api/?results=10')
// .then(res => {
//     return res.json();
// })
// .then(data => {
//     console.log(data);
//     let candidates = data.results;
//     return candidates.map(function (candid) {
//         console.log(candid);
//     })
// })
// .catch(function (error) {
//     console.log(error);
// })





const ul = document.querySelector('#candidates')

fetch('https://randomuser.me/api/?results=10')
.then((resp) => resp.json())
.then(function (data) {
    let users = data.results;
    // console.log(data.results);
    console.log(users);
    return users.map((user) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const p = document.createElement('p');
        
        
        ul.appendChild(li);
        let paragraph = li.appendChild(p);
        let image = li.appendChild(img);
        
        
        let firstName = user.name.first;
        let lastName = user.name.last;


        paragraph.innerHTML = `${firstName} ${lastName}`;
        image.src = user.picture.large;
        

    });
})
.catch(function (error) {
    console.log(error);
});