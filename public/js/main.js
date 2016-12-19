var socket = io();


new Vue({
    el: '#header',
    methods: {
        notify: function(){
            $.notific8(message,
                { sticky:true,
                    horizontalEdge:"top",
                    theme:"success" ,
                    heading:"Event Stuff"})
        },
        ready: function(){
            this.notify();
            console.log('header is ready');
        }
    }
});