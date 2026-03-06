import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPage {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('About Page');
    this.meta.updateTag({name: 'description', content: 'Este es mi About Page'});
    this.meta.updateTag({name: 'og:title', content: 'About Page'});
    this.meta.updateTag({name: 'keywords', content: 'Haritz,Otero,Elver,Angular PRO'});
  }
}
