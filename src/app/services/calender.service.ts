import { Injectable } from '@angular/core';
import { ClientCredentialService } from './client-credential.service';
import { ProtectedService } from './protected.service';
import { PublicService } from './public.service';

@Injectable({
  providedIn: 'root'
})
export class CalenderService {

  acemicBaseUrl: string = 'api/academic-calendar';
  constructor(private cService: PublicService, private protectedService : ProtectedService) { }

  //genel
  getCalendar() {
    return this.cService.get(this.acemicBaseUrl);
  }

  //özel
  getMyCalendar() {
    //return this.pService.get(this.acemicBaseUrl);
    return this.protectedService.get(`${this.acemicBaseUrl}\me`);
  }
}
