<template>
  <div class="product">
    <h2 class="title">Our Product</h2>
     <div class="productInfo">
       <div v-for="(product,index)  in product" :key="index" class="productCard">
         <img :src="product.image"/>
         <h3>{{product.name}}</h3>
         <h4>{{ product.cost}}</h4>
         <button v-on:click="">Add To Cart</button>
       </div>
     </div>
  </div>
  
</template>

<script>
export default {
  name: "Product",
  data:()=>{
    return{
    page: "product",
     
    }
    
  },
  
  
};
</script>

<style>
   .product{
      background-color: #e6eeff;
      width: 100%;
      height:590px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
   }
   .product .title{
      text-align: center;
      padding: 12px 0;
      font-weight: bold;
      font-size: 34px;
      color: red;
   }
   .product .productInfo{
    width: 85%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .product .productInfo .productCard{
    width: 350px;
    height: 440px;
    background-color: rgb(225, 224, 224);
    text-align: center;
    display: block;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
  }

  .product .productInfo .productCard img{
    border-radius: 5px;
    margin: 20px 0;
    width: 170px;
  }

  .product .productInfo .productCard h3 {
    color: red;
    font-size: 24px;
    padding: 10px 0;
  }

  .product .productInfo .productCard h4{
      color: #000;
      font-size: 24px;
      padding: 10px 0;
  }

  .product .productInfo .productCard button{
    margin: 12px 0;
    border: none;
    padding: 11px 16px;
    font-weight: bold;
    background-color: red;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
  }
</style>