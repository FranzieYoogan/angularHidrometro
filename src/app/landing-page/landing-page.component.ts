import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {


  buttonTextEvent() {

    const buttonText:any = document.getElementById('buttonText')
    const icon:any = document.getElementById('icon')

      buttonText.style.visibility = 'visible'

      icon.src = '/assets/img/icons/start2.png'
      buttonText.style.opacity = '1'
      buttonText.style.transition = '1s'
      buttonText.style.left = '59%'


  }

  buttonTextEventOut() {


    const buttonText:any = document.getElementById('buttonText')
    const icon:any = document.getElementById('icon')

    

      icon.src = '/assets/img/icons/start.png'
      buttonText.style.opacity = '0'
      buttonText.style.transition = '1s'
      buttonText.style.left = '50%'
      buttonText.style.visibility = 'hidden'

   
  }

  buttonRedirect() {


    const buttonText:any = document.getElementById('buttonText')
    const icon:any = document.getElementById('icon')

      buttonText.style.visibility = 'visible'

      icon.src = '/assets/img/icons/start2.png'
      buttonText.style.opacity = '1'
      buttonText.style.transition = '1s'
      buttonText.style.left = '59%'


      setTimeout(() => {
        window.location.href = '/calculus-page'
      }, 1050);



  }


}
