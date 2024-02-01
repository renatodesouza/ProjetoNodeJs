function getUser() {
    const userData = fetch(`https://globo.com.br`)
      .then(response => response.json())
      .then(data => console.log(data.name))
   }

getUser()