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
                result += `<div class="card">
                             <div class="info">
                             <p>Id: ${data[prop].id}</p> 
                             <p>Name: ${data[prop].user.name}</p>
                             <img src="${data[prop].user.biggerProfileImageURL}" alt="Smiley face" height="42" width="42">
                                <p>Name: ${data[prop].user.name}</p>
                                <p>Name: ${data[prop].user.screenName}</p> 
                                <p>Twitte: ${data[prop].text}</p>
                                <p>Fecha: ${data[prop].createdAd}</p>
                                <input type="text" id="myTextResponse" value="Some text...">
                                <a class='btn-send' data-message="${data[prop].id}, ">Try it</a>
                             </div>
                         </div>`
            }
            container.innerHTML = result;
            if (container != '') {
                let elementsTweets = document.getElementsByClassName('btn-send');
                for (let i = 0; i < elementsTweets.length; i++) {
                    // console.log(elementsTweets[i]);
                    elementsTweets[i].addEventListener('click', e => {
                        let key = e.target;
                        let keyDataDelete = key.getAttribute("data-message");
                        console.log(keyDataDelete)
                        tweetResponse();
                    });
                };

            }
        }
    });
}

tweetResponse = () => {
    console.log("funcion tweetResponse")
    var url = 'https://wmt-laboratoria.herokuapp.com/tweets';
    var data = "En seguimiento a tu pedido"

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



/*
document.getElementsByClass('btn-delete').addEventListener('click', (event) => {


    //container.innerHTML = '';
    console.log("prueba");

})*/