import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'converto';
  DimVisible = true;
  PoiVisible = false;
  TemVisible = false;
  MonVisible = false;


  ouvrirDimensions() {
    //  pour mettre tout les autres component non visible
    this.PoiVisible = false;
    this.TemVisible = false;
    this.MonVisible = false;

    //  Afficher Dimensions
    this.DimVisible = true;
  }

  ouvrirPoids(){
    //  pour mettre tout les autres component non visible
    this.DimVisible = false;
    this.TemVisible = false;
    this.MonVisible = false;

    //  Afficher Dimensions
    this.PoiVisible = true;
  }

  ouvrirTemperature(){
    //  pour mettre tout les autres component non visible
    this.PoiVisible = false;
    this.DimVisible = false;
    this.MonVisible = false;

    //  Afficher Dimensions
    this.TemVisible = true;
  }

  ouvrirMonnaie(){
    //  pour mettre tout les autres component non visible
    this.PoiVisible = false;
    this.TemVisible = false;
    this.DimVisible = false;

    //  Afficher Dimensions
    this.MonVisible = true;
  }
}
