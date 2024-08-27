<template>
  <div>
    <Navbar />
    <router-view />
    <Footer/>
    
   
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./components/Product.vue";
import Cart from "./components/Cart.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  data:()=>{
    return{
      cart:[],
    }
  },
 
};
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Courier New", Courier, monospace;
}
</style>