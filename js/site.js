window.jQuery(function ($) {
    Parse.initialize("Sd2euJhOL8JttJxylaBPt5NUfRJlnLD4ICI3G5xR", "hYK6lSmMFYb8Wpnv4jSqPtVLQDAgHG0A6JsXKjQy");

    $("#email-btn").on('click', function (e) {
			e.preventDefault();
			var email = $('#newsletter-email').val();
			var check = new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?)*$");
			var isEmail = check.test(email);
			$('.subscribe-form')[0].reset();

			if (isEmail) {
				console.log('tyson rocks it all night');
				$('.email-success-msg').show();
				var Subscriber = Parse.Object.extend("Subscriber");
				var subscriber = new Subscriber();
				subscriber.set("email", email);

				subscriber.save(null, {
				  success: function(subscriber) {
				    console.log('save successful');
				  },
				  error: function(subscriber, error) {
				    console.log('Failed to create new object, with error code: ' + error.description);
				  }
				});
			}
		});
		$("#apply-spark-btn").on('click', function (e) {
			e.preventDefault();
			console.log('i have applied');
			var fullName 				= $('#applicant-name-input').val();
			var email 					= $('#applicant-email-input').val();
			var role 						= $('#applicant-role-input').val();
			var projectTitle 		= $('#applicant-project-input').val();
			var needStatement 	= $('#need-statement-input').val();
			var overview 				= $('#overview-input').val();
			var popServed				= $('#served-input').val();
			var outcomes 				= $('#outcomes-input').val();
			var sustainability 	= $('#sustainability-input').val();
			var budget	 				= $('#budget-input').val();
			var amount 					= $('.grant-input:checked').val();

			var budgetItem	 				= $('#budget-item-input').val();
			var budgetUnit	 				= $('#budget-unit-input').val();
			var budgetCost	 				= $('#budget-cost-input').val();
			var budgetTotal	 				= $('#budget-cost-total-input').val();
			var budgetResources	 		= $('#bud-resources-input').val();
	

			if (fullName && 
					email && 
					role && 
					projectTitle && 
					needStatement && 
					overview && 
					popServed && 
					outcomes && 
					sustainability && 
					budget && 
					amount && 
					budgetItem &&
					budgetUnit &&
					budgetCost &&
					budgetTotal &&
					budgetResources) {
				console.log('application is good. no whammys');
				$('.spark-success-msg').show();
				$('.spark-error-msg').remove();
				var Fall15Spark = Parse.Object.extend("Fall15Spark");
				var fall15Spark = new Fall15Spark();
				fall15Spark.set("name", fullName);
				fall15Spark.set("email", email);
				fall15Spark.set("role", role);
				fall15Spark.set("project", projectTitle);
				fall15Spark.set("need", needStatement);
				fall15Spark.set("overview", overview);
				fall15Spark.set("population", popServed);
				fall15Spark.set("outcomes", outcomes);
				fall15Spark.set("sustainability", sustainability);
				fall15Spark.set("budget", budget);
				fall15Spark.set("amount", amount);

				fall15Spark.set("bItem", budgetItem);
				fall15Spark.set("bUnit", budgetUnit);
				fall15Spark.set("bCost", budgetCost);
				fall15Spark.set("bTotal", budgetTotal);
				fall15Spark.set("bResources", budgetResources);

				fall15Spark.save(null, {
				  success: function(fall15Spark) {
				    console.log('save successful');
				    console.log(fall15Spark);
				  },
				  error: function(fall15Spark, error) {
				    console.log('Failed to create new object, with error code: ' + error.description);
				  }
				});
				$('.spark-application-form')[0].reset();
			} else {
				$('.spark-error-msg').show();
				$('.spark-success-msg').remove();
			}
		});
});