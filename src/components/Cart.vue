<template>
   <div class="cart">
    <h2 class="title">Cart</h2>
    <div class="cartInfo">
      <div v-for="(product,index) in getCart.products" :key="index" class="cartList">
        <img :src="product.image"/>
         <h3>{{product.name}}</h3>
         <h4>{{ product.price}}</h4>
         <button v-on:click="deleteProduct(product.id)">Remove</button>
    </div>
    </div>
   </div>
   
</template>

<script>
   import { mapGetters, mapActions } from "vuex";
export default {
   name: 'Cart',
   methods: {
     ...mapActions(['deleteProduct']),
     
   },
   computed: {
     ...mapGetters(['getCart']),
     
   }
}
</script>

<style>
   .cart{
    background-color: #e6eeff;
      width: 100%;
      height:590px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
   }
   .cart .title{
      text-align: center;
      padding: 12px 0;
      font-weight: bold;
      font-size: 34px;
      color: red;
   }
   .cart .cartInfo{
    width: 85%;
    min-height: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  .cart .cartInfo .cartList{
    width: 350px;
    height: 440px;
    background-color: rgb(225, 224, 224);
    text-align: center;
    display: block;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
  }

  .cart .cartInfo .cartList img{
    border-radius: 5px;
    margin: 20px 0;
  }

  .cart .cartInfo .cartList h4 {
    color: red;
    font-size: 24px;
    padding: 10px 0;
  }

  .cart .cartInfo .cartList h5{
    color: #000;
    font-size: 24px;
    padding: 10px 0;
  }

  .cart .cartInfo .cartList button{
    margin: 12px 0;
    border: none;
    padding: 11px 16px;
    font-weight: bold;
    background-color: red;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
  }

</style>