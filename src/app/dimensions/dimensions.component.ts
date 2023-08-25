import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dimensions',
  templateUrl: './dimensions.component.html',
  styleUrls: ['./dimensions.component.css']
})
export class DimensionsComponent implements OnInit {

  LargeurVisible = true;
  ProfondeurVisible = true;

  Longueur: number = 1;
  Largeur: number = 1;
  Profondeur: number = 1;

  ResultatLongeur?: string = '';
  ResultatLargeur?: string = '';
  ResultatProfondeur?: string = '';

  Sortie: string = 'pouce';
  Entree: string = 'm';
  Precision: number = 5;
  Dimension: number = 1;

  Calcul?: number = 0;

  constructor() {

  }

  ngOnInit(): void {
    this.ResultatLongeur = (this.Longueur * 39.3701).toFixed(this.Precision);
    this.ResultatLargeur = (this.Largeur * 39.3701).toFixed(this.Precision);
    this.ResultatProfondeur = (this.Profondeur * 39.3701).toFixed(this.Precision);
  }

  //-----------------------------------------------------------------------
  //  Si l'Utilisateur change l'Entrée le changement sera fait
  //-----------------------------------------------------------------------
  changementEntree() {
    this.changementSortie();
  }

  //-----------------------------------------------------------------------
  //  Si l'Utilisateur entre une nouvelle longueur le changement sera fait
  //-----------------------------------------------------------------------
  changementLongueur() {
    this.changementSortie();
  }

  //-----------------------------------------------------------------------
  //  Si l'Utilisateur entre une nouvelle largeur le changement sera fait
  //-----------------------------------------------------------------------
  changementLargeur() {
    this.changementSortie();
  }

  //-----------------------------------------------------------------------
  //  Si l'Utilisateur entre une nouvelle profondeur le changement sera fait
  //-----------------------------------------------------------------------
  changementProfondeur() {
    this.changementSortie();
  }

