import { Component, OnInit } from "@angular/core";
import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemons";

@Component({
  selector: "app-root",
  templateUrl: 'app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  title = "ng-pokemon-app";
  pokemonsList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;
  ngOnInit(): void {
    console.table(this.pokemonsList);
  }

  pokemonSelect(pokemonId: string) {
    const id = +pokemonId;
    if(id>11){
      console.log("ce pokemon n'existe pas ");
    }
    else
    {
      console.log(`vous avez sélectioner le pokemon ${this.pokemonsList[id].name} `);
    }
  }

}
