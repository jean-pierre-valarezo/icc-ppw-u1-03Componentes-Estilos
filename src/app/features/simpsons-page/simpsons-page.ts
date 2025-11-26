import { Component, signal, effect } from '@angular/core';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { inject } from '@angular/core';
import { SimpsonsService } from '../simpsons/services/simpsons-service';
import { PaginationService } from '../simpsons/services/PaginationService';
import { RouterLink, RouterModule } from '@angular/router';
import { PaginationComponent } from '../daisyui-page/components/PaginationComponent/PaginationComponent';
import { HeroSimpsons } from '../simpsons/components/hero-simpsons/hero-simpsons';
import { Breadcrumbs } from '../../shared/components/breadcrumbs/breadcrumbs';
import { BackToTop } from '../../shared/components/back-to-top/back-to-top';


@Component({
  selector: 'app-simpsons-page',
  imports: [RouterLink, RouterModule, PaginationComponent,HeroSimpsons,Breadcrumbs,BackToTop],
  templateUrl: './simpsons-page.html',
  styleUrl: './simpsons-page.css',
})
export class SimpsonsPage {
  private simpsonsService = inject(SimpsonsService);
  paginationService = inject(PaginationService);

  simpsonsResource = toSignal(
    this.simpsonsService.getCharacters(this.paginationService.currentPage()).pipe(
      map(res => res)
    ),
    { initialValue: null }
  );
  totalPages = signal(0);

  constructor() {
    
    effect(() => {
      if (this.simpsonsResource()) {
        this.totalPages.set(this.simpsonsResource()!.pages);
      }
    });
  }

  charactersPerPage() {
    return 10;
  }
}



