import MiniBooking from './mini-booking'

export default MiniBooking.extend({
	pathForType(){
		return 'bookings';
	},

	createRecord: function(store, type, record) {
	    var data = {};
	    var serializer = store.serializerFor(type.typeKey);

	    serializer.serializeIntoHash(data, type, record, { includeId: true });

	    // Custom stuff
	    var rentalId = record.get('rental.id');
	    var url = this.buildURL(type.typeKey, rentalId) + '/bookings';
	    return this.ajax(url, "POST", { data: data });
	}
});