import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { NotificationAnimate } from '../enums/notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  //TODO: Notification Kullanımı
  constructor(private _notifications: NotificationsService) { }

  onSuccess(message) {
    this._notifications.success('Başarılı', message, {
      position: ["top", "right"],
      animate: NotificationAnimate.rotate,
      timeOut: 3000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
    })
  }
  onError(message) {
    this._notifications.error('Hata', message, {
      position: ["top", "left"],
      animate: NotificationAnimate.fromRight,
      timeOut: 3000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
    })
  }
  onInfo(message) {
    this._notifications.info('Bilgi', message, {
      position: ["top", "right"],
      animate: NotificationAnimate.fromLeft,
      timeOut: 3000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
    })
  }
}
