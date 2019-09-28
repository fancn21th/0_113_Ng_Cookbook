import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RandomNumbersModule } from "./random-numbers/random-numbers.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RandomNumbersModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
