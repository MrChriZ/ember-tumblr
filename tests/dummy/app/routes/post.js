import Ember from 'ember';

export default Ember.Route.extend({
  model(params/*, transition*/) {
    return this.store.find('tumblr-post-text', {
      id: params.post_id
    }).then(function (posts) {
      return posts.get('firstObject');
    });
  }
});
