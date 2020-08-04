class localStorage {
  constructor() {
    this.city 
    this.state 
    this.default = {
      city:'Miami',
      state:'Fl'
    }
  }
  getLocationData() {
    if(localStorage.getItem('city')  === null){
      this.city =this.default.city
    }
    else {
      this.city = localStorage.getItem('city')
    }

    if(localStorage.getItem('state')  === null){
      this.state =this.default.state
    }
    else {
      this.state = localStorage.getItem('state')
    }
  }

  setLocationData(city, state) {
    localStorage.setItem('city',city)
    localStorage.setItem('state',state)
  }
}