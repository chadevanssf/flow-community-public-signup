({
    init: function (cmp, event, helper) {
                        
        var additionalcols = new Array();
        additionalcols.push({
            label: 'Action',
            type: 'button',
            typeAttributes: {
                label: {
                    fieldName: 'ActionLabel__c'
                },
                title: 'Click to Edit',
                name: 'updateSubscription',
                iconName: 'utility:edit',
                class: 'btn_next'
            }
        });
        cmp.set("v.additionalcols", additionalcols);
        
        var dt = cmp.find("datatableFSC");
        dt.configure(additionalcols);
        
        //console.log(cmp.get('v.mydata'));
    },
        
    handleRowAction : function(cmp, event) {
        var action = event.getParam("action");
        var row = event.getParam("row");
        
        if (action.name === "updateSubscription") {
            cmp.set("v.refreshDataTable", true);
            cmp.set("v.refreshId", row.Id);
            
            var navigate = cmp.get("v.navigateFlow");
            navigate("NEXT");
        }
    }
})