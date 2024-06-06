function skillsMember() {
    return {
        restrict: "E",
        scope: {
            member: "="
        },
        template: "<div>{{member.name}} has {{member.skill}}</div>"
    };
}