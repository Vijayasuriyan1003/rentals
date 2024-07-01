import frappe

def execute():
    vehicles = frappe.db.get_all("vehicle")
    for v in vehicles:
        vehicle=frappe.get_doc("vehicle",v)
        vehicle.set_title()
        vehicle.save()

    frappe.db.commit()