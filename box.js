class Box{
  constructor(x, y, width, height, angle) {
    var options = {
        'restitution':0,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
}
};