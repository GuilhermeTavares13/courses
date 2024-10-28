import {input} from '@inquirer/prompts';
import {createWriteStream} from "fs";
import qr from "qr-image";

const userURL = await input({ message: 'Enter an URL: ' });
console.log(userURL);

let qr_png= qr.image(userURL,{type: 'png'});
qr_png.pipe(createWriteStream('qr_img.png'));

/*qr.pipe(createWriteStream())*/

/*
var qr = require('qr-image');

var qr_svg = qr.image('I love QR!', { type: 'svg' });
qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));

var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
*/
