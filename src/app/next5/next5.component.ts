import { Component, OnInit } from '@angular/core';
import { Next5Service } from './../next5.service'

@Component({
  selector: 'next5',
  templateUrl: './next5.component.html',
  styleUrls: ['./next5.component.scss']
})
export class Next5Component implements OnInit {

  next5: any
  errorMessage: any

  constructor(private next5Service: Next5Service) { }

  ngOnInit() {
    this.next5Service.getNext5s()
      .subscribe(next5 => {
                    this.next5 = next5
                  },
                  error => this.errorMessage = <any>error)
  }

}
