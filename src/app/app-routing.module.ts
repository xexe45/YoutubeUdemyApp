import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { VideoInfoComponent } from "./pages/video-info/video-info.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "watch/:id", component: VideoInfoComponent },
  //{ path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
