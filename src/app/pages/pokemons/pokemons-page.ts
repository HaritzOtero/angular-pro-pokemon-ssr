import {
  ChangeDetectionStrategy,
  Component,
  signal,
  OnInit,
  inject,
  ApplicationRef,
} from '@angular/core';
import { PokemonList } from '../../pokemons/components/pokemon-list/pokemon-list';
import { PokemonListSkeleton } from './ui/pokemon-list-skeleton/pokemon-list-skeleton';
import { PokemonsService } from '../../pokemons/services/pokemons.service';
import { SimplePokemon } from '../../pokemons/interfaces/simple.pokemon.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'pokemons-page',
  imports: [PokemonList, PokemonListSkeleton],
  templateUrl: './pokemons-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPage implements OnInit {
  private pokemonsService = inject(PokemonsService);
  public pokemons = signal<SimplePokemon[]>([]);

  private route = inject(ActivatedRoute);
  private router = inject(Router)
  private titile = inject(Title);

  isLoading() {
    return false;
  }

  public currentPage = toSignal<number>(
    this.route.queryParamMap.pipe(
      map((params) => params.get('page') || '1'),
      map((page) => (isNaN(+page) ? 1 : +page)),
      map((page) => Math.max(1, page)),
    ),
  );

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(console.log);
    this.loadPokemons();
  }

  public loadPokemons(page = 0) {

    const pageToLoad = this.currentPage()! + page;

    this.pokemonsService.loadPage(pageToLoad)
    .pipe(
      tap(() => this.router.navigate([], {queryParams: { page: pageToLoad } })),
      tap(() => this.titile.setTitle(`Pokemons - Page ${pageToLoad}`))
    )
    .subscribe((pokemons) => {
      this.pokemons.set(pokemons);
    });
  }
}
