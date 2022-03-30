({
    search : function(copmponent, event, helper){

        alert(event.target.value)
    },
    
    // 값 변경시 (onchange)
    onchangeinput : function(component, event, helper) {
        component.set("v.search", event.target.value); //event가 발생된 대상의 값을 가져오는 것


    }
})
