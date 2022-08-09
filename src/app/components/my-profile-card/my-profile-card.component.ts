import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { IProfileMyCard } from 'src/app/interfaces/myProfileCard-interfaces';
import { myProfileCard } from 'src/app/mock/myProfileCard';

@Component({
  selector: 'app-my-profile-card',
  templateUrl: './my-profile-card.component.html',
  styleUrls: ['./my-profile-card.component.scss']
})
export class MyProfileCardComponent implements OnInit {

  data = [
    {
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg"
    },
    {
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg"
    },
    {
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg"
    },
    {
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg"
    },
    {
      email: "george.edwards@reqres.in",
      first_name: "George",
      last_name: "Edwards",
      avatar: "https://reqres.in/img/faces/11-image.jpg"
    },
    {
      email: "rachel.howell@reqres.in",
      first_name: "Rachel",
      last_name: "Howell",
      avatar: "https://reqres.in/img/faces/12-image.jpg"
    }
  ]

  ngOnInit(): void { }

}
