import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { alert } from "tns-core-modules/ui/dialogs";
import { filter } from "rxjs/operators";
import * as app from "tns-core-modules/application";
import { TouchAction } from "tns-core-modules/ui/gestures/gestures";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    isVisibleSideDrawer: boolean;
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(
        private router: Router, 
        private routerExtensions: RouterExtensions) 
    {
        // Use the component constructor to inject services.
    }

    ngOnInit(): void {
        this.isVisibleSideDrawer = false;
        this._activatedUrl = "/login";
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
        .pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
            this._activatedUrl = event.urlAfterRedirects;
            if(this._activatedUrl != "/login")
                this.isVisibleSideDrawer = true;
            else
                this.isVisibleSideDrawer = false;
        });
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    alert(message: string){
        return alert({
            title:"Manage Lessor",
            okButtonText: "OK",
            message: message
        });
    }
}
