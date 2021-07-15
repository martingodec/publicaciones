//const fetch = require('node-fetch');

const categorias = document.getElementById('categorias');
categorias.addEventListener('keyup', (event)=>{

   fetch(`https://api.mercadolibre.com/sites/MLA/domain_discovery/search?limit=5&q=${event.path[0].value}`)
    .then(res => res.json())
    .then(json => {console.log(json[0].category_id + " " + json[0].domain_name)
    
    document.querySelector('.idCategoria').innerHTML =  json[0].category_id + " " + json[0].domain_name;
    
    
    } );


});

document.getElementById('titulo').onkeyup = function(){
  
  
  
   if(!tituloLength(this.value)) alert("Mucho texto");

};

function tituloLength(value){
   var maxLength = 59;
   let i = 0;
   if(value.length > maxLength) { return false;}
   return true;
}
