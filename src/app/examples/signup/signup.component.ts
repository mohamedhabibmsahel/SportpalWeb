import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';
import { User } from 'app/user';
import {Router} from "@angular/router"

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    constructor(private authService: AuthService,private router: Router) { }

    ngOnInit() {}
    onLoginButtonClicked(email: string,password: string){
        this.authService.login(email,password).subscribe((res: HttpResponse<any>)=>{
            if(localStorage.getItem('user')){
                this.router.navigate(['/landing']);
            }
            else {
                alert("Only admin can connect to application!")
            }
               
            
            
        });
    }
}
