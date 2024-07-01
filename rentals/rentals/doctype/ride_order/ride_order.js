frappe.ui.form.on("ride order", {
    onload(frm) {
        console.log("running load...");
    },
    setup(frm) {
        console.log("setup...");
    },
    refresh(frm) {
        console.log("on refresh..");

        frm.add_custom_button("Actions", () => {
            frm.page.add_menu_item(__("Accept"), function() {
                // Accept action
                if (["new", "rejected"].includes(frm.doc.status.toLowerCase())) {
                    frm.set_value("status", "accepted");
                    frm.save();
                } else {
                    frappe.msgprint("Cannot change status to Accepted from current status.");
                }
            });

            frm.page.add_menu_item(__("Reject"), function() {
                // Reject action
                if (["new", "accepted"].includes(frm.doc.status.toLowerCase())) {
                    frm.set_value("status", "rejected");
                    frm.save();
                } else {
                    frappe.msgprint("Cannot change status to Rejected from current status.");
                }
            });
        }, __("Action"));
    },
    status(frm) {
        console.log("status changed");
    }
});
