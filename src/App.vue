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
  font-family: Arial, Helvetica, sans-serif;
}
</style>