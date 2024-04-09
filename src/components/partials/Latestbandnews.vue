<script>
import blog_music_techoImage from '../../assets/images/card/blog_music_techo.jpg';
import blog_post3Image from '../../assets/images/card/blog_post3.jpg';
import blog_post4Image from '../../assets/images/card/blog_post4.jpg';
import blog_flavor_rockImage from '../../assets/images/card/blog_flavor_rock.jpg';
import blog_post1Image from '../../assets/images/card/blog_post1.jpg';
import blog_post2Image from '../../assets/images/card/blog_post2.jpg';
export default {
  data() {
    return {
      newsItems: [
        {
          id: 1,
          title: 'Technology and music',
          text: 'Exploring how technology is changing the music industry.',
          imgSrc: blog_music_techoImage,
        },
        {
          id: 2,
          title: 'While my guitar gently weeps',
          text: 'A deep dive into the history of one of the greatest guitar solos ever recorded.',
          imgSrc: blog_post3Image,
        },
        {
          id: 3,
          title: 'It just sounds better',
          text: 'Why vinyl records still have a special place in the music lovers heart.',
          imgSrc: blog_post4Image,
        },
        {
          id: 4,
          title: 'The flavor of rock',
          text: 'Discovering the roots of rock music and its various flavors.',
          imgSrc: blog_flavor_rockImage,
        },
        {
          id: 5,
          title: 'Taking it back to the old school',
          text: 'Revisiting the classics that shaped the music of generations.',
          imgSrc: blog_post1Image,
        },
        {
          id: 6,
          title: 'Sharing the stage with a legend',
          text: 'The unforgettable experience of performing live with one of the greats.',
          imgSrc: blog_post2Image,
        }

      ]
    };
  },
  
  methods: {
    //FUNZIONE PER APRIRE LA PAGINA DELLE NEWS
    goToNewsPage() {
      window.open('https://www.rollingstone.it/musica/news-musica/', '_blank');
    }
  }
}
</script>

<template>
  <div class="container-fluid total">
    <div class="row up">
      <div class="red-bar"></div>
      <div class="col-12">
        <h2 class="text-center">Latest Band News</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="grey-bar"></div>

        <div class="container text-center my-5 ">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam iusto nemo itaque commodi similique recusandae voluptatibus nam reprehenderit labore dolorum quae, impedit facere modi incidunt voluptas assumenda! Consequatur ad dicta adipisci? Alias minus dolore molestiae?</p>
        </div>
      </div>
    </div>
    <div class="container cards pb-5 ">
      <div class="row">
        <div class="col-8 left">
          <div class="card cinquecento">
            <img class="card-img-top" :src="newsItems[0].imgSrc" :alt="newsItems[0].title">
            <div class="card-body">
              <h5 class="card-title">{{ newsItems[0].title }}</h5>
              <p class="card-text">{{ newsItems[0].text }}</p>
            </div>
          </div>
          <div class="d-flex">
            <div class="card mille">
            <img class="card-img-top" :src="newsItems[1].imgSrc" :alt="newsItems[1].title">
            <div class="card-body">
              <h5 class="card-title">{{ newsItems[1].title }}</h5>
              <p class="card-text">{{ newsItems[1].text }}</p>
            </div>
          </div>
          <div class="card mille">
            <img class="card-img-top" :src="newsItems[2].imgSrc" :alt="newsItems[2].title">
            <div class="card-body">
              <h5 class="card-title">{{ newsItems[2].title }}</h5>
              <p class="card-text">{{ newsItems[2].text }}</p>
            </div>
          </div>
          </div>
          <div class="card cinquecento">
            <img class="card-img-top" :src="newsItems[3].imgSrc" :alt="newsItems[3].title">
            <div class="card-body">
              <h5 class="card-title">{{ newsItems[3].title }}</h5>
              <p class="card-text">{{ newsItems[3].text }}</p>
            </div>
          </div>
        </div>
        <div class="col-4 right">
          <div class="card mille">
            <img class="card-img-top" :src="newsItems[4].imgSrc" :alt="newsItems[4].title">
            <div class="card-body">
              <h5 class="card-title">{{ newsItems[4].title }}</h5>
              <p class="card-text">{{ newsItems[4].text }}</p>
            </div>
          </div>
          <div class="card mille">
            <img class="card-img-top" :src="newsItems[5].imgSrc" :alt="newsItems[5].title">
            <div class="card-body">
              <h5 class="card-title">{{ newsItems[5].title }}</h5>
              <p class="card-text">{{ newsItems[5].text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div 
    class="news d-flex align-items-center justify-content-center" 
    @click="goToNewsPage">
  <h3>VIEW ALL LATEST NEWS</h3>
</div>

  </div>
</template>


<style lang="scss" scoped>
@import '../../assets/scss/partials/_variables.scss';

.total{
  background-color: $latest-bg;
  color: white;
  h2{
    margin-top: 4%;
    font-size: 4rem;
    font-weight: bolder;
    }
  p{
    font-size: 2rem;
    margin-top: 2%;
    color: $music-islife-text;
    }
  }

  .grey-bar {
  margin: 0 auto;
  background-color: $music-islife-gbar;
  width: 18%;
  height: 3px;
  margin-top: 1%;
  margin-bottom: 1%;
  }

.card {
  position: relative;
  overflow: hidden;
  margin: 1%;
  background-color: $latest-card-bg;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.4);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.5);
    z-index: 9;

    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(255, 0, 0, 0.5); 
    }

    .card-body {
      
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2; 
      opacity: 1;

      h5 {
        color: white; 
        font-size: 1.5rem; 
      }

      p {
        display: none; 
      }
    }

    img {
      opacity: 0.3; 
    }
  }
}

  .cinquecento img{
      height: 450px;
      object-fit: cover;
      transition: opacity 0.3s ease;
    }

  .mille img{
    height: 900px;
    object-fit: cover;
    transition: opacity 0.3s ease;
  }
  
  .right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .left{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .news {
  background-color: $news-background;
  height: 300px;
  cursor: pointer;

  &:hover {
    background-color: white; 
    h3 {
      color: black;
    }
  }
}

h3 {
  font-size: 2rem;
  color: white; 
}
</style>