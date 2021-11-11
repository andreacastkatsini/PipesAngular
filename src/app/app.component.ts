import { Component } from '@angular/core';
import { ILanguage } from 'src/interface/ilanguage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  private _langFilter: string = '';
  get LettersPipe(): string {
    return this._langFilter;
  }
  set LettersPipe (value:string): string {
    return this._langFilter: value;
  }


  title = 'Ejercitando Pipes';
  vector = [1, 2, 3, 4, 5, 6, 7];

  performFilter(filterBy: string): LettersPipe(){
    filterBy = filterBy.toLocaleLowerCase();
    return this.language.filter((language: IProduct) =>
    product.productName.toLocaleLowerCase().includes(filterBy));

  ngOnInit(): void {
    this.LettersPipe = 'Español';

  }

  performFilter() : ILanguage [] {
    return this.LettersPipe.includes(this.languageFilter)
  }
}
