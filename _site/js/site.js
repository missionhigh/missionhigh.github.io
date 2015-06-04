window.jQuery(function ($) {
    Parse.initialize("Sd2euJhOL8JttJxylaBPt5NUfRJlnLD4ICI3G5xR", "hYK6lSmMFYb8Wpnv4jSqPtVLQDAgHG0A6JsXKjQy");

    $("#email-btn").on('click', function (e) {
			e.preventDefault();
			var email = $('#newsletter-email').val();
			var check = new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?)*$");
			var isEmail = check.test(email);
			console.log(isEmail);
			console.log(email);
			$('.subscribe-form')[0].reset();

			if (isEmail) {
				console.log('tyson rocks it all night');
				$('.email-success-msg').show();
				var Subscriber = Parse.Object.extend("Subscriber");
				var subscriber = new Subscriber();
				subscriber.set("email", email);

				subscriber.save(null, {
				  success: function(newsletter) {
				    console.log('save successful');
				  },
				  error: function(newsletter, error) {
				    console.log('Failed to create new object, with error code: ' + error.description);
				  }
				});
			}
		})
});