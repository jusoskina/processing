
function setup() {
    const svg = document.getElementById('svg');
    const rc = rough.svg(svg);

    svg.appendChild(rc.path('M400 100 h 90 v 90 h -90z', {
      stroke: 'red',
      strokeWidth: '3',
      fill: 'rgba(0,0,255,0.2)',
      fillStyle: 'solid'
    }));
    svg.appendChild(rc.path('M400 250 h 90 v 90 h -90z', {
      fill: 'rgba(0,0,255,0.6)',
      fillWeight: 4, hachureGap: 8
    }));
    svg.appendChild(rc.path('M37,17v15H14V17z M50,0H0v50h50z', {
      stroke: 'red',
      strokeWidth: '1',
      fill: 'blue'
    }));
    svg.appendChild(rc.path('M80 80 A 45 45, 0, 0, 0, 125 125 L 125 80 Z', { fill: 'green' }));
    svg.appendChild(rc.path('M230 80 A 45 45, 0, 1, 0, 275 125 L 275 80 Z', { fill: 'purple', hachureAngle: 60, hachureGap: 5 }));
    svg.appendChild(rc.path('M80 230 A 45 45, 0, 0, 1, 125 275 L 125 230 Z', { fill: 'red' }));
    svg.appendChild(rc.path('M230 230 A 45 45, 0, 1, 1, 275 275 L 275 230 Z', { fill: 'blue' }));
}

function draw() {

//   stroke(0)
//   if(random(1) > prob){
//     line(x,y,x+spacing,y+spacing)
//   }else{
//     line(x,y+spacing,x+spacing,y)
//   }
//   x = x+spacing
//   if (x > width){
//     x = 0
//     y = y + spacing
//     prob = prob + (1/(height/spacing))
//     console.log(prob)
//   }

//   if(y > height){
//     save("10print.svg");
//     noLoop()
//   }

}