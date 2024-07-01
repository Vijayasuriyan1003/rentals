import frappe

def get_context(context):
    context.my_secret_emoji = "😀"

def throw_emoji(doc, event):
    frappe.throw("😀")

def send_payment_remainders():
    pass
def get_permission_query_conditions_for_vehicle(user):
    return "name=1"
