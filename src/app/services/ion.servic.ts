import { Injectable } from '@angular/core';
import { ServicesModule } from './services.module';
import { LoadingController, ToastController } from '@ionic/angular';


@Injectable({
  providedIn: ServicesModule
})
export class IonService {
  
  loading:any;
  constructor(
    private loadingController: LoadingController,
    public toastController: ToastController
  ) { }

  async toast(message:string,duration=1000){
    (await this.toastController.create({
      message: message,
      duration: duration
    })).present();
  }

  

  async showLoading(message="请求数据中"){
    this.dismissLoading();
    this.loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: message,
    duration: 8000,
      backdropDismiss: true
    });
    this.loading.present();
  }

  async dismissLoading(){
    if(this.loading){
      this.loading.dismiss();
    }
  }

}
