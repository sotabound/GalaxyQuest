
import { Component, OnDestroy, OnInit } from "@angular/core";
import { IGalaxy } from "./galaxies";
import { GalaxyService } from "./galaxy.service";
import { Subscription } from "rxjs/internal/Subscription";

@Component({
    //selector: 'gq-galaxies',
    templateUrl: './galaxy-list.component.html',
    styleUrls: ['./galaxy-list.component.css']
        
  })

export class GalaxyListComponent implements OnInit, OnDestroy {
       
    pageTitle: string = 'Galaxies in our Universe';
    showDescription: boolean = false;
    imageWidth: number = 200;
    imageHeight: number = 200;
    imageMargin: number = 2;
    imageCorner: number = 10;
    errorMessage: string = '';
    sub!: Subscription;
    
    private _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log('In setter:', value);
        this.filteredGalaxies = this.performFilter(value);
    }
    // implemented new Interface
    filteredGalaxies: IGalaxy[] = [];
    galaxies: IGalaxy[] = [];
    // Injects the Galaxy Service
    constructor(private galaxyService: GalaxyService) {}
    
    performFilter(filterBy: string): IGalaxy[] {
        console.log('Perform Filter run: ' + filterBy);
        filterBy = filterBy.toLocaleLowerCase();
        return this.galaxies.filter((galaxy: IGalaxy) =>
            galaxy.galaxyName.toLocaleLowerCase().includes(filterBy));
    }

    // Button to show/hide the description text
    
    toggleDescription(): void {
        this.showDescription  = !this.showDescription ;
    };
    // Default for Filter Input
    // Lifecycle hook
    ngOnInit(): void {
        // initiallizes the Galaxy Service
        //this.galaxies = this.galaxyService.getGalaxies();
         //this.listFilter = 'cart';
        this.sub = this.galaxyService.getGalaxies().subscribe({
            next: galaxies => {
                this.galaxies = galaxies;
                this.filteredGalaxies = this.galaxies
            },
            error: err => this.errorMessage = err
        });
        
        console.log(" this is working")
    }
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
    onRatingClicked(message: string): void {
        this.pageTitle = 'Galaxy list' + message;
    }
}