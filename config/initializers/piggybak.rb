Piggybak.config do |config|
  # Config attr_accessors are:
  # shipping_calculators
  # payment_calculators
  # tax_calculators
  # default_country
  # activemerchant_test mode

  # Add calculators with the following method
  config.shipping_calculators << "Pickup"

  # Or, Override calculatores with the following override
  config.payment_calculators = ["BeanstreamGateway"]

  # Override the default country
  config.default_country = "NL"

  # Override the activemerchant billing mode
  config.activemerchant_mode = :test

  
end