<template>
  <div class="contact">
    <h2 class="title">Contact Us</h2>
    <div class="contactInfo">
      <form>
          <fieldset>
            <input type="text" placeholder="enter your name" />
            <input type="email" placeholder="enter your email" />
            <input
              type="number"
              placeholder="enter your age"
              max="50"
              min="18"
            />
            <input type="number" placeholder="enter your number"/>
            <input type="text" placeholder="message" />
            <button type="submit">Submit</button>
          </fieldset>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style>
    .contact{
      background-color: #e6eeff;
      width: 100%;
      height:590px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
   }
   .contact .title{
      text-align: center;
      font-weight: bold;
      font-size: 34px;
      color: red;
   }
   .contact .contactInfo form {
  width: 500px;
  margin: 75px 0;
  text-align: center;
}

.contact .contactInfo form input {
  width: 90%;
  height: 4.5vh;
  margin: 15px;
}

.contact .contactInfo form input::placeholder{
    padding: 0 5px;
}

.contact .contactInfo form button {
  display: block;
  position: relative;
  left: 41%;
  margin: 15px 0;
  padding: 8px 20px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  background-color: red;
  color: #fff;
  transition: 0.5s all;
}

.contact .contactInfo form button:hover{
   color: red;
   background-color: black;
}

</style>