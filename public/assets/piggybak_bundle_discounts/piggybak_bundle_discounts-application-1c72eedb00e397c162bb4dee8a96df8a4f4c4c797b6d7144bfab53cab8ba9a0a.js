$(function(){
	if($('form#new_order').size() == 0) {
		return;
	}
	piggybak_bundle_discounts.apply_bundle_discount();
});

var piggybak_bundle_discounts = {
	apply_bundle_discount: function() {
		$.ajax({
			url: bundle_discount_lookup,
			cached: false,
			dataType: "JSON",
			success: function(data) {
				if(data.bundle_discount) {
					//Add valid bundle discount line items
					//Append visual bundle discount line item to totals
					//update totals
					$("#bundle_discount_total").html('-$' + (parseFloat(data.amount)).toFixed(2));
					$("#bundle_discount_row").show();
					piggybak.update_tax();
					piggybak.update_totals();
				}
			}
		});
	}	
};




