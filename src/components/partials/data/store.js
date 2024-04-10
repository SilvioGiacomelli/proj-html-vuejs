import { reactive } from 'vue'

export

const store = reactive({ 

  menuItems:[
    { 
      id: 1, 
      text: 'Home', 
      link: '#home' 
  },
    { 
      id: 2, 
      text: 'Meet The Band', 
      link: '#meet-the-band' 
  },
    { 
      id: 3, 
      text: 'Live Dates', 
      link: '#live-dates' 
  },
    { 
      id: 4, 
      text: 'Latest News', 
      link: '#latest-news' 
  },
    { 
      id: 5, 
      text: 'Albums', 
      link: '#albums' 
  },
    { 
      id: 6, 
      text: 'Fans', 
      link: '#fans' 
  },
  ],
   
  icons: [
    { 
      id: 1, 
      font: 'fa-facebook-f', 
      link: 'https://www.facebook.com/' 
    },
    { 
      id: 2, 
      font: 'fa-twitter', 
      link: 'https://twitter.com/' 
    },
    { 
      id: 3, 
      font: 'fa-instagram', 
      link: 'https://www.instagram.com/' 
    },
    { 
      id: 4, 
      font: 'fa-youtube', 
      link: 'https://www.youtube.com/' 
    },
  ],
  
  
  accordionData: [
  {
    date: "17/08/2020",
    name: "GEM FESTIVAL 2020",
    location: "ANAKALIA, GEORGIA",
    imgSrc: "Anakalia.png",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula nulla nec nibh consequat, sit amet convallis purus efficitur."
  },
  {
    date: "24/9/2020",
    name: "GROOVEFEST",
    location: "DOMINICAL REPUBLIC",
    imgSrc: "Dominical.png",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, reprehenderit! Pariatur eveniet praesentium, iste ipsam ad voluptatem beatae omnis quis sequi? Modi sapiente, excepturi distinctio aliquam ad voluptate aspernatur debitis nihil atque, vel ipsa repellat eveniet deserunt tempora nobis dolorum?"
  },
  {
    date: "31/10/2020",
    name: "OASIS FESTIVAL 2020",
    location: "MARRAKECH, MOROCCO",
    imgSrc: "Marrakech.png" , 
    content: "Lorem ipsum dolor sit amet, Modi sapiente, excepturi distinctio aliquam ad voluptate aspernatur debitis nihil atque, vel ipsa repellat eveniet deserunt tempora nobis dolorum?consectetur adipiscing elit. Sed vehicula nulla nec nibh consequat, sit amet convallis purus efficitur."
  },
  {
    date: "07/11/2020",
    name: "MOGA FESTIVAL 2020",
    location: "ESSAOURIA, MOROCCO",
    imgSrc: "Essaouira.png",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula nulla nec nibh consequat, sit amet convallis purus efficitur spernatur debitis nihil atque, vel ipsa repellat eveniet deserunt tempora nobis dolorum?c."
  },
  {
    date: "10/12/2020",
    name: "ENVISION FESTIVAL",
    location: "UVITA, COSTA RICA",
    imgSrc: "Uvita.png",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula nulla nec nibh consequat, sit amet convallis purus efficitur praesentium, iste ipsam ad voluptatem beatae omnis quis sequi?."
  }
  ]
});
