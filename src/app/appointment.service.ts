import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from './appointment';
import {Observable}  from 'rxjs/Observable';
@Injectable()
export class AppointmentService {

 
  constructor (private httpClient:HttpClient){}

  getAppointmentList():Observable<Appointment[]> {
    let url = "https://userfront.herokuapp.com/api/appointment/all";
    return this.httpClient.get<Appointment[]>(url, { withCredentials: true });
  }

  confirmAppointment(id: number) {
    let url = "https://userfront.herokuapp.com/api/appointment/"+id+"/confirm";
    return this.httpClient.get(url, { withCredentials: true });
  }
}
