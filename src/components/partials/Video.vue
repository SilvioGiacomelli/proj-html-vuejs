<script>
  export default {    
  }
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex align-items-center justify-content-center flex-column">
        <p class="text-center"> <em>"I just listened to it and said to myself, "Man, Ireally love this <br>album.""Still, today, it just sounds so fresh. It sounds full od ideas. <br>These guys knew what they were doing. They're good. And they're <br>inventive. I haven't heard anything this year that's as inventive. I <br>don't really expect to."</em></p>
        <img 
        src="../../assets/images/band_interview_play_icon.png" 
        class="my-5 play">
      </div>
    </div>
    
  </div>
</template>


<style lang="scss" scoped>
@import '../../assets/scss/partials/_variables.scss';

.container-fluid{
  background-image: url(../../assets/images/home-testimonial-parallax.jpg);
  background-size: cover;
  background-repeat:no-repeat;
  background-position: center;
  width: 100%;
  min-height: 1000px;
  p{
    color: white;
    font-size: 2rem;
    margin-top: 10%;}
}

.play{
  width: 100px;
  height: 100px;
  cursor: pointer;
}
</style>s