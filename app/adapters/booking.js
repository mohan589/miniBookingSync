import MiniBooking from './mini-booking'

export default MiniBooking.extend({
	host: 'http://localhost:3000',
	pathForType(){
		return 'bookings';
	}
});