import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Icontact } from './components/Contact';
//import { Contact } from '../contact';
@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private ServerUrl:string=`http://localhost:9000`
  constructor(private http:HttpClient) { }

  

  //Get all the contacts

  public getAllContacts():Observable<Icontact[]>{
    let url:string=`${this.ServerUrl}/contacts`;
      return this.http.get<Icontact[]>(url);
  }
   //Get single the contacts

public getSingleContact(contactId:string):Observable<Icontact>{
  let url=`${this.ServerUrl}/contacts/${contactId}`;
  return this.http.get<Icontact>(url)

}
public createContact(contacts:Icontact){
 let dataUrl=`${this.ServerUrl}/contacts`;
 return this.http.post(dataUrl,contacts)
}

public updateContact(contactId:string,contact:Icontact):Observable<Icontact>{
let dataUrl=`${this.ServerUrl}/contacts/${contactId}`;
return this.http.put<Icontact>(dataUrl,contact);
}
//Delete Contact
public deleteContact(contactId:string):Observable<{}>{
  let dataUrl=`${this.ServerUrl}/contacts/${contactId}`;
  return this.http.delete<Icontact>(dataUrl);
}
}
