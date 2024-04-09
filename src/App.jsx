import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";

function App() {
  dayjs.locale("es"); // Establece la localización en español
  const localizer = dayjsLocalizer(dayjs, {
    formats: {
      timeGutterFormat: "HH:mm", // Formato de la hora en la columna lateral
    },
    timeslots: 3, // Intervalos de 20 minutos (3 intervalos por hora)
  });

  const events = [
    {
      start: dayjs("2024-04-09T11:00:00").toDate(),
      end: dayjs("2024-04-09T11:10:00").toDate(),
      title: "anna.aguiTU5 - G - Conferencia",
    },
    {
      start: dayjs("2024-04-09T11:00:00").toDate(),
      end: dayjs("2024-04-09T11:10:00").toDate(),
      title: "anna.aguiTU5 - G - Conferencia",
    },
    {
      start: dayjs("2024-04-09T12:00:00").toDate(),
      end: dayjs("2024-04-09T12:10:00").toDate(),
      title: "anna.aguiTU5 - G - Conferencia",
    },
    {
      start: dayjs("2024-04-09T12:00:00").toDate(),
      end: dayjs("2024-04-09T12:10:00").toDate(),
      title: "anna.aguiTU5 - G - Conferencia",
    },
    {
      start: dayjs("2024-04-09T12:10:00").toDate(),
      end: dayjs("2024-04-09T12:20:00").toDate(),
      title: "anna.aguiTU5 - G - Conferencia",
    },
  ];

  const components = {
    event: (props) => {
      console.log(props);

      return (
        <div className="evento">
          {props.title}{" "}
          {/*<p>Inicio: {dayjs(props.start).format("HH:mm")}</p> */}
        </div>
      );
    },
  };

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

  const STEP = 10;
  const TIME_SLOTS = 60 / STEP;

  return (
    <>
      <div style={{ height: "95vh", width: "95vw" }}>
        <Calendar
          localizer={localizer}
          events={events}
          messages={messages}
          step={STEP}
          timeslots={TIME_SLOTS}
          components={components}
        />
      </div>
    </>
  );
}

export default App;
