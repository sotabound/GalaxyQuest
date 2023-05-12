import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component ({
    selector: 'gq-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']

})
export class StarComponent implements OnChanges {
    @Input() rating: number = 0;
    cropWidth: number = 75;

  @Output() ratingClicked: EventEmitter<string> = 
    new EventEmitter<string>();

ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }
onClick(): void {
        console.log(`This Galaxy has a ${this.rating} size`)
        this.ratingClicked.emit(`This Galaxy has a ${this.rating} size`)
    }

}