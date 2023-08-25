import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';

@Component({
  selector: 'app-temperatures',
  templateUrl: './temperatures.component.html',
  styleUrls: ['./temperatures.component.css']
})
export class TemperaturesComponent implements OnInit {

  Nombre: string = "20";
  Resultat?: string = '';
  Sortie: string = 'Fahrenheit';
  Entree: string = 'Celsius';
  Precision: number = 2;

  Kelvin: number = 273.15;
  Calcul?: number = 0;

  constructor() { }

  //-----------------------------------------------------------------------
  //  Se qui est afficher au début du programme
  //-----------------------------------------------------------------------
  ngOnInit(): void {
    this.Calcul = this.calaculFahrenheit(parseFloat(this.Nombre));
    this.Resultat = this.Calcul.toFixed(this.Precision);
  }

  //-----------------------------------------------------------------------
  //  Si l'Utilisateur change l'Entrée le changement sera fait
  //-----------------------------------------------------------------------
  changementEntree() {
    this.changementSortie();
  }

  //-----------------------------------------------------------------------
  //  Evenement sur le changement de sortie
  //-----------------------------------------------------------------------
  changementSortie() {
    //  De Celsius à ?
    if (this.Entree == "Celsius" && this.Sortie == "Celsius") {
      this.Resultat = parseFloat(this.Nombre).toFixed(this.Precision);
    }
    if (this.Entree == "Celsius" && this.Sortie == "Fahrenheit") {
      this.Calcul = this.calaculFahrenheit(parseFloat(this.Nombre));
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "Celsius" && this.Sortie == "Kelvin") {
      this.Calcul = this.calculerKelvin(parseFloat(this.Nombre));
      this.Resultat = this.Calcul?.toFixed(this.Precision);
    }

    //  De Fahrenheit à ?
    if (this.Entree == "Fahrenheit" && this.Sortie == "Celsius") {
      this.Calcul = this.calaculFahrenheit(parseFloat(this.Nombre));
      this.Resultat = this.Calcul?.toFixed(this.Precision);
    }
    if (this.Entree == "Fahrenheit" && this.Sortie == "Fahrenheit") {
      this.Resultat = parseFloat(this.Nombre).toFixed(this.Precision);
    }
    if (this.Entree == "Fahrenheit" && this.Sortie == "Kelvin") {
      this.Calcul = this.calculerKelvin(parseFloat(this.Nombre));
      this.Resultat = this.Calcul?.toFixed(this.Precision);
    }

    // De Kelvin à ?
    if (this.Entree == "Kelvin" && this.Sortie == "Celsius") {
      this.Calcul = this.calculerKelvin(parseFloat(this.Nombre));
      this.Resultat = this.Calcul?.toFixed(this.Precision);
    }
    if (this.Entree == "Kelvin" && this.Sortie == "Fahrenheit") {
      this.Calcul = this.calaculFahrenheit(parseFloat(this.Nombre));
      this.Resultat = this.Calcul?.toFixed(this.Precision);
    }
    if (this.Entree == "Kelvin" && this.Sortie == "Kelvin") {
      this.Resultat = parseFloat(this.Nombre).toFixed(this.Precision);
    }
  }

  //-----------------------------------------------------------------------
  //  Si l'Utilisateur entre un nouveau nombre le changement sera fait
  //-----------------------------------------------------------------------
  changementNombre() {
    // TODO : si est en bas du zero absolu
    if (this.Entree == "Celsius" && parseFloat(this.Nombre) < -273.15) {
      alert(this.Nombre + " est en desous du zéro absolu (-273.15)")
    } else if(this.Entree == "Fahrenheit" && parseFloat(this.Nombre) < -459.67){
      alert(this.Nombre + " est en desous du zéro absolu (-459.67)")
    } else if(this.Entree == "Kelvin" && parseFloat(this.Nombre) < 0){
      alert(this.Nombre + " est en desous du zéro absolu (0)")
    }else {
      this.changementSortie();
    }
  }

  //-----------------------------------------------------------------------
  //  Si l'Utilisateur change la précision le changement sera fait
  //-----------------------------------------------------------------------
  changementPrecision() {
    this.changementSortie();
  }

  //-----------------------------------------------------------------------
  //  Fonction pour la conversion en Fahrenheit 
  //-----------------------------------------------------------------------
  calaculFahrenheit(nombre: number) {
    if (this.Entree == "Celsius" && this.Sortie == "Fahrenheit") {
      return nombre * (9 / 5) + 32;
    } else if (this.Entree == "Fahrenheit" && this.Sortie == "Celsius") {
      return (nombre - 32) * (5 / 9);
    } else if (this.Entree == "Kelvin" && this.Sortie == "Fahrenheit") {
      return ((nombre - this.Kelvin) * (9 / 5)) + 32;
    } else { return 0; }
  }

  //-----------------------------------------------------------------------
  //  Fonction pour le changement en kelvin
  //-----------------------------------------------------------------------
  calculerKelvin(nombre: number) {
    if (this.Entree == "Celsius" && this.Sortie == "Kelvin") {
      return nombre + this.Kelvin;
    } else if (this.Entree == "Fahrenheit" && this.Sortie == "Kelvin") {
      return ((nombre - 32) * (5 / 9)) + this.Kelvin;
    } else if (this.Entree == "Kelvin" && this.Sortie == "Celsius") {
      return nombre - this.Kelvin;
    } else { return 0 }
  }
}
