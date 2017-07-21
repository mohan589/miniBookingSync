import DS from 'ember-data';
import RESTSerializer from 'ember-data/serializers/rest';
export default DS.RESTAdapter.extend(DS.EmbeddedRecordsMixin,{
	attrs: {
       booking: { embedded: 'always' },
       rental: { embedded: 'always' }
  	}
});