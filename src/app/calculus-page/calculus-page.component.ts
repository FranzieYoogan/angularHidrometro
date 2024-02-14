import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-calculus-page',
  standalone: true,
  imports: [CalculusPageComponent,HeaderComponent],
  templateUrl: './calculus-page.component.html',
  styleUrl: './calculus-page.component.css'
})
export class CalculusPageComponent implements OnInit {


  ngOnInit() {


    const inputValue: any = document.getElementById('inputValue')
  this.chatBotEvent()

   inputValue.addEventListener('keypress',  (e: { key: string; }) => {
      if (e.key === 'Enter') {
    
        const inputValue: any = document.getElementById('inputValue')
        const chatBotContainer:any = document.getElementById('chatBotContainer')
  
  
        switch (inputValue.value) {
  
  
          case 'sim': 
          chatBotContainer.style.bottom = '15em'
          chatBotContainer.style.opacity = '0'
          chatBotContainer.style.transition = '1s'
          inputValue.value = ''
            
            break;

            case 'não':

            chatBotContainer.style.bottom = '15em'
            chatBotContainer.style.opacity = '0'
            chatBotContainer.style.transition = '1s'
            inputValue.value = ''

              this.chatBotAnswerNo()
             

       

            break;

          default:
            break;
        }
        

      }
  });




  }


  chatBotEvent() {

    const currentDate = new Date()

    const chatBotContainerAll: any = document.getElementById('chatBotContainerAll')
    const chatBotContainer:any = document.getElementById('chatBotContainer')
    const timeValue: any = document.getElementById('timeValue')
    const chatBotValue: any = document.getElementById('chatBotValue')


chatBotValue.innerHTML = 'Olá, por acaso você teria o valor em m3   ? '
    timeValue.innerHTML = currentDate.toLocaleString()

    chatBotContainerAll.style.opacity = '1'
    chatBotContainerAll.style.transition = '1s'
    chatBotContainer.style.width = '100%'
    chatBotContainer.style.transition = '0.2s'
    chatBotContainer.style.bottom = '5em'
  }



  chatBotAnswerNo() {

    const currentDate = new Date()

    const chatBotContainerAllNo: any = document.getElementById('chatBotContainerAll')
    const chatBotContainerNo:any = document.getElementById('chatBotContainerNo')
    const timeValue: any = document.getElementById('timeValue')
    const chatBotValueNo: any = document.getElementById('chatBotValueNo')


chatBotValueNo.innerHTML = 'Digite o valor anterior do hidrometro'
    timeValue.innerHTML = currentDate.toLocaleString()

    chatBotContainerNo.style.visibility = 'visible'
    chatBotContainerNo.style.opacity = '1'
    chatBotContainerNo.style.transition = '1s'
    chatBotContainerNo.style.width = '100%'
    chatBotContainerNo.style.bottom = '5em'
  }

  


}
