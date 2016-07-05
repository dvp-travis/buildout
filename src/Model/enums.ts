export enum PropertyType {
	Office = 1,
	Retail,
	Industrial,
	Land = 5,
	'Multi-Family',
	'Special Purpose',
	Hospitality
}

export enum PropertySubtype {
	// Office
	'Office Building' = 101,
	'Creative/Loft',
	'Executive Suites',
	Medical,
	'Institutional/Governmental',

	// Retail
	'Street Retail' = 201,
	'Strip Center',
	'Free Standing Building',
	'Regional Mall',
	'Retail Pad',
	'Vehicle Related',
	'Outlet Center',
	'Power Center',
	'Neighborhood Center',
	'Community Center',
	'Specialty Center',
	'Theme/Festival Center',
	Restaurant,
	'Post Office',

	// Industrial
	Manufacturing = 301,
	'Warehouse/Distribution',
	'Flex Space',
	'Research & Development',
	'Refrigerated/Cold Storage',
	'Office Showroom',
	'Truck Terminal/Hub/Transit',
	'Self Storage',

	// Land
	Office = 501,
	Retail,
	'Retail-Pad',
	Industrial,
	Residential,
	Multifamily,
	Other,

	// Multi-Family
	'High-Rise' = 601,
	'Mid-Rise',
	'Low-Rise/Garden',
	'Government Subsidized',
	'Mobile Home Park',
	'Senior Living',
	'Skilled Nursing',

	// Special Purpose
	School = 701,
	Marina,
	Other703, // In the Buildout API documentation, there are two 'Other' values
	'Golf Course',

	// Hospitality
	'Full Service' = 801,
	'Limited Service',
	'Select Service',
	Resort,
	Economy,
	'Extended Stay',
	Casino
}

export enum DealStatus {
	'Off Market' = 0,
	'On Market',
	'Under Contract',
	Closed
}

export enum PropertyUse {
	'Net Leased Investment',
	Investment,
	'Vacant & Ready for Use',
	'Business for Sale'
}

export enum Tenancy {
	Single = 1,
	Multiple
}

export enum LeaseType {
	Gross = 1,
	'Modified Gross',
	NNN,
	'Modified Net',
	'Full Service',
	'Ground Lease'
}