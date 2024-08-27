<template>
  <div class="home">
     <div class="homeInfo">
        <h2>Eat Sleep Jeans Repeat</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo.</p>
          <p v-if="visibility === true" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque sed ligula vel iaculis. Vestibulum porttitor felis sed ipsum euismod accumsan. Pellentesque ac gravida mauris, at sollicitudin lacus. Pellentesque mollis augue nec massa pharetra posuere. Donec odio sem, cursus in accumsan non, sagittis at est.
          </p>
          <button class="btn" @click="visibility = !visibility">Know More</button>
     </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      visibility: false,
    };
  },
};
</script>

<style>
   .home{
     background-color: #e6eeff;
     height:590px;
     width:100%;
     display:flex;
     justify-content:center;
     align-items:center;
   }
   .home .homeInfo{
     width:80%;
     text-align:center;
   }

   .home .homeInfo h2{
     font-size:55px;
     font-weight:bold;
     color:red;
   }

   .home .homeInfo p{
    font-size:18px;
    padding:12px 0px;
    font-weight:600;
   }

  .home .homeInfo .btn {
  background-color: #fa5a20;
  margin-top: 30px;
  color: #fff;
  padding: 12px 25px;
  border: none;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.5s all;
}

.home .homeInfo .btn:hover{
    background-color: black;
}

   
   
</style>