import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { NotificationAnimate } from 'src/app/enums/notifications';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  //TODO: Notification Kullanımı
  constructor(private _notifications: NotificationsService) { }
  //animate: "fade" or "fromTop" or "fromRight" or "fromBottom" or "fromLeft" or "scale" or "rotate"
  ngOnInit() {
    this._notifications.success("Info", "student.studentName" + " " + "student.studentLastName");
  }

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
