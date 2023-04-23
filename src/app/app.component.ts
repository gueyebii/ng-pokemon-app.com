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
    const pokemon: Pokemon | undefined= this.pokemonsList.find(pokemon => pokemon.id == +pokemonId)
    if(pokemon){
      console.log(`vous avez sélectioner : ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    }
    else{
      console.log("Le pokemon recherché n'existe pas ");
      this.pokemonSelected = pokemon      
    }
    
  }

}
