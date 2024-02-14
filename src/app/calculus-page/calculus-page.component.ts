import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-calculus-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './calculus-page.component.html',
  styleUrl: './calculus-page.component.css'
})
export class CalculusPageComponent implements OnInit {


  ngOnInit(): void {


    const inputValue: any = document.getElementById('inputValue')
  this.chatBotEvent()

   inputValue.addEventListener('keypress',  (e: { key: string; }) => {
      if (e.key === 'Enter') {
    
        const inputValue: any = document.getElementById('inputValue')
        const chatBotContainer:any = document.getElementById('chatBotContainer')
  
  
        switch (inputValue.value.replace(/\s+/g, '').replace('a','ã').replace('A','ã').toLowerCase()) {
  
  
          case 'sim': 

     

          this.chatBotAnswerYes()
            
            break;

            case 'não':

            chatBotContainer.style.bottom = '15em'
            chatBotContainer.style.opacity = '0'
            chatBotContainer.style.transition = '1s'
            inputValue.value = ''

              this.chatBotAnswerNo()
             

       

            break;

          default:

          chatBotContainer.style.bottom = '15em'
          chatBotContainer.style.opacity = '0'
          chatBotContainer.style.transition = '1s'
          inputValue.value = ''
            this.chatBotAnswerYesNoFailed()
          
          
            break;
        }
        

      }
  });
  const inputValue2: any = document.getElementById('inputValue2')
  const chatBotContainerNo: any = document.getElementById('chatBotContainerNo')
  const containerItem2: any = document.getElementById('containerItem2')

  inputValue2.addEventListener('keypress',  (ee: { key: string; }) => {
    if (ee.key === 'Enter') {
  

      if (!inputValue2.value || inputValue2.value <=0) {

        containerItem2.style.border = '2px solid red'

       
      } else {

        localStorage.setItem('previousValue',inputValue2.value)
     
        containerItem2.style.border = 'none'
        containerItem2.style.borderTop = '1px solid black'

        chatBotContainerNo.style.visibility = 'hidden'
        chatBotContainerNo.style.opacity = '0'
        chatBotContainerNo.style.transition = '1s'
        chatBotContainerNo.style.width = '100%'
        chatBotContainerNo.style.bottom = '15em'
            this.chatBotAnswerNo2
       

      }
      

    }
});




  }


  chatBotEvent() {

    const currentDate = new Date()
    const timeValue: any = document.getElementById('timeValue')

    const chatBotContainerAll: any = document.getElementById('chatBotContainerAll')
    const chatBotContainer:any = document.getElementById('chatBotContainer')

    const chatBotValue: any = document.getElementById('chatBotValue')


chatBotValue.innerHTML = 'Olá, por acaso você teria o valor em m3   ? '
    timeValue.innerHTML = currentDate.toLocaleString()

    chatBotContainerAll.style.opacity = '1'
    chatBotContainerAll.style.transition = '1s'
    chatBotContainer.style.width = '100%'
    chatBotContainer.style.transition = '0.5s'
    chatBotContainer.style.bottom = '5em'
  }



  chatBotAnswerNo() {

    const currentDate2 = new Date()


    const chatBotContainerNo:any = document.getElementById('chatBotContainerNo')
    const timeValue2: any = document.getElementById('timeValueNo')
    const chatBotValueNo: any = document.getElementById('chatBotValueNo')
    const containerItem1:any = document.getElementById('containerItem1')
    const containerItem2:any = document.getElementById('containerItem2')
    const inputValue2:any = document.getElementById('inputValue2')
    const inputValue: any = document.getElementById('inputValue')
    const chatBotContainer:any = document.getElementById('chatBotContainer')


    containerItem1.style.visibility ='hidden'
    containerItem1.style.display ='none'
    containerItem2.style.visibility ='visible'


    chatBotContainerNo.style.visibility = 'visible'
    chatBotContainerNo.style.opacity = '1'
    chatBotContainerNo.style.transition = '1s'
    chatBotContainerNo.style.width = '100%'
    chatBotContainerNo.style.bottom = '5em'

chatBotValueNo.innerHTML = 'Digite o valor anterior do hidrometro'
    timeValue2.innerHTML = currentDate2.toLocaleString()


  }


