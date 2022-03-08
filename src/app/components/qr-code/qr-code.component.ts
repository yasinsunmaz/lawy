import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit {
  //TODO: QRCode Kullanımı
  _renderer2: Renderer2;
  cameras: MediaDeviceInfo[] = [];
  qrResult: string;
  @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent;

  //qrInfo:string;

  item = [{
    'name': 'Yasin SUNMAZ',
    'played by': 'Kathryn Hahn',
    'Fictional universe': 'Marvel Universe',
    'Creator': 'Stan Lee'
  }]

  qrInfo = JSON.stringify(this.item);
  constructor(enderer2: Renderer2) {
    this.qrScannerComponent = new QrScannerComponent(this._renderer2);
    this.level = "L";
    this.values = "Yasin SUNMAZ";
    //this.values = this.qrInfo; TODO Json veri QR Code içine koyma
    this.width = 200;
  }

  public values: string = null;
  public level: "L" | "M" | "Q" | "H";
  public width: number;

  qrLevel(val: "L" | "M" | "Q" | "H") {
    this.level = val;
  }

  qrData(val: string) {
    this.values = val;
  }

  qrWidth(val: number) {
    this.width = val;
  }

  ngOnInit(): void {
    //PC'de ki cihazları getiriyoruz
    this.qrScannerComponent.getMediaDevices().then(devices => {
      devices.forEach(device => {
        if (device.kind.toString() === 'videoinput')
          this.cameras.push(device);
      });

      //Varsayılan olarak koleksiyondaki ilk kamera seçiliyor.
      if (this.cameras.length > 0)
        this.qrScannerComponent.chooseCamera.next(this.cameras[0]);

      this.qrScannerComponent.capturedQr.subscribe(result => {
        //QRCode tarandığında bip sesi veriyor
        var audio = new Audio(
          'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
        audio.play();
        this.qrResult = result;
      });
    });
  }
}
