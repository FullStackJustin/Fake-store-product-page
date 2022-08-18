fetch('https://fakestoreapi.com/products')
            .then((res)=> {
                return res.json()
            }).then((completeData) => {
                let data1 = "";
                completeData.map((values)=>{
                    data1 +=`<div class="card">
                    <h1 class="title">${values.title}}</h1>
                    <img src="${values.image}" alt="img"/>
                    <p>${values.description}</p>
                    <p class="category">${values.category}</p>
                    <p class="price">${values.price}</p>
                </div>`
                });
                document.getElementById('cards').innerHTML = data1;
            }).catch((err) => {console.log(err)});
                // console.log(completeData[2].title)
                // document.getElementById('root').innerHTML=completeData[2].title
