import DS from 'ember-data';
export default DS.RESTSerializer.extend({
	normalizeResponse(store, primaryModelClass, payload, id, requestType){
		payload = {rentals: payload};
		// console.log(payload);
		this._super(store, primaryModelClass, payload, id, requestType);
	}
});