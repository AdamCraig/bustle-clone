import DS from 'ember-data';

export default DS.Model.extend({
    category: DS.attr(),
    title: DS.attr(),
    image: DS.attr(),
    copy: DS.attr(),
    author: DS.attr()
});
