import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent implements OnInit {


  ngOnInit(): void {
    this.getData()
    this.getLitre()
    


    if(!localStorage.getItem("previousOne") && !localStorage.getItem("currentOne")) {
      const containerAll:any = document.getElementById('containerAll')


      containerAll.style.opacity = "0.3"
      containerAll.style.zIndex = "-1"

      this.inputConditionEvent()


  } else {
    const containerAll:any = document.getElementById('containerAll')

    containerAll.style.opacity = "1"
    containerAll.style.zIndex = "60"
  }


}

    untilNow: any

  inputConditionEvent() {

    const containerCondition2:any = document.getElementById('containerCondition2')


    
    containerCondition2.style.visibility = 'visible'
    containerCondition2.style.marginLeft = '0em'
    containerCondition2.style.opacity = '1'
    containerCondition2.style.transition = '1s'
    containerCondition2.style.zIndex = '600'
       
    
     }

     imgEvent() {

      const iconSendStyle:any = document.getElementById('iconSendStyle')
      const inputConditionStyle: any = document.getElementById('inputConditionStyle')
      iconSendStyle.style.width = "35px"
      iconSendStyle.style.backgroundColor = "white"
      iconSendStyle.style.border = "2px solid transparent"
      iconSendStyle.style.boxShadow = "1px 1px 2px 2px black"

      
      setTimeout(() => {
        const inputConditionStyle: any = document.getElementById('inputConditionStyle')
  
     
        localStorage.setItem('currentOne', inputConditionStyle.value)
        inputConditionStyle.value = ""


        
      }, 50);

      setTimeout(() => {

        const containerCondition2:any = document.getElementById('containerCondition2')
        const containerAll:any = document.getElementById('containerAll')

    
        containerCondition2.style.visibility = 'hidden'
        containerCondition2.style.opacity = '0'
        containerCondition2.style.transition = '1s'
     
        containerAll.style.opacity = "1"
        containerAll.style.zIndex = "60"
        
      }, 1500);


     }



  calculus() {
    const inputValueDias:any = document.getElementById('inputValueDias')
    const inputValueMoradores:any = document.getElementById('inputValueMoradores')
    const inputValueAliquota:any = document.getElementById('inputValueAliquota')
    const resultInput:any = document.getElementById('resultInput')
    const previousOne:any = localStorage.getItem("previousOne")
    const currentOne:any = localStorage.getItem('currentOne')

    const untilNow = currentOne - previousOne
    

    let result =  ((untilNow*1000/inputValueDias.value )/inputValueMoradores.value) + inputValueAliquota.value*100
    console.log(untilNow)
   

    if(result) {
      inputValueDias.value = ""
      inputValueMoradores.value = ""
      inputValueAliquota.value = ""
      return   resultInput.innerHTML =  result.toFixed(2).toString()
 
    }
  
    return   resultInput.innerHTML =  result.toString()

  }

 


  getData() {

     const previousOne:any = localStorage.getItem("previousOne")
     const currentOne:any = localStorage.getItem('currentOne')
   


     if(localStorage.getItem("currentOne")) {
      let untilNow:any = currentOne - previousOne


    return  untilNow

     } else {
      let untilNow:any = 0
     

      return untilNow 

     }




  }

  getLitre() {
    const previousOne:any = localStorage.getItem("previousOne")
    const currentOne:any = localStorage.getItem('currentOne')

    const untilNow = currentOne - previousOne

    const litrerValue:any = untilNow * 1000

    return litrerValue

  }


}
