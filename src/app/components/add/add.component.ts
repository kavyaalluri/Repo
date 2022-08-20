import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ContactServiceService } from 'src/app/contact-service.service';
import { Icontact } from '../Contact';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public contact:Icontact={} as Icontact;
  constructor(private contactService :ContactServiceService ,private router:Router) { }

  ngOnInit(): void {
    
  }
  submitForm(){
    this.contactService.createContact(this.contact).subscribe((data)=>{
      if(Object.keys(this.contact).length>0){
        this.router.navigate(['/']).then();
      }
    else{
      this.router.navigate(['/add']);
      
    }
    });
  }
  
}


