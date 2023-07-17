import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';

const PRIVATE_KEY_PUSH_NOTIFICATION: string = "BFWd_d7wk789uf2O4P_GmId9NVF5lRLQgLbHpl28S11YnHPE0zFY4JYM7xrfA3HY5AqEm1Y8OzWqg5BcTauOcfA";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  photo?: any;
  camera?: any;
  button?: any;

  constructor(private swPush: SwPush) { }

  ngOnInit(): void {
    this.setImageFromCamera();
    this.suscribeNotifications();
  }

  suscribeNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: PRIVATE_KEY_PUSH_NOTIFICATION
    }).then(sub => {
      console.log(sub);  
    })  
  }


  setImageFromCamera() {
    this.photo = document.querySelector('#photo');
    this.camera = document.querySelector('#camera');
    this.camera.addEventListener('change', (e: any) => {
      this.photo.src = URL.createObjectURL(e.target.files[0]);
    });
  }





}
