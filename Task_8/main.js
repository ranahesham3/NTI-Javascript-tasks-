const display = document.getElementById('display');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((result) => {
        return result.json();
    })
    .then((data) => {
        data.forEach((el) => {
            const post = document.createElement('div');
            post.style = 'background-color:white';
            post.classList.add('single-line');
            post.innerHTML = `<h3>${el.title}</h3>`;
            post.innerHTML += el.body;

            post.addEventListener('mouseover', () => {
                post.classList.remove('single-line');
            });
            post.addEventListener('mouseout', () => {
                post.classList.add('single-line');
            });

            display.appendChild(post);
        });
    })
    .catch((err) => {
        // console.log(err);
        throw new Error(err);
    });
