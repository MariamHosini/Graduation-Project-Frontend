import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: false,
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css',
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Input() totalReviews: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];
  ngOnInit(): void {}

  getStarClass(star: number): string {
    if (this.rating >= star) return 'full';
    if (this.rating >= star - 0.5) return 'half';
    return 'empty';
  }
}
