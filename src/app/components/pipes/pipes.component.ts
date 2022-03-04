import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  //TODO Pipe Kullanımı
  lowerCaseValue: any = "küçük harfleri büyüt";
  upperCaseValue: any = "BÜYÜK HARFLERİ KÜÇÜLT";
  titleCaseValue: any = "yasin sunmaz";
  sliceCaseValue: any = "Angular";
  //TODO Keyvalue Kullanımı
  countryList = {
    countryCode: "TR",
    countryName: "Türkiye"
  }
  mapObj = new Map([
    ['c', 123],
    ['b', 446],
    ['a', 789],
  ]);
  //TODO Keyvalue Sıralama
  data: any =
    {
      "corgi": ["cardigan"],
      "deerhound": ["scottish"],
      "bulldog": ["boston", "english", "french"],
      "mastiff": ["bull", "english", "tibetan"],
      "australian": ["shepherd"],
      "greyhound": ["italian"],
      "buhund": ["norwegian"],
      "hound": ["afghan", "basset", "blood", "english", "ibizan", "plott", "walker"],
      "bullterrier": ["staffordshire"],
    }

  orderData = (a: KeyValue<number, [string]>, b: KeyValue<number, [string]>): number => {
    return a.value.length > b.value.length ? -1 : (a.value.length > b.value.length) ? 0 : 1
  }

  nowDate = Date.now();
  myObject: any = {
    name: 'Yasin',
    lastname: 'SUNMAZ',
    data: { order: 13, numbers: [1, 2, 3, 4, 5] }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
