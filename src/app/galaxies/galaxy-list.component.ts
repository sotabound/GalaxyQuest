
import { Component, OnInit } from "@angular/core";
import { IGalaxy } from "./galaxies";

@Component({
    selector: 'gq-galaxies',
    templateUrl: './galaxy-list.component.html'
    
  })

export class GalaxyListComponent implements OnInit {
    pageTitle: string = 'Galaxies in our Universe';
    showDescription: boolean = false;
   
    private _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log('In setter:', value);
    }
    // implemented new Interface
    galaxies: IGalaxy[] = [
        {
            "galaxyId": 1,
            "galaxyName": "NGC-3169",
            "galaxyImageUrl": "https://apod.nasa.gov/apod/image/2303/NGC3169LRGBrevFinalcropCDK1000_27Feb2023_1024.jpg",
            "imageDate": "2023 March 2",
            "imageCopyright": "Image Credit & Copyright: Mike Selby & Mark Hanson",
            "imageDescription": "Spiral galaxy NGC 3169 looks to be unraveling like a ball of cosmic yarn. It lies some 70 million light-years away, south of bright star Regulus toward the faint constellation Sextans.",
            "galaxySourceUrl": "https://apod.nasa.gov/apod/ap230302.html",
            "galaxyDistance":"70 Millions Light-Years"

        },
        {
            "galaxyId": 2,
            "galaxyName": "The Flaming-Star Nebula",
            "galaxyImageUrl": "https://apod.nasa.gov/apod/image/2303/FlamingStarComet_Roell_1080_annotated.jpg",
            "imageDate": "2023 March 2",
            "imageCopyright": "Image Credit & Copyright: Thomas Röell",
            "imageDescription": "Is star AE Aurigae on fire? No. Even though AE Aurigae is named the Flaming Star and the surrounding nebula IC 405 is named the Flaming Star Nebula.",
            "galaxySourceUrl": "https://apod.nasa.gov/apod/ap230301.html",
            "galaxyDistance":"1500 Light-Years"

        }
    ];
    // Button to show/hide the description text
    toggleDescription(): void {
        this.showDescription  = !this.showDescription ;
    };
    // Default for Filter Input
    ngOnInit(): void {
        this.listFilter = 'cart';
       console.log(" this is working")
    }
}