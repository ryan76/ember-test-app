export default function() {
  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */

  this.get('/components', function() {
    return {
      data: [{
        type: 'components',
        id: 1,
        attributes: {
          title: 'Ember Guage Component',
          creator: 'Julien Knebel',
          type: 'Guage',
          image: 'http://front-back.com/wp-content/uploads/2013/10/ember-gauge-component_21.png'
        }
      }, {
        type: 'components',
        id: 2,
        attributes: {
          title: 'Dashboard Navigation',
          creator: 'Gavin Joyce',
          type: 'Navbar',
          image: 'https://blog.intercom.io/wp-content/uploads/2014/05/Segments-Screen-Shot.png'
        }
      }, {
        type: 'components',
        id: 3,
        attributes: {
          title: 'Component 3',
          creator: 'Ryan Niemann',
          type: 'Modal',
          image: 'https://www.codementor.io/assets/topic/tutorial_guide/2x/ember-js_tutorial.png'
        }
      }]
    };
  });
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
