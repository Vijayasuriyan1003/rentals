# Copyright (c) 2024, bwh and contributors
# For license information, please see license.txt
import frappe
from frappe.model.document import Document

class ridebooking(Document):
    def validate(self):
        if not self.rate:
            self.rate =frappe.db.get_single_value("rentals setting","standard_rate")
        
        total_distance = 0
        for item in self.items:
            total_distance += int(item.distance)
        
        self.total_amount = int(total_distance * int(self.rate))
