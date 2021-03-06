import { isArray } from '@ember/array';
import { isPresent } from '@ember/utils';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('tumblr-blog', 'Unit | Component | tumblr blog', {
  needs: ['component:tumblr-post'],
  unit: true
});

test('it renders', function (assert) {
  assert.expect(2);

  // Creates the component instance
  const component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('defaults', function (assert) {
  const component = this.subject();

  assert.ok(!isPresent(component.get('postsRoute')), 'postsRoute is not defined by default');
  assert.ok(!component.get('collapsible'), 'blog is not collapsible by default');
  assert.ok(component.get('collapseByDefault'), 'blog is set to collapse by default if collapsible');

  const sortBy = component.get('sortBy');
  assert.ok(isArray(sortBy), 'sortBy is array');
  assert.equal(sortBy.length, 0, 'sortBy has no elements');

  assert.ok(component.get('formatDates'), 'date formatting enabled by default');
  assert.ok(component.get('showErrors'), 'error is displayed by default if no posts are found');
  assert.ok(isPresent(component.get('errorMessage')), 'default error message is supplied');
});
