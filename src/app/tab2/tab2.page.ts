import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  items: any = [{ title: "Chicken Biryani", picture:"https://www.infola.pk/wp-content/uploads/2017/09/Pakistani-Traditional-Dishes-Popular-Food-infola.jpg"}, 
  {title: "kabab", picture:"https://image.shutterstock.com/image-photo/seekh-kabab2-260nw-154602107.jpg" },
  {  title: "Chicken karahi",picture:"http://fatimacooks.net/wp-content/uploads/2015/05/11348953_1474810852809651_1723663297_n.jpg" },
  { title: "Chicken Biryani", picture:"https://www.infola.pk/wp-content/uploads/2017/09/Pakistani-Traditional-Dishes-Popular-Food-infola.jpg"},
  {title: "kabab", picture:"https://image.shutterstock.com/image-photo/seekh-kabab2-260nw-154602107.jpg" }, ]
  constructor(private menu: MenuController) { }
  // openFirst() {
  //   this.menu.enable(true, 'first');
  //   this.menu.open('first');
  // }

  // openEnd() {
  //   this.menu.open('end');
  // }

  // openCustom() {
  //   this.menu.enable(true, 'custom');
  //   this.menu.open('custom');
  // }


}
