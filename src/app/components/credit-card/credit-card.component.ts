import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {
  @Input() cardType;
  @Input() cardNumber;
  @Input() cardHolder;
  @Input() expiresYear;
  @Input() expiresMonth;
  @Input() isFliped;
  @Input() timeToFlip;
  @Input() cvv;
  cardMask = '#### #### #### ####'

  constructor() { }

  flip() {
    setTimeout(() => {
      return this.isFliped;
    }, 300)
  }
  ngOnInit(): void {
  }
}