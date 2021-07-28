
//Devuelve el ID de la categoria de Meli (Prodctos)
const categorias = document.getElementById("categoria");
categorias.addEventListener("keyup", (event) => {
  fetch(
    `https://api.mercadolibre.com/sites/MLA/domain_discovery/search?limit=5&q=${event.path[0].value}`
  )
    .then((res) => res.json())
    .then((json) => {
      console.log(json[0].category_id + " " + json[0].domain_name);

      document.getElementById("categoria-meli").defaultValue = json[0].category_id
    });
});


//Chequeo de los atributos de las categorias segun seleccion.

const atributoCategorias = document.getElementById("categoria-meli");
atributoCategorias.addEventListener("click", (event) => {
  fetch(
    `https://api.mercadolibre.com/categories/${event.path[0].value}/attributes`
  )
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      for(let i = 0; i < json.length ; i++) {
          if(json[i].tags.required === true ) {
        const atributeOptions = document.getElementById("atribute-options");
        console.log(json[i].name)
        //const label = document.createElement('label')

       
        if(json[i].id === "COLOR"){
          
          console.log("Entro en Main color")
          const selector = document.createElement("select");
          
          selector.className = "form-select"
          
          let = options_str='';
         
          json[i].values.forEach(colores => {
            options_str += '<option value="' + colores.id + '">' + colores.name + '</option>';
            
          });  
          selector.name = 'ColorId';
          selector.innerHTML = options_str;
         
          atributeOptions.appendChild(selector);
        } else {


        const input = document.createElement("input");
        //label.innerHTML  = json[i].name
        input.type = "text";
        input.id = json[i].id
        input.name = json[i].id
        input.placeholder = json[i].name
        input.className = "form-control"; // set the CSS class
        atributeOptions.appendChild(input); // put it into the DOM
         
      
        }
      }


          
   
         }




      }

      // continuar con la seleccion del Id de Colores

      
    
    );
});