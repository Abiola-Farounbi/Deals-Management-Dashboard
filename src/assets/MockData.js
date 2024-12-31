export const PIPELINE_STAGES = [
	"Lead Generated",
	"Contacted",
	"Application Submitted",
	"Application Under Review",
	"Deal Finalized",
	"Payment Confirmed",
	"Completed",
	"Lost"
  ];
  
export const MOCK_PRODUCTS = [
	{ id: 1, name: "Enterprise CRM Suite" },
	{ id: 2, name: "Marketing Automation Platform" },
	{ id: 3, name: "Customer Data Platform" },
	{ id: 4, name: "Sales Analytics Toolkit" },
	{ id: 5, name: "HR Management Software" },
	{ id: 6, name: "Cloud Storage Solution" },
	{ id: 7, name: "Collaboration Toolset" },
	{ id: 8, name: "Cybersecurity Suite" },
	{ id: 9, name: "E-commerce Integration Platform" },
	{ id: 10, name: "Business Intelligence Dashboard" }
];

export const MOCK_CLIENTS = [
	{ id: 1, name: "Acme Corp" },
	{ id: 2, name: "Global Tech Solutions" },
	{ id: 3, name: "Innovate LLC" },
	{ id: 4, name: "Blue Sky Enterprises" },
	{ id: 5, name: "Pinnacle Systems" },
	{ id: 6, name: "Silverline Tech" },
	{ id: 7, name: "NextGen Innovations" },
	{ id: 8, name: "Summit Holdings" },
	{ id: 9, name: "FutureWorks Inc" },
	{ id: 10, name: "Evergreen Enterprises" }
];

export const INITIAL_DEALS = [
	{
		id: 1,
		clientName: "Summit Holdings",
		productName: "Cloud Storage Solution",
		stage: "Lead Generated",
		createdDate: "2024-12-25"
	},
	{
		id: 2,
		clientName: "Silverline Tech",
		productName: "Cybersecurity Suite",
		stage: "Contacted",
		createdDate: "2024-12-23"
	},
	{
		id: 3,
		clientName: "Pinnacle Systems",
		productName: "Collaboration Toolset",
		stage: "Application Submitted",
		createdDate: "2024-12-22"
	},
	{
		id: 4,
		clientName: "NextGen Innovations",
		productName: "HR Management Software",
		stage: "Contacted",
		createdDate: "2024-12-20"
	},
	{
		id: 5,
		clientName: "FutureWorks Inc",
		productName: "Business Intelligence Dashboard",
		stage: "Application Submitted",
		createdDate: "2024-12-18"
	},
	{
		id: 6,
		clientName: "Evergreen Enterprises",
		productName: "Marketing Automation Platform",
		stage: "Application Under Review",
		createdDate: "2024-12-17"
	},
	{
		id: 7,
		clientName: "Innovate LLC",
		productName: "E-commerce Integration Platform",
		stage: "Deal Finalized",
		createdDate: "2024-12-15"
	},
	{
		id: 8,
		clientName: "Global Tech Solutions",
		productName: "Customer Data Platform",
		stage: "Deal Finalized",
		createdDate: "2024-12-13"
	},
	{
		id: 9,
		clientName: "Blue Sky Enterprises",
		productName: "Sales Analytics Toolkit",
		stage: "Payment Confirmed",
		createdDate: "2024-12-12"
	},
	{
		id: 10,
		clientName: "Acme Corp",
		productName: "Enterprise CRM Suite",
		stage: "Completed",
		createdDate: "2024-12-10"
	}
];