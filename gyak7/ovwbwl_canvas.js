const canvas = document.querySelector(".myCanvas");
const ctx = canvas.getContext("2d");
var img = new Image();
img.src = "../kepek/iit.jpg";

ctx.font = "15px Arial";
ctx.fillStyle = "#e39f22";
ctx.fillText("Mérnökinformatikus 2024", 65, 20);

ctx.fillStyle = "blue";
ctx.beginPath();
ctx.rect(35, 70, 90, 61);
ctx.fill();

ctx.fillStyle = "white";
ctx.beginPath();
ctx.rect(37, 72, 86, 57);
ctx.fill();

const startAngle = Math.PI * 1.5; // 9 o'clock
const endAngle = Math.PI * 0.3; // 12 o'clock

ctx.beginPath();
ctx.arc(200, 65, 30, endAngle, startAngle);
ctx.closePath();
ctx.fillStyle = "#ebe53d";
ctx.fill();

ctx.beginPath();
ctx.arc(200, 65, 30, endAngle, startAngle);
ctx.strokeStyle = "blue";
ctx.stroke();

ctx.drawImage(img, 33, 71, 104, 124, 21, 20, 87, 104);