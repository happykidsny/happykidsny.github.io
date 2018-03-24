jQuery(document).ready(function() {
    var date = new Date();

    jQuery('#calendar').fullCalendar({
        googleCalendarApiKey: 'AIzaSyD2NZ4uy0-A85I9jBTl4-Fg6TN8YoNGSfs',
        header: {
            left: 'title',
            right: 'prev, today, next'
        },
        defaultView: 'basicDay',
        buttonText: {
            today: 'TODAY'
        },
        handleWindowResize: true,
        agendaDay: {
            allDayText: ''
        },
        // for agendaWeek and agendaDay
        editable: false,
        events: {
            googleCalendarId: 'o8mg61i7naodmcbradubm86mv8@group.calendar.google.com'
        },

        eventClick: function(event) {
            // opens events in a popup window
            window.open(event.url, 'gcalevent', 'width=700,height=600');
            return false;
        }
    });
});