
      function loadData(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>displayData(data))
      }

      function displayData(data){
        const mainContainer=document.getElementById("main_container")
        for(let user of data){
            const li=document.createElement("li")
            li.innerText=user.name
            mainContainer.appendChild(li)
        }
      }