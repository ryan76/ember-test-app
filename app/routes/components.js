import Ember from 'ember';

var components = [{
  id: 1,
  title: 'Component 1',
  creator: 'Ryan Niemann',
  type: 'Button',
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
}, {
  id: 2,
  title: 'Component 2',
  creator: 'Ryan Niemann',
  type: 'Dropdown',
  image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
}, {
  id: 3,
  title: 'Component 3',
  creator: 'Ryan Niemann',
  type: 'Modal',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
}];

export default Ember.Route.extend({
  model() {
    return components;
  }
});
