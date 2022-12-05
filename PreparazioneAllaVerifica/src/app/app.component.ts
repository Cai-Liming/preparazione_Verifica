import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PreparazioneAllaVerifica';
  articles = new Array<string>();

  addSpam(testo : HTMLInputElement, numero : HTMLInputElement) : boolean {
    let t : string = testo.value
    let n : number = Number(numero.value)
    for(let i : number = 0; i < n; i++) {
      this.articles.push(t)
    }
    console.log(this.articles)
    return false
  }
}
