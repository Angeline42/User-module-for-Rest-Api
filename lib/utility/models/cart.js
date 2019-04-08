var items = [];
var total = 0;
module.exports  = {
       additem: function(item){
           var product = {};
              product.name = item.name  || "";
              product.price  = item.price  || 0;
              product.quatity = item.quatity  || 0;
        
              items.push(item);
       }  ,

  getitem: function(){
   items.forEach((item,index) => {
    console.log(item.name + " "+ item.price);
    console.log(index);
   });

  }

};


