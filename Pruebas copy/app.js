
const listado = document.getElementById('listado')
const boton = document.getElementById('btn')


boton.addEventListener('click', () => {


fetch('./datos.json')
    .then( (response) => response.json())
    .then( (data) => {
        data.forEach((post) => {

            const tr = document.createElement('tr');
            
            tr.innerHTML = `<td><h3> ${post.codigo}</h3></td>
                            <td><h3> ${post.producto}</h3></td>
                            <td><h3> ${post.precio}</h3></td>`
            listado.appendChild(tr);

        });
    })

})
