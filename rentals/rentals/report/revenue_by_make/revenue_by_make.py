# Copyright (c) 2024, bwh and contributors
# For license information, please see license.txt

import frappe


def execute(filters=None):
    
	print(filters)

	columns = [
		{"fieldname": "make","label":"make","fieldtype":"data"},
		{"fieldname": "total_revenue","label":"Total revenue","fieldtype":"currency","fieldtype":"data","options":"AED"},
		]
	
	data = frappe.get_all(
		"ride booking",
		fields=["SUM(total_amount) AS total_revenue","vehicle.make"],
		filters={"docstatus":1}, 
		group_by="make",
	)
	chart={
		"data":{
		"labels":[x.make for x in data],
		"datasets":[{"values":[x.total_revenue for x in data]}],
		      },
		"type":"pie"
	      }
	return columns,data,"Here is the report",chart