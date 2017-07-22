import MiniBooking from './mini-booking'

export default MiniBooking.extend({
	pathForType(type){
		if(type != 'bookings')
			return type + 's';
		else
			return 'bookings';
	},

	createRecord: function(store, type, record) {
	    var data = {};
	    var serializer = store.serializerFor(record.modelName);

	    serializer.serializeIntoHash(data, type, record, { includeId: true });

	    // Custom stuff
	    var rentalId = record.record.rental_id;
	    var url = this.buildURL('rental', rentalId, 'rental') + '/bookings';
	    return this.ajax(url, "POST", { data: data });
	},

	urlForQuery: function(obj, model){
		return this.buildURL('rental', obj.retal_id, 'rental') + '/bookings';
	}
});
