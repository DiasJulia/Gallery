import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


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
      img: "../assets/pics/download.jpg",
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

  columns: any[] = [[],[],[]]

  item: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.item = firestore.collection('Pictures').valueChanges();
  }

  ngOnInit(){
    let counter = 0;
    this.pictures.forEach(e=> {
      this.columns[counter].push(e);
      if(counter < 2){
        counter += 1;
      } else {
        counter = 0;
      }
    })
    console.log(this.columns)
  }

  addPic() {
    console.log("click")
  }
}
