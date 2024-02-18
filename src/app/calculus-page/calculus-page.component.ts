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
 


  }


  buttonEvent() {

    const button:any = document.getElementById('button')
    const buttonText:any = document.getElementById('buttonText')
    const getMonth1:any = document.getElementById('getMonth1')
    const getMonth2:any = document.getElementById('getMonth2')

    if(getMonth1.value && getMonth2.value) {

      setTimeout(() => {
     
      

        button.style.rotate ='183deg'
        button.style.outline ='2px solid rgb(255, 174, 236)'
  button.style.transition ='0.5s'
  getMonth1.style.border = '2px solid green'
  getMonth2.style.border = '2px solid green'

      }, 800);

      setTimeout(() => {
        const getMonth1:any = document.getElementById('getMonth1')
        const getMonth2:any = document.getElementById('getMonth2')
        buttonText.style.transition ='1.5s'
        buttonText.style.opacity ='1'
        buttonText.style.left ='550%'
        
   
        buttonText.style.visibility ='visible'
        localStorage.setItem('previousOne',getMonth1.value)
        localStorage.setItem('currentOne',getMonth2.value)

      


      }, 1000);

      setTimeout(() => {
  

        
        window.location.href = '/panel'


      }, 2000);


  

    }

    if(getMonth1.value) {

      setTimeout(() => {

      

        button.style.rotate ='181deg'
        button.style.outline ='2px solid rgb(255, 174, 236)'
  button.style.transition ='0.5s'

      }, 600);

      setTimeout(() => {
  
        button.style.rotate ='0deg'
        button.style.outline ='2px solid rgb(255, 174, 236)'
    button.style.transition ='0.5s'


      }, 600);

      getMonth1.style.border = '2px solid green'


    }


    if(getMonth2.value) {

      setTimeout(() => {


        button.style.rotate ='181deg'
        button.style.outline ='2px solid rgb(255, 174, 236)'
  button.style.transition ='0.5s'

      }, 600);

      setTimeout(() => {
  
        button.style.rotate ='0deg'
        button.style.outline ='2px solid rgb(255, 174, 236)'
    button.style.transition ='0.5s'


      }, 600);

      getMonth2.style.border = '2px solid green'


    }




    if(!getMonth1.value) {
      button.style.rotate ='181deg'
        button.style.outline ='2px solid rgb(255, 174, 236)'
  button.style.transition ='0.5s'

  setTimeout(() => {
    button.style.rotate ='0deg'
    button.style.outline ='2px solid rgb(255, 174, 236)'
button.style.transition ='0.5s'
  }, 600);

  getMonth1.style.border = '2px solid red'
      
    }



    if(!getMonth2.value) {
      button.style.rotate ='181deg'
        button.style.outline ='2px solid rgb(255, 174, 236)'
  button.style.transition ='0.5s'

  setTimeout(() => {
    button.style.rotate ='0deg'
    button.style.outline ='2px solid rgb(255, 174, 236)'
button.style.transition ='0.5s'
  }, 600);

  getMonth2.style.border = '2px solid red'

    
          
        }
    



   
     

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

    const button: any = document.getElementById('button')
    const chatBotContainerNo:any = document.getElementById('chatBotContainerNo')
    const timeValue2: any = document.getElementById('timeValueNo')
    const chatBotValueNo: any = document.getElementById('chatBotValueNo')
    const containerItem1:any = document.getElementById('containerItem1')
    const containerItem2:any = document.getElementById('containerItem2')

    const getMonth1:any = document.getElementById('getMonth1')
    const getMonth2:any = document.getElementById('getMonth2')



    setTimeout(() => {
      button.style.visibility = 'visible'
      button.style.opacity = '1'
      button.style.transition = '3s'
      
    }, 1000);


    getMonth1.style.visibility = 'visible'
    getMonth1.style.opacity = '1'
    getMonth1.style.right = '55%'
    getMonth1.style.transition = '2s'

    getMonth2.style.right = '15%'
    getMonth2.style.transition = '2s'
    getMonth2.style.opacity = '1'


    setTimeout(() => {
      getMonth1.style.right = '60%'
      getMonth2.style.right = '10%'
    }, 500);
    
    
    getMonth2.style.visibility = 'visible'

    containerItem1.style.display ='none'

  


    chatBotContainerNo.style.visibility = 'visible'
    chatBotContainerNo.style.opacity = '1'
    chatBotContainerNo.style.transition = '1s'
    chatBotContainerNo.style.width = '100%'
    chatBotContainerNo.style.bottom = '5em'

chatBotValueNo.innerHTML = 'Digite o valor anterior do hidrometro'
    timeValue2.innerHTML = currentDate2.toLocaleString()


  }


 
  chatBotAnswerYes() {

    const currentDate3 = new Date()

   
    const chatBotContainerYes:any = document.getElementById('chatBotContainerYes')
    const chatBotContainer:any = document.getElementById('chatBotContainer')
    const timeValue3: any = document.getElementById('timeValueYes')
    const chatBotValueYes: any = document.getElementById('chatBotValueYes')
    const inputValue: any = document.getElementById('inputValue')

    localStorage.setItem('currentOne','0')
    localStorage.setItem('previousOne','0')

    inputValue.value = ''

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