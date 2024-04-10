import { reactive } from 'vue'

export 
const store = { 

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
  ]
}

const fontAwesome = {
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
  ]
}