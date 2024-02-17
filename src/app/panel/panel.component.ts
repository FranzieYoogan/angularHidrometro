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
  
  }


  calculus() {
    const inputValueDias:any = document.getElementById('inputValueDias')
    const inputValueMoradores:any = document.getElementById('inputValueMoradores')
    const inputValueAliquota:any = document.getElementById('inputValueAliquota')
    const resultInput:any = document.getElementById('resultInput')
    const previousOne:any = localStorage.getItem("previousOne")
    const currentOne:any = localStorage.getItem('currentOne')

    const untilNow = previousOne - currentOne

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
   


     if(localStorage.getItem("previousOne") && localStorage.getItem("currentOne")) {
      let untilNow:any = previousOne - currentOne

    return  untilNow

     } else {
      let untilNow:any = 0
     

      return untilNow 

     }




  }

  getLitre() {
    const previousOne:any = localStorage.getItem("previousOne")
    const currentOne:any = localStorage.getItem('currentOne')

    const untilNow = previousOne - currentOne

    const litrerValue:any = untilNow * 1000

    return litrerValue

  }


}
