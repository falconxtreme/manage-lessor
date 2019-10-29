import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", loadChildren: 
        () => import("~/app/layout/components/login/login.module").then(m => m.LoginModule) },
    { path: "home", loadChildren: 
        () => import("~/app/layout/components/home/home.module").then(m => m.HomeModule) },
    { path: "browse", loadChildren: () => import("~/app/layout/components/browse/browse.module").then(m => m.BrowseModule) },
    { path: "search", loadChildren: () => import("~/app/layout/components/search/search.module").then(m => m.SearchModule) },
    { path: "featured", loadChildren: () => import("~/app/layout/components/featured/featured.module").then(m => m.FeaturedModule) },
    { path: "settings", loadChildren: () => import("~/app/layout/components/settings/settings.module").then(m => m.SettingsModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
