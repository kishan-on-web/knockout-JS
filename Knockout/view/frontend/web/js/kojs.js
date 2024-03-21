define([
    'uiComponent',
    'ko'
], function (Component, ko) {
    'use strict';

    return Component.extend({
        
        initialize: function () {
            this._super();
            this.currentTime = ko.observable(new Date().toLocaleTimeString());
            this.updateTime();
        },
        updateTime: function () {
            var self = this;
            setInterval(function () {
                self.currentTime(new Date().toLocaleTimeString());
            }, 1000); // Update every second
        }
    });
});
