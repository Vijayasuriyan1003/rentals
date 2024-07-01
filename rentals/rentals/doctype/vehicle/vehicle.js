// Copyright (c) 2024, bwh and contributors
// For license information, please see license.txt

frappe.ui.form.on("vehicle", {
 	refresh(frm) {

	},

    get_summary(frm){
        frm.get_field("summary").$wrapper.append("<h1>Here is your summary</h1>")
    }
 });
