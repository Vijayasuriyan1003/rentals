// Copyright (c) 2024, bwh and contributors
// For license information, please see license.txt

frappe.ui.form.on("ride booking", {
 	refresh(frm) {
     
 	},

    rate(frm) {
        //recalculate total
        frm.trigger("update_total_amount");
    },

    update_total_amount(frm){
        let total_d = 0;
        for(let item of frm.doc.items){
            total_d += item.distance;
        }

        const amount = frm.doc.rate * total_d;
        frm.set_value("total_amount",amount);
    }
 });

 frappe.ui.form.on('ride booking item', {
	refresh(frm) {
		// your code here
	},
    distance(frm, cdt, cdn){
        frm.trigger("update_total_amount");
    },
    items_remove(frm) {
        frm.trigger("update_total_amount");
    }
})
