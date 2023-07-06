import { Component } from '@angular/core';
// Note we added an additional Router import
import { ActivatedRoute, Router } from '@angular/router';
import { IGalaxy } from './galaxies';

@Component({
  templateUrl: './galaxy-detail.component.html',
  styleUrls: ['./galaxy-detail.component.css']
})
export class GalaxyDetailComponent {
  pageTitle: string ='Galaxy Detail';
  galaxy: IGalaxy | undefined;

    // can add multiple constructor parameters
  constructor(private route: ActivatedRoute,
    private router: Router) {}
 
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // += adds to the string pageTitle
    this.pageTitle += `: ${id}`;
    this.galaxy = {
      "galaxyId": id,
        "galaxyName": "NGC-3169",
        "galaxyImageUrl": "https://apod.nasa.gov/apod/image/2303/NGC3169LRGBrevFinalcropCDK1000_27Feb2023_1024.jpg",
        "imageDate": "2023 March 2",
        "imageCopyright": "Image Credit & Copyright: Mike Selby & Mark Hanson",
        "imageDescription": "Spiral galaxy NGC 3169 looks to be unraveling like a ball of cosmic yarn. It lies some 70 million light-years away, south of bright star Regulus toward the faint constellation Sextans.",
        "galaxySourceUrl": "https://apod.nasa.gov/apod/ap230302.html",
        "galaxyDistance":"70 Millions Light-Years",
        "galaxySize" : 5
    }
  }
  onBack(): void {
    this.router.navigate(['/galaxies']);
    console.log('Go BACK!');
  }


}
