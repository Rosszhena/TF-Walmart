<<<<<<< HEAD
renderInfo = (data) => {
    const container = document.getElementById('cardAsociado');
    document.getElementById('btnTwitter').addEventListener('click', (event) => {

        let result = '';
        for (const prop in data) {

            let message = `${data[prop].text}`;
            const re = /.{3}-.{7}-.{7}/g;
            const searchT = message.match(re)
                //console.log(searchT);
                //console.log(message);

            if (searchT != null) {
                var array1 = [];
                result += `<div class="card">
                             <div class="info">
                             <p>Id: ${data[prop].id}</p> 
                             <p>Name: ${data[prop].user.name}</p>
                             <img src="${data[prop].user.biggerProfileImageURL}" alt="Smiley face" height="42" width="42">
                                <p>Name: ${data[prop].user.name}</p>
                                <p>Name: ${data[prop].followers}</p> 
=======
renderInfo = data => {
  const container = document.getElementById("cardAsociado");

    let result = "";
    for (const prop in data) {
      let message = `${data[prop].text}`;
      const re = /.{3}-.{7}-.{7}/g;
      const searchT = message.match(re);
      //console.log(searchT);
      // console.log(message);
      const getDate = `${data[prop].createdAt}`;
      const date = getDate.slice(0, 10);
      const hour = getDate.slice(11, 16);
      console.log('date ', date)
      if (searchT != null) {
        result += `<div class="col s12">
        <div class="col s12">
        <div class="card horizontal">
          <div class="card-image">
            <img src="${
              data[prop].user.originalProfileImageURL
            }">
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <h5 class="user">@${data[prop].user.screenName}</h5> 
              <p class="date">${hour}  ${date} </p> </br>
              <b><p class="font">${data[prop].text}</p></b></br>
              <input type="text" id="myTextResponse" value="" placeholder="Escribe tu respuesta" class="inp"> 
              <a class='btn-delete send' data-message="${data[prop].id}"><i class="fab fa-telegram-plane"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>`;
      }; 
      container.innerHTML = result;

      if (container != "") {
        let elementsDelete = document.getElementsByClassName("btn-delete");
        for (let i = 0; i < elementsDelete.length; i++) {
          //console.log(elementsDelete[i]);
          elementsDelete[i].addEventListener("click", e => {
            let key = e.target;
            let keyDataDelete = key.getAttribute("data-message");
            console.log(keyDataDelete);
          });
        }
      }
    }
};

tweetResponse = () => {
  console.log("funcion tweetResponse");
};

renderInfo()


/*
document.getElementsByClass('btn-delete').addEventListener('click', (event) => {


    //container.innerHTML = '';
    console.log("prueba");

})*/

/*
`<div class="col s12 m6">
                             <div class="card blue-grey darken-1">
                             <p>Id: ${data[prop].id}</p> 
                                <img src="${data[prop].user.biggerProfileImageURL}" alt="Smiley face" height="42" width="42">
                                <p>Name: ${data[prop].user.name}</p> 
>>>>>>> upstream/master
                                <p>Twitte: ${data[prop].text}</p>
                                
                                <p>Fecha: ${data[prop].hashtagEntities.text}</p>
                                <input type="text" id="myTextResponse" value="Some text...">
                                <a class='btn-send' data-message="${data[prop].user.screenName}, ">Try it</a>
                             </div>
                         </div>`
<<<<<<< HEAD
            }
            container.innerHTML = result;
            if (container != '') {
                let elementsTweets = document.getElementsByClassName('btn-send');
                for (let i = 0; i < elementsTweets.length; i++) {
                    // console.log(elementsTweets[i]);
                    elementsTweets[i].addEventListener('click', e => {
                        let key = e.target;
                        let keyData = key.getAttribute("data-message");
                        console.log(keyData)
                        tweetResponse(keyData);
                    });
                };

            }
        }
    });
}

tweetResponse = (keyData) => {
    console.log("funcion tweetResponse")
    console.log(keyData)

    var url = 'https://wmt-laboratoria.herokuapp.com/tweets';
    var data = "En seguimiento a tu pedido @" + keyData;


    fetch(url, {
            method: 'POST',
            body: data, // data can be `string` or {object}!
            headers: {
                'Content-Type': 'text/plain'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

}
=======
*/


/*
renderInfo = data => {
  const container = document.getElementById("cardAsociado");
  document.getElementById("btnTwitter").addEventListener("click", event => {
    let result = "";
    for (const prop in data) {
      let message = `${data[prop].text}`;
      const re = /.{3}-.{7}-.{7}/g;
      const searchT = message.match(re);
      //console.log(searchT);
      // console.log(message);
      const getDate = `${data[prop].createdAt}`;
      const date = getDate.slice(0, 10);
      const hour = getDate.slice(11, 16);
      console.log('date ', date)

      if (searchT != null) {
        result += `<div class="col s12">
                             <div class="col s12">
                             <div class="card horizontal">
                               <div class="card-image">
                                 <img src="${
                                   data[prop].user.biggerProfileImageURL
                                 }">
                               </div>
                               <div class="card-stacked">
                                 <div class="card-content">
                                   <h5>${data[prop].user.name}</h5> 
                                   <p>${date} ${hour}</p> 
                                   <p>${data[prop].text}</p>
                                   <input type="text" id="myTextResponse" value="" placeholder="Responde">
                                    <a class='btn-delete' data-message="${data[prop].id}">Try it</a>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>`;
      }
      container.innerHTML = result;
      if (container != "") {
        let elementsDelete = document.getElementsByClassName("btn-delete");
        for (let i = 0; i < elementsDelete.length; i++) {
          //console.log(elementsDelete[i]);
          elementsDelete[i].addEventListener("click", e => {
            let key = e.target;
            let keyDataDelete = key.getAttribute("data-message");
            console.log(keyDataDelete);
          });
        }
      }
    }
  });
};

tweetResponse = () => {
  console.log("funcion tweetResponse");
};


*/
>>>>>>> upstream/master
