/* eslint-disable react/prop-types */
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./App.css";
import "dayjs/locale/es";
import { useState } from "react";
import { faCircleDot } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  dayjs.locale("es");
  const localizer = dayjsLocalizer(dayjs, {
    formats: {
      timeGutterFormat: "HH:mm", // Formato de la hora en la columna lateral
    },
    timeslots: 3, // Intervalos de 20 minutos (3 intervalos por hora)
  });

  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openPopup = (event) => {
    setSelectedEvent(event);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const customTooltipAccessor = (event) => {
    const formattedStart = dayjs(event.start).format("HH:mm");
    const formattedEnd = dayjs(event.end).format("HH:mm");
    // Aquí  puedes personalizar el tooltip según tu lógica
    return `  ${formattedStart} - ${formattedEnd} : ${event.title} `; // Ejemplo de tooltip personalizado mostrando el tipo de evento
  };

  const messages = {
    allDay: "Todo el día",
    previous: "Anterior",
    next: "Siguiente",
    work_week: "Semana",
    today: "Hoy",
    month: "Mes",
    week: "Semana",
    day: "Día",
    agenda: "Agenda",
    date: "Fecha",
    time: "Hora",
    event: "Evento",
    noEventsInRange: "Sin eventos",
  };

  const events = [
    {
      start: dayjs("2024-04-09T12:00:00").toDate(),
      end: dayjs("2024-04-09T12:20:00").toDate(),
      title: "anna.aguiTU5 - G - Confer",
      type: "por pautar",
    },
    {
      start: dayjs("2024-04-09T12:00:00").toDate(),
      end: dayjs("2024-04-09T12:10:00").toDate(),
      title: "anna.aguiTU5 - G - Conferencia",
      type: "pautada",
    },
    {
      start: dayjs("2024-04-09T12:00:00").toDate(),
      end: dayjs("2024-04-09T12:10:00").toDate(),
      title: "anna.aguiTU5 - G - Conferencia",
      type: "realizada",
    },
    {
      start: dayjs("2024-04-09T12:10:00").toDate(),
      end: dayjs("2024-04-09T12:20:00").toDate(),
      title: "anna.aguiTU5 - G - Conferencia",
      type: "inconvenitente",
    },
    {
      start: dayjs("2024-04-09T12:20:00").toDate(),
      end: dayjs("2024-04-09T12:30:00").toDate(),
      title: "anna.aguiTU5 - G - Conferencia",
      type: "sin conferencia",
    },
    {
      start: dayjs("2024-04-09T12:30:00").toDate(),
      end: dayjs("2024-04-09T12:40:00").toDate(),
      title: "anna.aguiTU5 - G - Conferencia",
      type: "consultada profesional",
    },
    {
      start: dayjs("2024-04-09T12:40:00").toDate(),
      end: dayjs("2024-04-09T12:50:00").toDate(),
      title: "anna.aguiTU5 - G - Conferencia",
      type: "consultada cliente",
    },
    {
      start: dayjs("2024-04-09T12:40:00").toDate(),
      end: dayjs("2024-04-09T12:50:00").toDate(),
      title: "anna.aguiTU5 - G - Conferencia",
      type: "inconvenitente",
    },
    {
      start: dayjs("2024-04-09T12:50:00").toDate(),
      end: dayjs("2024-04-09T13:00:00").toDate(),
      title: "anna.aguiTU5 - G - Conferencia",
      type: "consultada profesional",
    },
    {
      start: dayjs("2024-04-10T12:40:00").toDate(),
      end: dayjs("2024-04-10T12:50:00").toDate(),
      title: "anna.aguiTU5 - G - Conferencia",
      type: "consultada cliente",
    },
  ];

  const components = {
    event: (props) => {
      // eslint-disable-next-line react/prop-types
      const { type } = props.event;
      let eventoClase = "evento";

      const colors = {
        "por pautar": "#F8F65F",
        pautada: "#FFA246",
        realizada: "#5590FF",
        inconvenitente: "#8de26b",
        "sin conferencia": "#8a8a8a",
        "consultada profesional": "#E789FF",
        "consultada cliente": "#FF4E47",
      };

      const color = colors[type] || "black";

      // Manejador de clic para abrir el popup y mostrar información del evento
      const handleClick = () => {
        openPopup(props.event);
      };

      switch (type) {
        case "por pautar":
          eventoClase += " por-pautar";
          break;
        case "pautada":
          eventoClase += " pautada";
          break;
        case "realizada":
          eventoClase += " realizada";
          break;
        case "inconvenitente":
          eventoClase += " inconvenitente";
          break;
        case "sin conferencia":
          eventoClase += " sin-conferencia";
          break;
        case "consultada profesional":
          eventoClase += " consultada-profesional";
          break;
        case "consultada cliente":
          eventoClase += " consultada-cliente";
          break;
        default:
          break;
      }

      return (
        <>
          <div className={eventoClase} onClick={handleClick}>
            <ul>
              <FontAwesomeIcon icon={faCircleDot} style={{ color }} />
              <li>{props.title}</li>
            </ul>
            {/* <p>Inicio: {dayjs(props.start).format("HH:mm")}</p> */}
          </div>
        </>
      );
    },
  };

  const popup = (
    <div className="popup">
      <div className="popup-content">
        <button className="close-btn" onClick={closePopup}>
          Cerrar
        </button>
        {selectedEvent && (
          <div>
            <h2>{selectedEvent.title}</h2>
            <p>Tipo: {selectedEvent.type}</p>
            {/* Aquí muestra más detalles del evento si es necesario */}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="selector">
        <h3>Seleccion usuario</h3>
        <select name="" id="">
          <option value="">Ariadna</option>
        </select>
      </div>
      <div className="calendar-size">
        <Calendar
          views={["month", "work_week", "day"]}
          localizer={localizer}
          messages={messages}
          events={events}
          step={10}
          timeslots={6}
          dayLayoutAlgorithm={"no-overlap"}
          components={components}
          tooltipAccessor={customTooltipAccessor}
        />
      </div>
      {popupOpen && popup}
    </div>
  );
}

export default App;
