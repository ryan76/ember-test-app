import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["carousel-component"],
  currentPanel: 1,
  panels: {1: 0, 2: -40, 3: -80, 4: -120, 5: -160, 6: -200, 7: -240, 8: -280, 9: -320},

  actions: {
    previous() {
      var c = $('.carousel');
      var previousPanel = this.currentPanel - 1;
      var previousPanelRotationValue = this.panels[previousPanel];
      TweenMax.to(c, 2, {z:-288, rotationY:previousPanelRotationValue});
      this.currentPanel--;
    },

    next() {
      var c = $('.carousel');
      var nextPanel = this.currentPanel + 1;
      var nextPanelRotationValue = this.panels[nextPanel];
      TweenMax.to(c, 2, {z:-288, rotationY:nextPanelRotationValue});
      this.currentPanel++;
    }
  }
});
