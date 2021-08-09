import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gallery';

  pictures: any[] = [
    {
      img: "../assets/pics/download-2.jpg",
      tags: ['cyberpunk', 'roxo', 'pessoas'],
      preco: 12
    },
    {
      img: "../assets/pics/download-2.jpg",
      tags: ['cyberpunk', 'roxo', 'pessoas'],
      preco: 12
    },
    {
      img: "../assets/pics/download-2.jpg",
      tags: ['cyberpunk', 'roxo', 'pessoas'],
      preco: 12
    },
    {
      img: "../assets/pics/download-2.jpg",
      tags: ['cyberpunk', 'roxo', 'pessoas'],
      preco: 12
    },
    {
      img: "../assets/pics/download-2.jpg",
      tags: ['cyberpunk', 'roxo', 'pessoas'],
      preco: 12
    },
    {
      img: "../assets/pics/download-2.jpg",
      tags: ['cyberpunk', 'roxo', 'pessoas'],
      preco: 12
    },
    {
      img: "../assets/pics/download-2.jpg",
      tags: ['cyberpunk', 'roxo', 'pessoas'],
      preco: 12
    },
    {
      img: "../assets/pics/download-2.jpg",
      tags: ['cyberpunk', 'roxo', 'pessoas'],
      preco: 12
    }
  ]
}
