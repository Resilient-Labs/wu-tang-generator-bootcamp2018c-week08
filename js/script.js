const form = document.querySelector("form")
const result = document.querySelector("#a")

class wuMember {
  constructor(q1, q2, q3, q4, q5){
    this.q1 = q1
    this.q2 = q2
    this.q3 = q3
    this.q4 = q4
    this.q5 = q5
    this.wuNames = [
      ["ES6-God", "Object Oriented Bastard", "Dirty-Object Model", "Arraykwon"],
      ["Git-ZA","Immutable Mastermind","Function Man","Infinite Looper"],
      ["Ghost Class","Constructor Destroyer","Int Returner","Void Killah"],
      ["Dynamic Ambassador","Static Gambino","Server Magician","Killer Android"]
    ]
    this.name = "";
  }
  describe(){
    return `These were your answers: ${this.q1}, ${this.q2}, ${this.q3}, ${this.q4}, ${this.q5}... Resulting in ${this.name} `
  }

  q4G(){
    if(this.q4 == "excercise"){
      if(this.q5 == "yes"){
        return this.name[1]
      }else if(this.q5 == "no"){
        this.name = this.wuNames[Math.floor(Math.random()*4)]
        return this.name[Math.floor(Math.random()*4)]
      }
    }else if (this.q4 == "watch") {
      if(this.q5 == "yes"){
        return this.name[3]
      }else if(this.q5 == "no"){
        this.name = this.wuNames[Math.floor(Math.random()*4)]
        return this.name[Math.floor(Math.random()*4)]
      }
    }else if (this.q4 == "paint") {
      if(this.q5 == "yes"){
        return this.name[0]
      }else if(this.q5 == "no"){
        this.name = this.wuNames[Math.floor(Math.random()*4)]
        return this.name[Math.floor(Math.random()*4)]
      }
    }else if (this.q4 == "music") {
      if(this.q5 == "yes"){
        return this.name[2]
      }else if(this.q5 == "no"){
        this.name = this.wuNames[Math.floor(Math.random()*4)]
        return this.name[Math.floor(Math.random()*4)]
      }
    }
  }

  wuGen(){
    if(this.q1 == "javascript" ){
      this.name = this.wuNames[0]
      return this.q4G()

    }else if (this.q1 == "python") {
      this.name = this.wuNames[1]
      if(this.q2 == "front"){
        this.name = this.wuNames[0]
        return this.q4G()
      }else if(this.q2 == "back"){
        return this.q4G()
      }
    }else if (this.q1 == "c++") {
      this.name = this.wuNames[2]
      if(this.q2 == "front"){
        this.name = this.wuNames[0]
        return this.q4G()
      }else if(this.q2 == "back"){
        return this.q4G()
      }
    }else if (this.q1 == "java") {
      this.name = this.wuNames[3]
      if(this.q2 == "front"){
        this.name = this.wuNames[0]
        return this.q4G()
      }else if(this.q2 == "back"){
        return this.q4G()
      }
    }
  }
}

form.addEventListener("submit", function(e){
  e.preventDefault()

  const clan1 = new wuMember(form.r.value, form.pref.value, form.tt.value, form.dif.value, form.honest.value)

  let answer = clan1.wuGen()
  result.textContent = answer

  form.style.display = "none"
})
