import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
//import { RadSideDrawer } from "nativescript-ui-sidedrawer";
//import * as app from "tns-core-modules/application";
import { Page } from "tns-core-modules/ui/page/page";
import { alert } from "tns-core-modules/ui/dialogs";
import { Router } from "@angular/router";

import { User } from './../../models/login/user.model';

@Component({
    selector: "Login",
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    isLoggingIn: boolean;
    user: User;
    @ViewChild("password", {static: false}) password: ElementRef;
    @ViewChild("confirmPassword", {static: false}) confirmPassword: ElementRef;

    constructor(
        private page: Page, 
        private router: Router) 
    {
        // Use the component constructor to inject providers.
        
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.initializeProperties();
    }

    initializeProperties(){
        //this.page.actionBarHidden = true;
        this.user = new User();
    }

    /*
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }*/

    toggleForm(){
        this.isLoggingIn = !this.isLoggingIn;
    }

    submit(){
        if(!this.user.email || !this.user.password){
            this.alert(`Please provide both an email address and password.`);
            return;
        }

        if(this.isLoggingIn){
            this.login();
        }else{
            this.register();
        }
    }

    login(){
        this.router.navigate(["/home"]);
    }

    register(){

    }

    forgotPassword(){

    }

    focusPassword(){
        this.password.nativeElement.focus();
    }

    focusConfirmPassword(){
        if(!this.isLoggingIn){
            this.confirmPassword.nativeElement.focus();
        }
    }

    alert(message: string){
        return alert({
            title:"Manage Lessor",
            okButtonText: "OK",
            message: message
        });
    }
}
