document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  function renderCalendar(view) {
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: view,
      dateClick: function () {
        /* 

            //click add new window

            let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
            width=600,height=300,left=100,top=100`;
            open('/', 'test', params);

          */

        // modal : when you click date section then show modal for create scheduled
        const closeModalScheduler = document.querySelector(
          "#close-modal-scheduler"
        );
        const koModal = document.querySelector("#ko-modal");
        koModal.classList.remove("hidden");
        koModal.classList.add("flex");
        function flexHiddenMethods() {
          koModal.classList.remove("flex");
          koModal.classList.add("hidden");
        }
        // close-button
        closeModalScheduler.addEventListener("click", flexHiddenMethods);
        // close-onscroll
        document.addEventListener("scroll", flexHiddenMethods);
        // close-outSideClick
        window.onclick = function (event) {
          if (event.target == koModal) {
            flexHiddenMethods();
          }
        };
      },
      headerToolbar: {
        left: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        center: "title,prev,next",
        right: false,
      },
      initialDate:  new Date(), // using new Date(); and set your scheduled on event array
      navLinks: true, // can click day/week names to navigate views
      businessHours: true, // display business hours
      editable: false,
      selectable: true,
      events: [
        {
          title: "Business Lunch",
          start: "2020-09-03T13:00:00",
          constraint: "businessHours",
          color: "#F5BA47",
        },
        {
          title: "meeting",
          start: "2020-09-03T14:00:00",
          constraint: "businessHours",
          color: "#2444F5",
        },
        {
          title: "Meeting",
          start: "2020-09-13T11:00:00",
          constraint: "availableForMeeting", // defined below
          color: "#2444F5",
        },
        /* {
          title: "Conference",
          start: "2020-09-18",
          end: "2020-09-20",
        },
        {
          title: "Party",
          start: "2020-09-29T20:00:00",
        },

        // areas where "Meeting" must be dropped
        {
          groupId: "availableForMeeting",
          start: "2020-09-11T10:00:00",
          end: "2020-09-11T16:00:00",
          display: "background",
        },
        {
          groupId: "availableForMeeting",
          start: "2020-09-13T10:00:00",
          end: "2020-09-13T16:00:00",
          display: "background",
        },

        // red areas where no events can be dropped
        {
          start: "2020-09-24",
          end: "2020-09-28",
          overlap: false,
          display: "background",
          color: "#ff9f89",
        },
        {
          start: "2020-09-06",
          end: "2020-09-08",
          overlap: false,
          display: "background",
          color: "#ff9f89",
        }, */
      ],
    });

    calendar.render();
  }

  /* 
    
    var monthFilter = document.querySelector('#monthFilter');
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    var monthShow="";
    for(let i = 0; i < monthNames.length ; i++){
      monthShow +=  "<option value='" + monthNames[i] + "'>" + monthNames[i] + "</option>";
    }
    monthFilter.innerHTML = monthShow;

     */
  // calendar.render();
  renderCalendar("dayGridMonth");

  document
    .getElementById("calendarView")
    .addEventListener("change", function () {
      renderCalendar(this.value);
    });

  const addClsPrntElmnt = document.querySelector(".fc-toolbar-title")
    .parentElement;
  addClsPrntElmnt.classList.add("MiddletitleButton");

  const checkEvnt = document.querySelectorAll(".fc-daygrid-event-harness");

  checkEvnt.forEach(function (item) {
    item.addEventListener("click", (event) => {
      let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
                width=600,height=300,left=100,top=100`;
      open("/", "test", params);
    });
  });
});
