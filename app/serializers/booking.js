import Application from './application'

export default Application.extend({
	isNewSerializerAPI: true,
	normalizeResponse(store, primaryModelClass, payload, id, requestType){
		payload = { bookings: payload };
		// console.log(payload);
		return this._super(store, primaryModelClass, payload, id, requestType);
	},

  // keyForRelationship(key/*, relationship, method*/) {
  //    if(key === 'rental') return 'rental_id';
  //    return this._super(...arguments);
  // }



  // normalizeArrayResponse: function(store, primaryModelClass, payload, id, requestType) {
  //   var normalizedRecords = [];

  //   payload.map(function(record){
  //     // var id = record.id;
  //     // delete record.id;

  //     // var normalizedRecord = {
  //     //   rental: record
  //     // };

  //     normalizedRecords.push(record);
  //   });

  //   normalizedRecords = {rentals: normalizedRecords};
  //   return normalizedRecords;
  //  }
});
