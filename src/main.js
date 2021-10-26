let cep = document.getElementById('cep')
let itens = []

const showData = result => {
    for (const campo in result){
        if (document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = result[campo]
        }
    }
}

cep.addEventListener('blur', (e) => {
    
    let search = cep.value.replace("-","")
    const url = `https://viacep.com.br/ws/${search}/json/`
    const option = {
        method: 'get',
        mode: 'cors',
        cache: 'default'
    }

    fetch(url, option)
        .then(response => { response.json()
            .then(data => {
                console.log(showData(data))
            })
     }).catch(error => {
       console.log('Deu erro=>', error)
     })
    
})


