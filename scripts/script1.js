new Vue({
	el: '#events',					//targeted element
	data: {
		event: { 
			title : '',	description : '' 
		},	
		events: []	
	},	

	ready: function() {
		this.fetchEvents();
	},

	methods: {																//every other method
		fetchEvents: function() {
			var events = [];
			this.$set('events',events);
		},

		addEvent: function() {
			if(this.event.title){
				this.events.push(this.event);
				this.event = {title: '', description: ''};
			}
		},

		cancel: function() {
			this.event = {title: '', description: ''};
		}
	}
});