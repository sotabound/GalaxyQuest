
import { Component } from "@angular/core";

@Component({
    selector: 'gq-galaxies',
    templateUrl: './galaxy-list.component.html'
    
  })

export class GalaxyListComponent {
    pageTitle: string = 'Galaxies in our Universe';
    galaxies: any[] = [
        {
            "galaxyId": 1,
            "galaxyName": "NGC 3169",
            "galaxyImageUrl": "https://apod.nasa.gov/apod/image/2303/NGC3169LRGBrevFinalcropCDK1000_27Feb2023_1024.jpg",
            "imageCopyright": "Image Credit & Copyright: Mike Selby & Mark Hanson",
            "imageDescription": "Spiral galaxy NGC 3169 looks to be unraveling like a ball of cosmic yarn. It lies some 70 million light-years away, south of bright star Regulus toward the faint constellation Sextans.",
            "galaxySourceUrl": "https://apod.nasa.gov/apod/ap230302.html",
            "galaxyDistance":"70 Millions Light-Years"

        },
        {
            "galaxyId": 2,
            "galaxyName": "The Flaming Star Nebula",
            "galaxyImageUrl": "'https://apod.nasa.gov/apod/image/2303/FlamingStarComet_Roell_1080_annotated.jpg",
            "imageCopyright": "Image Credit & Copyright: Thomas Röell",
            "imageDescription": "Is star AE Aurigae on fire? No. Even though AE Aurigae is named the Flaming Star and the surrounding nebula IC 405 is named the Flaming Star Nebula.",
            "galaxySourceUrl": "https://apod.nasa.gov/apod/ap230301.html",
            "galaxyDistance":"1500 Light-Years"

        }
    ];
}