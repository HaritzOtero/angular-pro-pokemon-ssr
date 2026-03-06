import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  imports: [],
  templateUrl: './pricing-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPage {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Pricing Page');
    this.meta.updateTag({name: 'description', content: 'Este es mi About Page'});
    this.meta.updateTag({name: 'og:title', content: 'About Page'});
    this.meta.updateTag({name: 'keywords', content: 'Haritz,Otero,Elver,Angular PRO'});
  }
}
