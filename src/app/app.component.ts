import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {
      title: "Mon premier post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed sem justo. Curabitur convallis enim purus, sed consequat nunc fermentum sit amet. Sed in justo vitae sem aliquet hendrerit.",
      loveIts: 0,
      created_at: new Date
    },
    {
      title: "Mon deuxième post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed sem justo. Curabitur convallis enim purus, sed consequat nunc fermentum sit amet. Sed in justo vitae sem aliquet hendrerit.",
      loveIts: -1,
      created_at: new Date
    },
    {
      title: "Un autre post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed sem justo. Curabitur convallis enim purus, sed consequat nunc fermentum sit amet. Sed in justo vitae sem aliquet hendrerit.",
      loveIts: 1,
      created_at: new Date
    }
  ];
}
