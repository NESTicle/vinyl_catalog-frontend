import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IVinylService } from 'src/app/services/interfaces/vinyl.interface';
import { SearchService } from 'src/app/services/implementations/search.service';
import { ISecurityService } from 'src/app/services/interfaces/security.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public formGroup: FormGroup;
  public loggedUser: any;

  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService,
    private securityService: ISecurityService,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      search: [''],
    });

    this.loggedUser = this.securityService.getCurrentUser();
  }

  searchVinyl(e: any): void {
    const search = this.formGroup.value.search;

    if (!search) {
      return;
    }

    this.searchService.sendFilter(search);
  }

  signOut(): void {
    this.securityService.logout();
  }
}
