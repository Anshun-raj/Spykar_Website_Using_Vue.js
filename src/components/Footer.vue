<template>
   <div class="footer">
      <h2>Created By @Anshu<span>Narayan</span></h2>
   </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
  .footer{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 7.5vh;
    background-color: rgba(25, 41, 41, 0.5);
    align-items: center;
  }

  .footer h2{
    color:#fff;
  }
  .footer span{
    color:red;
  }
</style>