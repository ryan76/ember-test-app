import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["percentage-indicator"],
  percentValue: '',

  actions: {
    run() {
      var canvasSize = 200;
      var centre = canvasSize/2;
      var radius = canvasSize*0.8/2;
      var s = Snap('#svg');
      var path = "";
      var arc = s.path(path);
      var startY = centre-radius;
      var percent = this.percentValue/100;
      var endpoint = percent*360;
      Snap.animate(0, endpoint, function (val) {
        arc.remove();

        var d = val;
        var dr = d-90;
        var radians = Math.PI*(dr)/180;
        var endx = centre + radius*Math.cos(radians);
        var endy = centre + radius * Math.sin(radians);
        var largeArc = d>180 ? 1 : 0;
        path = "M"+centre+","+startY+" A"+radius+","+radius+" 0 "+largeArc+",1 "+endx+","+endy;

        arc = s.path(path);
        arc.attr({
          stroke: '#3da08d',
          fill: 'none',
          strokeWidth: 12
        });
        $('#percent').html(Math.round(val/360*100) +'%');

      }, 2000, mina.easeinout);
    }
  }
});