  //-----------------------------------------------------------------------
  //  Evenement sur le changement de sortie
  //-----------------------------------------------------------------------
  changementSortie() {
    //  De mètre à ?
    if (this.Entree == "m" && this.Sortie == "mm") {
      this.ResultatLongeur = (this.Longueur * 1000).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 1000).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 1000).toFixed(this.Precision);
    }
    if (this.Entree == "m" && this.Sortie == "cm") {
      this.ResultatLongeur = (this.Longueur * 100).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 100).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 100).toFixed(this.Precision);
    }
    if (this.Entree == "m" && this.Sortie == "m") {
      this.ResultatLongeur = (this.Longueur).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur).toFixed(this.Precision);
    }
    if (this.Entree == "m" && this.Sortie == "km") {
      this.ResultatLongeur = (this.Longueur / 1000).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur / 1000).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur / 1000).toFixed(this.Precision);
    }
    if (this.Entree == "m" && this.Sortie == "pouce") {
      this.ResultatLongeur = (this.Longueur * 39.3701).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 39.3701).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 39.3701).toFixed(this.Precision);
    }
    if (this.Entree == "m" && this.Sortie == "pied") {
      this.ResultatLongeur = (this.Longueur * 3.28084).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 3.28084).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 3.28084).toFixed(this.Precision);
    }
    if (this.Entree == "m" && this.Sortie == "verge") {
      this.ResultatLongeur = (this.Longueur * 1.0936132983377).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 1.0936132983377).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 1.0936132983377).toFixed(this.Precision);
    }
    if (this.Entree == "m" && this.Sortie == "mile") {
      this.ResultatLongeur = (this.Longueur * 0.000621371).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 0.000621371).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 0.000621371).toFixed(this.Precision);
    }

    //  De millimètre à ?
    if (this.Entree == "mm" && this.Sortie == "mm") {
      this.ResultatLongeur = (this.Longueur).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur).toFixed(this.Precision);
    }
    if (this.Entree == "mm" && this.Sortie == "cm") {
      this.ResultatLongeur = (this.Longueur / 10).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur / 10).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur / 10).toFixed(this.Precision);
    }
    if (this.Entree == "mm" && this.Sortie == "m") {
      this.ResultatLongeur = (this.Longueur / 1000).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur / 1000).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur / 1000).toFixed(this.Precision);
    }
    if (this.Entree == "mm" && this.Sortie == "km") {
      this.ResultatLongeur = (this.Longueur / 1000000).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur / 1000000).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur / 1000000).toFixed(this.Precision);
    }
    if (this.Entree == "mm" && this.Sortie == "pouce") {
      this.ResultatLongeur = (this.Longueur * 0.0393701).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 0.0393701).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 0.0393701).toFixed(this.Precision);
    }
    if (this.Entree == "mm" && this.Sortie == "pied") {
      this.ResultatLongeur = (this.Longueur * 0.003280841666667).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 0.003280841666667).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 0.003280841666667).toFixed(this.Precision);
    }
    if (this.Entree == "mm" && this.Sortie == "verge") {
      this.ResultatLongeur = (this.Longueur * 0.0010936138888889999563).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 0.0010936138888889999563).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 0.0010936138888889999563).toFixed(this.Precision);
    }
    if (this.Entree == "mm" && this.Sortie == "mile") {
      this.ResultatLongeur = (this.Longueur / 1609344).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur / 1609344).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur / 1609344).toFixed(this.Precision);
    }

    //  De centimètre à ?
    if (this.Entree == "cm" && this.Sortie == "mm") {
      this.ResultatLongeur = (this.Longueur * 10).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 10).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 10).toFixed(this.Precision);
    }
    if (this.Entree == "cm" && this.Sortie == "cm") {
      this.ResultatLongeur = (this.Longueur).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur).toFixed(this.Precision);
    }
    if (this.Entree == "cm" && this.Sortie == "m") {
      this.ResultatLongeur = (this.Longueur / 100).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur / 100).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur / 100).toFixed(this.Precision);
    }
    if (this.Entree == "cm" && this.Sortie == "km") {
      this.ResultatLongeur = (this.Longueur / 100000).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur / 100000).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur / 100000).toFixed(this.Precision);
    }
    if (this.Entree == "cm" && this.Sortie == "pouce") {
      this.ResultatLongeur = (this.Longueur * 0.393701).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 0.393701).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 0.393701).toFixed(this.Precision);
    }
    if (this.Entree == "cm" && this.Sortie == "pied") {
      this.ResultatLongeur = (this.Longueur * 0.03280841666667).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 0.03280841666667).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 0.03280841666667).toFixed(this.Precision);
    }
    if (this.Entree == "cm" && this.Sortie == "verge") {
      this.ResultatLongeur = (this.Longueur * 0.010936138888889999563).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 0.010936138888889999563).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 0.010936138888889999563).toFixed(this.Precision);
    }
    if (this.Entree == "cm" && this.Sortie == "mile") {
      this.ResultatLongeur = (this.Longueur / 160934.4).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur / 160934.4).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur / 160934.4).toFixed(this.Precision);
    }

    //  De kilomètre à ?
    if (this.Entree == "km" && this.Sortie == "mm") {
      this.ResultatLongeur = (this.Longueur * 1000000).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 1000000).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 1000000).toFixed(this.Precision);
    }
    if (this.Entree == "km" && this.Sortie == "cm") {
      this.ResultatLongeur = (this.Longueur * 100000).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 100000).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 100000).toFixed(this.Precision);
    }
    if (this.Entree == "km" && this.Sortie == "m") {
      this.ResultatLongeur = (this.Longueur * 1000).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 1000).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 1000).toFixed(this.Precision);
    }
    if (this.Entree == "km" && this.Sortie == "km") {
      this.ResultatLongeur = (this.Longueur).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur).toFixed(this.Precision);
    }
    if (this.Entree == "km" && this.Sortie == "pouce") {
      this.ResultatLongeur = (this.Longueur * 39370.1).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 39370.1).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 39370.1).toFixed(this.Precision);
    }
    if (this.Entree == "km" && this.Sortie == "pied") {
      this.ResultatLongeur = (this.Longueur * 3280.841666667).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 3280.841666667).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 3280.841666667).toFixed(this.Precision);
    }
    if (this.Entree == "km" && this.Sortie == "verge") {
      this.ResultatLongeur = (this.Longueur * 1093.6138888889999563).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 1093.6138888889999563).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 1093.6138888889999563).toFixed(this.Precision);
    }
    if (this.Entree == "km" && this.Sortie == "mile") {
      this.ResultatLongeur = (this.Longueur / 1.609344).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur / 1.609344).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur / 1.609344).toFixed(this.Precision);
    }

    //  De pouce à ?
    if (this.Entree == "pouce" && this.Sortie == "mm") {
      this.ResultatLongeur = (this.Longueur / 0.0393701).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur / 0.0393701).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur / 0.0393701).toFixed(this.Precision);
    }
    if (this.Entree == "pouce" && this.Sortie == "cm") {
      this.ResultatLongeur = (this.Longueur / 0.393701).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur / 0.393701).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur / 0.393701).toFixed(this.Precision);
    }
    if (this.Entree == "pouce" && this.Sortie == "m") {
      this.ResultatLongeur = (this.Longueur / 39.3701).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur / 39.3701).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur / 39.3701).toFixed(this.Precision);
    }
    if (this.Entree == "pouce" && this.Sortie == "km") {
      this.ResultatLongeur = (this.Longueur / 39370.1).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur / 39370.1).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur / 39370.1).toFixed(this.Precision);
    }
    if (this.Entree == "pouce" && this.Sortie == "pouce") {
      this.ResultatLongeur = (this.Longueur).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur).toFixed(this.Precision);
    }
    if (this.Entree == "pouce" && this.Sortie == "pied") {
      this.ResultatLongeur = (this.Longueur / 12).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur / 12).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur / 12).toFixed(this.Precision);
    }
    if (this.Entree == "pouce" && this.Sortie == "verge") {
      this.ResultatLongeur = (this.Longueur / 36).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur / 36).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur / 36).toFixed(this.Precision);
    }
    if (this.Entree == "pouce" && this.Sortie == "mile") {
      this.ResultatLongeur = (this.Longueur / 63360).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur / 63360).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur / 63360).toFixed(this.Precision);
    }

    //  De pied à ?
    if (this.Entree == "pied" && this.Sortie == "mm") {
      this.ResultatLongeur = (this.Longueur * 304.79984).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 304.79984).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 304.79984).toFixed(this.Precision);
    }
    if (this.Entree == "pied" && this.Sortie == "cm") {
      this.ResultatLongeur = (this.Longueur * 30.479984).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 30.479984).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 30.479984).toFixed(this.Precision);
    }
    if (this.Entree == "pied" && this.Sortie == "m") {
      this.ResultatLongeur = (this.Longueur * 0.30479984).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 0.30479984).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 0.30479984).toFixed(this.Precision);
    }
    if (this.Entree == "pied" && this.Sortie == "km") {
      this.ResultatLongeur = (this.Longueur / 3280.841666667).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur / 3280.841666667).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur / 3280.841666667).toFixed(this.Precision);
    }
    if (this.Entree == "pied" && this.Sortie == "pouce") {
      this.ResultatLongeur = (this.Longueur * 12).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 12).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 12).toFixed(this.Precision);
    }
    if (this.Entree == "pied" && this.Sortie == "pied") {
      this.ResultatLongeur = (this.Longueur).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur).toFixed(this.Precision);
    }
    if (this.Entree == "pied" && this.Sortie == "verge") {
      this.ResultatLongeur = (this.Longueur / 3).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur / 3).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur / 3).toFixed(this.Precision);
    }
    if (this.Entree == "pied" && this.Sortie == "mile") {
      this.ResultatLongeur = (this.Longueur / 5280).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur / 5280).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur / 5280).toFixed(this.Precision);
    }

    //  De verge à ?
    if (this.Entree == "verge" && this.Sortie == "mm") {
      this.ResultatLongeur = (this.Longueur * 914.39951).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 914.39951).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 914.39951).toFixed(this.Precision);
    }
    if (this.Entree == "verge" && this.Sortie == "cm") {
      this.ResultatLongeur = (this.Longueur * 91.439951).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 91.439951).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 91.439951).toFixed(this.Precision);
    }
    if (this.Entree == "verge" && this.Sortie == "m") {
      this.ResultatLongeur = (this.Longueur * 0.91439951).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 0.91439951).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 0.91439951).toFixed(this.Precision);
    }
    if (this.Entree == "verge" && this.Sortie == "km") {
      this.ResultatLongeur = (this.Longueur / 1093.6138888889999563).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur / 1093.6138888889999563).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur / 1093.6138888889999563).toFixed(this.Precision);
    }
    if (this.Entree == "verge" && this.Sortie == "pouce") {
      this.ResultatLongeur = (this.Longueur * 36).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 36).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 36).toFixed(this.Precision);
    }
    if (this.Entree == "verge" && this.Sortie == "pied") {
      this.ResultatLongeur = (this.Longueur * 3).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 3).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 3).toFixed(this.Precision);
    }
    if (this.Entree == "verge" && this.Sortie == "verge") {
      this.ResultatLongeur = (this.Longueur).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur).toFixed(this.Precision);
    }
    if (this.Entree == "verge" && this.Sortie == "mile") {
      this.ResultatLongeur = (this.Longueur / 1760).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur / 1760).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur / 1760).toFixed(this.Precision);
    }

    //  De mile à ?
    if (this.Entree == "mile" && this.Sortie == "mm") {
      this.ResultatLongeur = (this.Longueur * 1609343.13095).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 1609343.13095).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 1609343.13095).toFixed(this.Precision);
    }
    if (this.Entree == "mile" && this.Sortie == "cm") {
      this.ResultatLongeur = (this.Longueur * 160934.313095).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 160934.313095).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 160934.313095).toFixed(this.Precision);
    }
    if (this.Entree == "mile" && this.Sortie == "m") {
      this.ResultatLongeur = (this.Longueur * 1609.34313095).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 1609.34313095).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 1609.34313095).toFixed(this.Precision);
    }
    if (this.Entree == "mile" && this.Sortie == "km") {
      this.ResultatLongeur = (this.Longueur * 1.60934313095).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 1.60934313095).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 1.60934313095).toFixed(this.Precision);
    }
    if (this.Entree == "mile" && this.Sortie == "pouce") {
      this.ResultatLongeur = (this.Longueur * 63360).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 63360).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 63360).toFixed(this.Precision);
    }
    if (this.Entree == "mile" && this.Sortie == "pied") {
      this.ResultatLongeur = (this.Longueur * 5280).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 5280).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 5280).toFixed(this.Precision);
    }
    if (this.Entree == "mile" && this.Sortie == "verge") {
      this.ResultatLongeur = (this.Longueur * 1760).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur * 1760).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur * 1760).toFixed(this.Precision);
    }
    if (this.Entree == "mile" && this.Sortie == "mile") {
      this.ResultatLongeur = (this.Longueur).toFixed(this.Precision);
      this.ResultatLargeur = (this.Largeur).toFixed(this.Precision);
      this.ResultatProfondeur = (this.Profondeur).toFixed(this.Precision);
    }
  }

  //-----------------------------------------------------------------------
  //  Si l'Utilisateur change la précision le changement sera fait
  //-----------------------------------------------------------------------
  changementPrecision() {
    this.changementSortie();
  }

  //-----------------------------------------------------------------------
  //  Si l'Utilisateur change la précision le changement sera fait
  //-----------------------------------------------------------------------
  changementDimension() {
    //  TODO: Afficher le type de la dimension
  }

}
