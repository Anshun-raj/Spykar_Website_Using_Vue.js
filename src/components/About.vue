<template>
  <div class="about">
    <h2 class="title">About<span> Us</span></h2>
     <div class="aboutInfo">
        <div class="aboutLeft">
           <img src="../assets/aboutImg.jpg" alt=""/>
        </div>
        <div class="aboutRight">
         <h3>Quality Is Remembered Long After Price Is Forgotten</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            nihil inventore error provident at natus placeat, quia est unde
            adipisci consectetur voluptatibus assumenda.
          </p>
          <p v-if="visibility === true" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            nihil inventore error provident at natus placeat, quia est unde
            adipisci consectetur voluptatibus assumenda."</p>
          <div class="achieve">
            <div class="quality">
              <img src="../assets/about4.jpeg" />
              <h5>Best Quality</h5>
            </div>
            <div class="award">
              <img src="../assets/about6.jpeg" />
              <h5>Award Winning</h5>
            </div>
          </div>
          <button class="btn" @click="visibility = !visibility">Read More</button>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      visibility: false,
      ReadMore:true,
    };
  },

};
</script>

<style>
   .about{
      background-color: #e6eeff;
      width: 100%;
      height:590px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
   }
   .about .title{
      text-align: center;
      padding: 12px 0;
      font-weight: bold;
      font-size: 34px;
      color: red;
   }

   .about .aboutInfo{
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: row;
    gap: 200px;
    align-items: center;
   }

   .about .aboutInfo .aboutLeft{
      width: 50%;
   }

   .about .aboutInfo .aboutLeft img{
      width: 450px;
      border-radius: 5px;
      cursor: pointer;
   }

   .about .aboutInfo .aboutRight{
      width: 50%;
   }
   .about .aboutInfo .aboutRight h3 {
  font-size: 34px;
  color: red;
}

.about .aboutInfo .aboutRight p {
  font-size: 17px;
  line-height: 1.2;
  font-weight: 400;
  color: rgb(118, 118, 118);
  padding: 10px 0;
}

.about .aboutInfo .aboutRight .achieve {
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.about .aboutInfo .aboutRight .achieve .quality {
  width: 120px;
  height: 120px;
  background-color: rgb(120, 74, 245);
  text-align: center;
  padding: 20px 0;
}

.about .aboutInfo .aboutRight .achieve .quality h5 {
  font-size: 16px;
  color: #fff;
}

.about .aboutInfo .aboutRight .achieve .quality img {
  width: 50px;
}

.about .aboutInfo .aboutRight .achieve .award {
  width: 120px;
  height: 120px;
  background-color: rgb(120, 74, 245);
  text-align: center;
  padding: 20px 0;
}

.about .aboutInfo .aboutRight .achieve .award h5 {
  font-size: 16px;
  color: #fff;
}

.about .aboutInfo .aboutRight .achieve .award img {
  width: 50px;
}

.about .aboutInfo .aboutRight .btn {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  background-color: black;
  color: #fff;
  cursor: pointer;
  transition: 0.5s all;
}

.about .aboutInfo .aboutRight .btn:hover{
    background-color: red;
}


</style>