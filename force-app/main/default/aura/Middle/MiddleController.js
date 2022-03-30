({
    hello : function(component, event, helper) {
        alert(event.target.value)
    },

    // input 안에 값을 출력 시 (onclick)
    tap : function(component,event, helper) {
        var item = component.get("v.hello"); // 값을 가져올 시
        
        alert(item);
    },

    // 값 변경시 (onchange)
    onchangeinput : function(component,event,helper) {
        component.set("v.hello", event.target.value); // 값을 세팅할 때
    }

    // 예시 코드
    // initValue: function(component, event) { // 고정
    //component.set("v.userName", event.getParam("userName"));

    // 서로 다른 Application이라 안되는듯...
    // },
    // openDropdown: function(component) { // 고정
    //     var item = component.get("v.isDropdownOpen");

    //     component.set("v.isDropdownOpen", !item);
    // },
    // openDropdownForHide: function(component) { // 고정
    //     var item = component.get("v.isDropdownOpenForHide");

    //     component.set("v.isDropdownOpenForHide", !item);
    // },
    // onLogout: function(component) { // 고정
    //     component.set("v.isLogin", false);

    //     localStorage.removeItem(localStorage.key(2));
    // }
})
