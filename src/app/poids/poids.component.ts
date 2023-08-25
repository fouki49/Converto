import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poids',
  templateUrl: './poids.component.html',
  styleUrls: ['./poids.component.css']
})
export class PoidsComponent implements OnInit {

  Nombre: string = '1';
  Resultat?: string = '';
  Sortie: string = 'livre';
  Entree: string = 'kg';
  Precision: number = 2;

  Calcul?: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.Calcul = parseFloat(this.Nombre) * 2.20462;
    this.Resultat = this.Calcul.toFixed(this.Precision);
  }

  //-----------------------------------------------------------------------
  //  Si l'Utilisateur change l'Entrée le changement sera fait
  //-----------------------------------------------------------------------
  changementEntree() {
    this.changementSortie();
  }

  //-----------------------------------------------------------------------
  //  Si l'Utilisateur entre un nouveau nombre le changement sera fait
  //-----------------------------------------------------------------------
  changementNombre() {
    this.changementSortie();
  }

  //-----------------------------------------------------------------------
  //  Evenement sur le changement de sortie
  //-----------------------------------------------------------------------
  changementSortie() {
    //  De kilogramme à ?
    if (this.Entree == "kg" && this.Sortie == "g") {
      this.Calcul = parseFloat(this.Nombre) * 1000;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "kg" && this.Sortie == "kg") {
      this.Resultat = parseFloat(this.Nombre).toFixed(this.Precision);
    }
    if (this.Entree == "kg" && this.Sortie == "tonne mét") {
      this.Calcul = parseFloat(this.Nombre) / 1000;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "kg" && this.Sortie == "once") {
      this.Calcul = parseFloat(this.Nombre) * 35.27392;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "kg" && this.Sortie == "livre") {
      this.Calcul = parseFloat(this.Nombre) * 2.20462;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "kg" && this.Sortie == "tonne courte") {
      this.Calcul = parseFloat(this.Nombre) / 907.2;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }

    //  De gramme à ?
    if (this.Entree == "g" && this.Sortie == "g") {
      this.Resultat = parseFloat(this.Nombre).toFixed(this.Precision);
    }
    if (this.Entree == "g" && this.Sortie == "kg") {
      this.Calcul = parseFloat(this.Nombre) / 1000;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "g" && this.Sortie == "tonne mét") {
      this.Calcul = parseFloat(this.Nombre) / 1000000;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "g" && this.Sortie == "once") {
      this.Calcul = parseFloat(this.Nombre) / 28.349523125;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "g" && this.Sortie == "livre") {
      this.Calcul = parseFloat(this.Nombre) / 453.592;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "g" && this.Sortie == "tonne courte") {
      this.Calcul = parseFloat(this.Nombre) / 907200;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }

    //  De tonne métrique à ?
    if (this.Entree == "tonne mét" && this.Sortie == "g") {
      this.Calcul = parseFloat(this.Nombre) * 1000000;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "tonne mét" && this.Sortie == "kg") {
      this.Calcul = parseFloat(this.Nombre) * 1000;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "tonne mét" && this.Sortie == "tonne mét") {
      this.Resultat = parseFloat(this.Nombre).toFixed(this.Precision);
    }
    if (this.Entree == "tonne mét" && this.Sortie == "once") {
      this.Calcul = parseFloat(this.Nombre) * 35273.92;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "tonne mét" && this.Sortie == "livre") {
      this.Calcul = parseFloat(this.Nombre) * 2204.62;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "tonne mét" && this.Sortie == "tonne courte") {
      this.Calcul = parseFloat(this.Nombre) * 1.10231;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }

    //  De once à ?
    if (this.Entree == "once" && this.Sortie == "g") {
      this.Calcul = parseFloat(this.Nombre) * 28.34956;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "once" && this.Sortie == "kg") {
      this.Calcul = parseFloat(this.Nombre) / 35.274;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "once" && this.Sortie == "tonne mét") {
      this.Calcul = parseFloat(this.Nombre) * 0.000028349523125;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "once" && this.Sortie == "once") {
      this.Resultat = parseFloat(this.Nombre).toFixed(this.Precision);
    }
    if (this.Entree == "once" && this.Sortie == "livre") {
      this.Calcul = parseFloat(this.Nombre) / 16;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "once" && this.Sortie == "tonne courte") {
      this.Calcul = parseFloat(this.Nombre) / 32000;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }

    //  De livre à ?
    if (this.Entree == "livre" && this.Sortie == "g") {
      this.Calcul = parseFloat(this.Nombre) * 453.59291;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "livre" && this.Sortie == "kg") {
      this.Calcul = parseFloat(this.Nombre) / 2.20462;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "livre" && this.Sortie == "tonne mét") {
      this.Calcul = parseFloat(this.Nombre) / 2204.62;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "livre" && this.Sortie == "once") {
      this.Calcul = parseFloat(this.Nombre) * 16;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "livre" && this.Sortie == "livre") {
      this.Resultat = parseFloat(this.Nombre).toFixed(this.Precision);
    }
    if (this.Entree == "livre" && this.Sortie == "tonne courte") {
      this.Calcul = parseFloat(this.Nombre) / 2000;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }

    //  De tonne courte à ?
    if (this.Entree == "tonne courte" && this.Sortie == "g") {
      this.Calcul = parseFloat(this.Nombre) * 907185.81887;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "tonne courte" && this.Sortie == "kg") {
      this.Calcul = parseFloat(this.Nombre) * 907.18581887;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "tonne courte" && this.Sortie == "tonne mét") {
      this.Calcul = parseFloat(this.Nombre) / 1.10231;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "tonne courte" && this.Sortie == "once") {
      this.Calcul = parseFloat(this.Nombre) * 32000;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "tonne courte" && this.Sortie == "livre") {
      this.Calcul = parseFloat(this.Nombre) * 2000;
      this.Resultat = this.Calcul.toFixed(this.Precision);
    }
    if (this.Entree == "tonne courte" && this.Sortie == "tonne courte") {
      this.Resultat = parseFloat(this.Nombre).toFixed(this.Precision);
    }
  }

  //-----------------------------------------------------------------------
  //  Si l'Utilisateur change la précision le changement sera fait
  //-----------------------------------------------------------------------
  changementPrecision() {
    this.changementSortie();
  }
}
