import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./App.css";
import "dayjs/locale/es";

function App() {
  dayjs.locale("es"); // Establece la localización en español
  const localizer = dayjsLocalizer(dayjs, {
    formats: {
      timeGutterFormat: "HH:mm", // Formato de la hora en la columna lateral
    },
    timeslots: 3, // Intervalos de 20 minutos (3 intervalos por hora)
  });

  const messages = {
    allDay: "Todo el día",
    previous: "Anterior",
    next: "Siguiente",
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
      end: dayjs("2024-04-09T12:10:00").toDate(),
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

  const STEP = 10;
  const TIME_SLOTS = 60 / STEP;

  const components = {
    event: (props) => {
      console.log(props);

      const { type } = props.event;
      let eventoClase = "evento";

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
        <div className={eventoClase}>
          <ul>
            <li>{props.title}</li>
          </ul>
          {/* <p>Inicio: {dayjs(props.start).format("HH:mm")}</p> */}
        </div>
      );
    },
  };

  // Función para el tooltipAccessor personalizado
  const customTooltipAccessor = (event) => {
    // Aquí puedes personalizar el tooltip según tu lógica
    return `Tipo: ${event.type}`; // Ejemplo de tooltip personalizado mostrando el tipo de evento
  };

  return (
    <>
      <div
        style={{
          width: "95vw",
          height: "95vh",
          backgroundColor: "white",
          color: "black",
        }}
      >
        <Calendar
          localizer={localizer}
          messages={messages}
          events={events}
          step={STEP}
          timeslots={TIME_SLOTS}
          dayLayoutAlgorithm={"no-overlap"}
          components={components}
          tooltipAccessor={customTooltipAccessor}
        />
      </div>
    </>
  );
}

export default App;
