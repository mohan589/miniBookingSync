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
		var rentalId = record._attributes.rental_id;
		var url = this.buildURL('rental', rentalId, 'rental') + '/bookings';
		return this.ajax(url, "POST", { data: data });
	},

	urlForQuery: function(obj, model){
		return this.buildURL('rental', obj.retal_id, 'rental') + '/bookings';
	},

	deleteRecord(store, type, snapshot){
		var url = this.buildURL('rental', snapshot.adapterOptions.rental.content.id, 'rental') + '/bookings/' + snapshot.adapterOptions.booking.id;
		return this.ajax(url, "DELETE");
	},

	updateRecord: function (store, type, snapshot) {
    var data = {};
    var serializer = store.serializerFor(type.modelName);

    serializer.serializeIntoHash(data, type, snapshot, { includeId: true });

    var id = snapshot.id;
    var url = this.buildURL('rental', snapshot.adapterOptions.rental.id, 'rental', 'updateRecord') + '/bookings/' + snapshot.id;

    return this.ajax(url, 'PUT', { data: data });
  }
});
