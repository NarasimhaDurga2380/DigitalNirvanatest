import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms'
import { MatToolbarModule, MatListModule,MatIconModule, MatCardModule , MatButtonModule,MatFormFieldModule,MatInputModule,MatSelectModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { SearchDetailsComponent } from './components/search-details/search-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchDetailsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,MatIconModule,MatListModule,
    MatCardModule , MatButtonModule,MatFormFieldModule,MatInputModule,MatSelectModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
