document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        dateClick: function() {

            // modal : when you click date section then show modal for create scheduled 
            const closeModalScheduler = document.querySelector("#close-modal-scheduler");
            const koModal = document.querySelector('#ko-modal');
            koModal.classList.remove("hidden");
            koModal.classList.add("flex");
            function flexHiddenMethods(){
                koModal.classList.remove("flex");
                koModal.classList.add("hidden");
            }
            // close-button
            closeModalScheduler.addEventListener('click',flexHiddenMethods);
            // close-onscroll
            document.addEventListener("scroll",flexHiddenMethods);
            // close-outSideClick
            window.onclick = function(event) {
                if (event.target == koModal) {
                    flexHiddenMethods();
                }
              }
          },
      headerToolbar: {
        left: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
        center: 'title,prev,next',
        right: false
      },
      initialDate: '2020-09-12',// using new Date(); and set your scheduled on event array
      navLinks: true, // can click day/week names to navigate views
      businessHours: true, // display business hours
      editable: true,
      selectable: true,
      events: [
        {
          title: 'Business Lunch',
          start: '2020-09-03T13:00:00',
          constraint: 'businessHours'
        },
        {
          title: 'Meeting',
          start: '2020-09-13T11:00:00',
          constraint: 'availableForMeeting', // defined below
          color: '#257e4a'
        },
        {
          title: 'Conference',
          start: '2020-09-18',
          end: '2020-09-20'
        },
        {
          title: 'Party',
          start: '2020-09-29T20:00:00'
        },

        // areas where "Meeting" must be dropped
        {
          groupId: 'availableForMeeting',
          start: '2020-09-11T10:00:00',
          end: '2020-09-11T16:00:00',
          display: 'background'
        },
        {
          groupId: 'availableForMeeting',
          start: '2020-09-13T10:00:00',
          end: '2020-09-13T16:00:00',
          display: 'background'
        },

        // red areas where no events can be dropped
        {
          start: '2020-09-24',
          end: '2020-09-28',
          overlap: false,
          display: 'background',
          color: '#ff9f89'
        },
        {
          start: '2020-09-06',
          end: '2020-09-08',
          overlap: false,
          display: 'background',
          color: '#ff9f89'
        }
      ],
    });
    calendar.render();
    const addClsPrntElmnt = document.querySelector('.fc-toolbar-title').parentElement;
    addClsPrntElmnt.classList.add('MiddletitleButton');
    console.log(addClsPrntElmnt);
  });