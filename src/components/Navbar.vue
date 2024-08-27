<template>
  <div class="navbar">
    <div class="navTitle">
      <h2>Spykar</h2>
    </div>
    <div class="navData">
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/about" class="link">About</router-link>
      <router-link to="/product" class="link">Product</router-link>
      <router-link to="/review" class="link">Review</router-link>
      <router-link to="/contact" class="link">Contact</router-link>
      <div class="icon">
        <router-link to="/cart" class="link"><i class="fas fa-shopping-cart" ></i></router-link>
      </div>
    </div>
     
    
  </div>
  
</template>

<script>

</script>


<style>
.navbar {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 7.5vh;
  background-color: rgba(25, 41, 41, 0.5);
  align-items: center;
}
.navbar .navTitle {
  width: 20%;
}
.navbar .navTitle h2{
    color:red;
    font-size: 28px;
    cursor:pointer;
}

.navbar .navData {
  display: flex;
  flex-direction: row;
  gap: 80px;
}

.navbar .navData .link {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
}

.navbar .icon i{
    color:#fff;
    padding:6px 0;
    cursor:pointer;
    font-size:18px;
}





</style>