  chatBotAnswerNo2() {

    const currentDate2 = new Date()


    const chatBotContainerNo:any = document.getElementById('chatBotContainerNo')
    const timeValue2: any = document.getElementById('timeValueNo')
    const chatBotValueNo: any = document.getElementById('chatBotValueNo')
    const containerItem1:any = document.getElementById('containerItem1')
    const containerItem2:any = document.getElementById('containerItem2')
    const inputValue2:any = document.getElementById('inputValue2')
    const inputValue: any = document.getElementById('inputValue')
    const chatBotContainer:any = document.getElementById('chatBotContainer')


    containerItem1.style.visibility ='hidden'
    containerItem1.style.display ='none'
    containerItem2.style.visibility ='visible'

    inputValue2.addEventListener('keypress',  (e: { key: string; }) => {
      if (e.key === 'Enter') {
    

        if (parseInt(inputValue.value.replace(/\s+/g, ''))) {
  
              localStorage.setItem('previousValue',inputValue2.value)

         
        } else {


         

        }
        

      }
  });

chatBotValueNo.innerHTML = 'Digite o valor deste mês do hidrometro'
    timeValue2.innerHTML = currentDate2.toLocaleString()

    chatBotContainerNo.style.visibility = 'visible'
    chatBotContainerNo.style.opacity = '1'
    chatBotContainerNo.style.transition = '1s'
    chatBotContainerNo.style.width = '100%'
    chatBotContainerNo.style.bottom = '5em'
  }



  chatBotAnswerYes() {

    const currentDate3 = new Date()

   
    const chatBotContainerYes:any = document.getElementById('chatBotContainerYes')
    const chatBotContainer:any = document.getElementById('chatBotContainer')
    const timeValue3: any = document.getElementById('timeValueYes')
    const chatBotValueYes: any = document.getElementById('chatBotValueYes')

    const dot1 = '.'
    
    chatBotContainer.style.opacity = '0'
    chatBotContainer.style.transition = '1s'
    chatBotContainer.style.bottom = '15em'



    timeValue3.innerHTML = currentDate3.toLocaleString()

    chatBotContainerYes.style.visibility = 'visible'
    chatBotContainerYes.style.opacity = '1'
    chatBotContainerYes.style.transition = '1s'
    chatBotContainerYes.style.width = '100%'
    chatBotContainerYes.style.bottom = '5em'

chatBotValueYes.innerHTML = `Ok, estarei te redirecionando ao painel`

setTimeout(() => {
  chatBotValueYes.innerHTML = `Ok, estarei te redirecionando ao painel ${dot1}`
}, 2000);


setTimeout(() => {
  chatBotValueYes.innerHTML = `Ok, estarei te redirecionando ao painel ${dot1} ${dot1}`
}, 3000);


setTimeout(() => {
  chatBotValueYes.innerHTML = `Ok, estarei te redirecionando ao painel ${dot1}  ${dot1}  ${dot1}`
}, 4000);

setTimeout(() => {

  window.location.href = '/panel'

}, 4500);




  }




  chatBotAnswerYesNoFailed() {

    const currentDate4 = new Date()


    const chatBotContainerYesNoFailed :any = document.getElementById('chatBotContainerYesNoFailed ')
    const timeValue4: any = document.getElementById('timeValueYesNoFailed')
    const chatBotValueYesNoFailed: any = document.getElementById('chatBotValueYesNoFailed')
    const chatBotContainer:any = document.getElementById('chatBotContainer')
    const dot2 = '.'

chatBotValueYesNoFailed.innerHTML = 'Desculpe, devido ao meu script limitado não pude compreender suas palavras. Vamos tentar de novo'
    timeValue4.innerHTML = currentDate4.toLocaleString()

    chatBotContainerYesNoFailed .style.visibility = 'visible'
    chatBotContainerYesNoFailed .style.opacity = '1'
    chatBotContainerYesNoFailed .style.transition = '1s'
    chatBotContainerYesNoFailed .style.width = '100%'
    chatBotContainerYesNoFailed .style.bottom = '5em'


    


    setTimeout(() => {
      chatBotValueYesNoFailed.innerHTML = `Desculpe, devido ao meu script limitado não pude compreender suas palavras. Vamos tentar de novo ${dot2}`
 

    }, 1000);

    setTimeout(() => {
      chatBotValueYesNoFailed.innerHTML = `Desculpe, devido ao meu script limitado não pude compreender suas palavras. Vamos tentar de novo ${dot2} ${dot2}`
   

    }, 2000);

    setTimeout(() => {
      chatBotValueYesNoFailed.innerHTML = `Desculpe, devido ao meu script limitado não pude compreender suas palavras. Vamos tentar de novo ${dot2} ${dot2} ${dot2}`


    }, 3000);


    setTimeout(() => {
      const chatBotContainer:any = document.getElementById('chatBotContainer')

      chatBotContainerYesNoFailed .style.visibility = 'hidden'
      chatBotContainerYesNoFailed .style.opacity = '0'
      chatBotContainerYesNoFailed .style.transition = '1s'
      chatBotContainerYesNoFailed .style.width = '100%'
      chatBotContainerYesNoFailed .style.bottom = '15em'
      chatBotContainer.style.bottom = '0em'



    }, 4000);

    setTimeout(() => {
     
      const chatBotContainer:any = document.getElementById('chatBotContainer')


      chatBotContainer.style.width = '100%'
      chatBotContainer.style.opacity = '1'
      chatBotContainer.style.transition = '0.5s'
      chatBotContainer.style.bottom = '5em'

    }, 4500);



  }

  


}