let booksData = [
  {
    title: 'Harry Potter',
    opinion: 10,
    release: '06/26/1997'
  },
  {
    title: 'Jogos Vorazes',
    opinion: 7,
    release: '12/08/2011'
  },
  {
    title: 'A menina que roubava livros',
    opinion: 8,
    release: '10/16/2005'
  },
  {
    title: 'Percy Jackson',
    opinion: 9.3,
    release: '06/28/2005'
  }
]



$('th').on('click', function () {
  let column = $(this).data('column')
  let order = $(this).data('order')
  

  //let test = $(this)[0].children[0]

  //let icon = document.querySelector('i')
  //console.log(icon, test)

  let icon = (this).querySelector('i')

  console.log(icon)

  if (order == 'desc') {
    $(this).data('order', 'asc')
    booksData = booksData.sort((a, b) => (a[column] > b[column] ? 1 : -1))
    icon.classList.remove('icon-arrow-up')
    icon.classList.add('icon-arrow-down')
  } else {
    $(this).data('order', 'desc')
    booksData = booksData.sort((a, b) => (a[column] < b[column] ? 1 : -1))
    icon.classList.remove('icon-arrow-down')
    icon.classList.add('icon-arrow-up')
  }

  exibirDadosNaTabela(booksData)
})

function exibirDadosNaTabela(data) {
  let table = document.getElementById('myTable')
  table.innerHTML = ``

  for (let i = 0; i < data.length; i++) {
    let row = `
                <tr>
                  <td>${data[i].title}</td>
                  <td>${data[i].opinion}</td>
                  <td>${data[i].release}</td>
                </tr>`
    table.innerHTML += row
  }
}

exibirDadosNaTabela(booksData)