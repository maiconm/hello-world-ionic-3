import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController
  ) {

  }

  protected showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            const disagreed = this.alertCtrl.create({
              title: `You've disagreed!`,
              message: `so it's mean that you don't agree to use light saber to do good across the intergalactic galaxy! :/`
            });
            disagreed.present();
          }
        },
        {
          text: 'Agree',
          handler: () => {
            const agreed = this.alertCtrl.create({
              title: `You've agreed!`,
              message: `so it's mean that you agree to use this lightsaber to do good across the intergalactic galaxy!`
            });
            agreed.present();
          }
        }
      ]
    });
    confirm.present();
  }

}
