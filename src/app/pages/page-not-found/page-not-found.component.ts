import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { timer } from 'rxjs/internal/observable/timer';
import { map } from 'rxjs/internal/operators/map';
import { shareReplay } from 'rxjs/internal/operators/shareReplay';
import { takeWhile } from 'rxjs/internal/operators/takeWhile';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {
  router = inject(Router);

  countDown$ = timer(0, 1000).pipe(
    map((value) => 10 - value),
    takeWhile((value) => value >= 0),
    shareReplay(1)
  );

  redirectHome$ = this.countDown$.pipe(
    tap((value) => {
      if (value <= 0) {
        this.router.navigate(['']);
      }
    }),
    takeUntilDestroyed()
  );

  ngOnInit(): void {
    this.redirectHome$.subscribe();
  }
}
