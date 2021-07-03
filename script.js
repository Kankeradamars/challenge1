window.addEventListener('load',()=>{
    
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
        .then(response => response.json())
        .then(result => renderData(result))
        .catch(error => console.log('error', error));
})



const renderData = (data) => {
    const cardcontainer = document.querySelector("#cardcontainer");

    let card ='';
    const html = data.map((user,index) => {

      card = `
         
              <div class="user">
                  <div class="users__item">
                      <h3>${user.name}</h3>
                      <h4>${user.email} </h4>
                      
                  </div>
                  <a href="./index.html"><div class="card">
                  <button class='postbtn' datauserid=${user.id} data-user-name=${user.email}>view post</button >
              </div>
       
          `;
    cardcontainer.innerHTML += card;
        }
    
    
    
    );


  };