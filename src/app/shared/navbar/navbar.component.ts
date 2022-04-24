import { Component, OnInit, ElementRef } from '@angular/core';
import { TaskService } from 'app/task.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    userconnect:boolean ;
    private toggleButton: any;
    private sidebarVisible: boolean;
    constructor(private router :Router,public location: Location, private element : ElementRef,private taskService: TaskService) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        this.userconnect=localStorage.getItem('user')?true:false;
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
    isHome() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === ''){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === ''){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }
    Getfootballnews(){
        this.taskService.getfootballnewlist().subscribe((respnse: any)=>{
            console.log(respnse);
        });
    }
    // Gettennisnews(){
    //     this.taskService.gettennisnewlist().subscribe((respnse: any)=>{
    //         console.log(respnse);
    //     });
    // }
    disconnect(){
        localStorage.clear();
        this.userconnect=!this.userconnect;
      
  
    }
}
