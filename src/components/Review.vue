<template>
    <div class="review">
      <h2 class="title">Reviewers</h2>
      <div class="reviewInfo">
        <div class="reviewCard">
          <img src="../assets/review2.jpg" alt="" />
          <h4>Shawn Micheal</h4>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <div class="socialIcon">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-pinterest"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
          </div>
          <button>Know More</button>
        </div>
        <div class="reviewCard">
          <img src="../assets/review2.jpg" alt="" />
          <h4>Dwarne Johnson</h4>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <div class="socialIcon">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-pinterest"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
          </div>
          <button>Know More</button>

        </div>
        <div class="reviewCard">
          <img src="../assets/review3.jpg" alt=""/>
          <h4>Roman Reign</h4>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half"></i>
          </div>
          <div class="socialIcon">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-pinterest"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
          </div>
          <button>Know More</button>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "Review",
};
</script>

<style>
    .review{
      background-color: #e6eeff;
      width: 100%;
      height:590px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
   }
   .review .title{
      text-align: center;
      padding: 12px 0;
      font-weight: bold;
      font-size: 34px;
      color: red;
   }
   .review .reviewInfo {
  width: 85%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.review .reviewInfo .reviewCard {
  width: 350px;
  height: 440px;
  background-color: rgb(227, 224, 224);
  text-align: center;
  display: block;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
}

.review .reviewInfo .reviewCard img{
  border-radius: 5px;
  margin: 20px 0;
}

.review .reviewInfo .reviewCard h4 {
  color: red;
  font-size: 24px;
  padding: 10px 0;
}

.review .reviewInfo .reviewCard .rating {
  padding: 5px 0;
  display: flex;
  gap: 10px;
  justify-content: center;
  font-size: 18px;
}
.review .reviewInfo .reviewCard .socialIcon {
  padding: 15px 0;
  display: flex;
  gap: 10px;
  justify-content: center;
  font-size: 18px;
}

.review .reviewInfo .reviewCard .socialIcon i {
  border: 2px solid red;
  padding: 5px;
  border-radius: 5px;
  transition: 0.5s all;
}

.review .reviewInfo .reviewCard .socialIcon i:hover{
  background-color: #fff;
  color: red;
}

.review .reviewInfo .reviewCard button{
  padding: 11px 12px;
  font-weight: bold;
  border: none;
  border-radius: 2px;
  background-color: red;
  cursor: pointer;
  font-size: 16px;
  margin: 8px 0;
  color: #fff;
  transition: 0.5s all;
}
.review .reviewInfo .reviewCard button:hover{
  background-color: rgb(1, 179, 249);
}
</style>