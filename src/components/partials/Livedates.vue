<script>
  import AnakaliaImage from '../../assets/images/maps/Anakalia.png';
  import DominicalImage from '../../assets/images/maps/Dominical.png';
  import MarrakechImage from '../../assets/images/maps/Marrakech.png';
  import EssaouiraImage from '../../assets/images/maps/Essaouira.png';
  import UvitaImage from '../../assets/images/maps/Uvita.png';
  export default {
    data() {
      return {
        accordionData: [
        {
          date: "17/08/2020",
          name: "GEM FESTIVAL 2020",
          location: "ANAKALIA, GEORGIA",
          imgSrc: AnakaliaImage,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula nulla nec nibh consequat, sit amet convallis purus efficitur."
        },
        {
          date: "24/9/2020",
          name: "GROOVEFEST",
          location: "DOMINICAL REPUBLIC",
          imgSrc: DominicalImage,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula nulla nec nibh consequat, sit amet convallis purus efficitur."
        },
        {
          date: "31/10/2020",
          name: "OASIS FESTIVAL 2020",
          location: "MARRAKECH, MOROCCO",
          imgSrc: MarrakechImage , 
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula nulla nec nibh consequat, sit amet convallis purus efficitur."
        },
        {
          date: "07/11/2020",
          name: "MOGA FESTIVAL 2020",
          location: "ESSAOURIA, MOROCCO",
          imgSrc: EssaouiraImage,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula nulla nec nibh consequat, sit amet convallis purus efficitur."
        },
        {
          date: "10/12/2020",
          name: "ENVISION FESTIVAL",
          location: "UVITA, COSTA RICA",
          imgSrc: UvitaImage,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula nulla nec nibh consequat, sit amet convallis purus efficitur."
        }
        ]
      }
    },
    methods: {
      vaiAiTour() {
      window.open('https://rollingstones.com/tour//', '_blank');
    }
    }
  }
</script>

<template>
<div class="container-fluid total">
    <div class="row">
      <div class="col-12">
        <h2 class="text-center">Live Dates</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="grey-bar"></div>
        <div class="container text-center">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam iusto nemo itaque commodi similique recusandae voluptatibus nam reprehenderit labore dolorum quae, impedit facere modi incidunt voluptas assumenda! Consequatur ad dicta adipisci? Alias minus dolore molestiae?</p>         
        </div>
      </div>
    </div>
    <div class="container mb-5">
      <div class="row">
        <div class="col-12">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item" v-for="(item, index) in accordionData" :key="index">
              <h2 class="accordion-header" :id="`flush-heading${index}`">
                <button 
                class="accordion-button collapsed" 
                type="button" 
                data-bs-toggle="collapse" 
                :data-bs-target="`#flush-collapse${index}`"
                aria-expanded="false" 
                :aria-controls="`flush-collapse${index}`">
                  <p class="acc-text"> {{ item.date }} {{ item.name }} {{ item.location }} </p>
                </button>
              </h2>
              <div 
              :id="`flush-collapse${index}`" 
              class="accordion-collapse collapse" 
              :aria-labelledby="`flush-heading${index}`" 
              data-bs-parent="#accordionFlushExample">
                <div class="accordion-body d-flex"> 
                  <img :src="item.imgSrc" :alt="`Image of ${item.name}`">
                  <div class="testo">
                    <h4> {{ item.name }} </h4>
                    <span> {{ item.content }} </span>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div 
    class="dates d-flex align-items-center justify-content-center"
    @click="vaiAiTour">
      <h3>VIEW ALL LIVE DATES</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/partials/_variables.scss';

.total {
  min-height: 100%;
  background-color: $livedates-bg;
  color: white;

  h2 {
    margin-top: 4%;
    font-size: 6rem;
    font-weight: bolder;
  }

  p {
    font-size: 2rem;
    margin: 0 20%;
    color: $livedates-text-grey;
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

// Stili Accordion
.accordion-button {
  background-color: #323844;
  color: white;
  position: relative;
  border: none;
  font-weight: bold;
  text-align: left;
  padding-left: 2rem;
  p{
    color: $livedates-text;
  }

  &:hover {
    background-color: lighten(#323844, 5%);
  }

  &::before {
    content: '+'; 
    position: absolute;
    left: 0.5rem; 
    top: 50%;
    transform: translateY(-50%); 
    color: white; 
    width: 1.5rem; 
    height: 1.5rem; 
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -2px; 
  }


  &:not(.collapsed)::before {
    
    content: '-';
    background-color: $livedates-text;
  }
}

.accordion-item {
  background-color: #323844;
  .accordion-header {
    .accordion-button {
      padding-left: 32px;       
      border-bottom: none;
    }
  }

  .accordion-collapse {
    background-color: #323844;
    color: white;
  }

}

.accordion-body {
  padding: 1rem;
  border-top: none; 
}

.testo {
  margin-left: 5%;
  color: $livedates-text-grey;

  h4 {
    margin-top: 0;
    color: white;
    font-size: 2rem;
    font-weight: bold;
  }

  span {
    font-size: 1rem;
  }
}


.dates {
  background-color: $news-background;
  height: 300px;
  cursor: pointer;

  &:hover {
    background-color: white;

    h3 {
      color: black;
    }
  }

  h3 {
    font-size: 2rem;
    color: white;
    margin: 0; 
  }
}

</style>