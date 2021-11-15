import {sayHello} from "./js/console";
import {SayClass, sayClass} from "./js/SayObject";
import * as $ from "jquery";
import "bootstrap";
import Chart from "chart.js/auto";
import {getRelativePosition} from "chart.js/helpers";

sayHello("Chlochlo !");

const say = new SayClass();
say.sayHello();
say.sayGoodbye();

$("body").css("backgroundColor", "#FE0055");

const chart = new Chart(stx, {
   type: "line",
   data: data,
   options: {
       onClick: (e) => {
           const canvasPosition = getRelativePosition(e, chart);

           const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
           const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
       }
   }
});
