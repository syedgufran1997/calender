import { useState } from "react";
import "./App.css";

var HourData = [
  {
    time: "9 AM",
    slots: [
      { label: "New Event", timefrom: "9 AM", timeTo: "10 AM" },
      { label: "New Event", timefrom: "9 AM", timeTo: "10 AM" },
      { label: "New Event", timefrom: "9 AM", timeTo: "10 AM" },
    ],
  },
  {
    time: "10 AM",
    slots: [{ label: "New Event", timefrom: "10 AM", timeTo: "11 PM" }],
  },
  {
    time: "11 AM",
    slots: [{ label: "New Event", timefrom: "11 AM", timeTo: "12 PM" }],
  },
  { time: "12 AM" },
  { time: "1 PM" },
  { time: "2 PM" },
  { time: "3 PM" },
  { time: "4 PM" },
  { time: "5 PM" },
  { time: "6 PM" },
  { time: "7 PM" },
  { time: "8 PM" },
  { time: "9 PM" },
  { time: "10 PM" },
];

function App() {
  const [eventText, setEventText] = useState("");
  const [eventTimeFrom, setEventTimeFrom] = useState("");
  const [eventTimeTo, setEventTimeTo] = useState("");

  const [showAddEvent, setShowAddEvent] = useState("");
  const [showEditEvent, setShowEditEvent] = useState("");

  const [eventList, setEventList] = useState([
    {
      time: "9 AM",
      slots: [
        { label: "New Event", timefrom: "9 AM", timeTo: "10 AM" },
        { label: "New Event", timefrom: "9 AM", timeTo: "10 AM" },
        { label: "New Event", timefrom: "9 AM", timeTo: "10 AM" },
      ],
    },
    {
      time: "10 AM",
      slots: [{ label: "New Event", timefrom: "10 AM", timeTo: "11 PM" }],
    },
    {
      time: "11 AM",
      slots: [{ label: "New Event", timefrom: "11 AM", timeTo: "12 PM" }],
    },
    { time: "12 AM" },
    { time: "1 PM" },
    { time: "2 PM" },
    { time: "3 PM" },
    { time: "4 PM" },
    { time: "5 PM" },
    { time: "6 PM" },
    { time: "7 PM" },
    { time: "8 PM" },
    { time: "9 PM" },
    { time: "10 PM" },
  ]);

  const handleAddEventModal = (hourIndex) => {
    console.log("hour", hourIndex);
    setShowAddEvent(!showAddEvent);
  };

  const handleEditEventModal = (index) => {
    setShowAddEvent(false);
    setShowEditEvent(!showEditEvent);
    console.log(index);
  };

  const AddEvent = (eventText) => {
    const newEventList = [
      ...eventList,
      {
        slots: [
          { label: eventText, timefrom: eventTimeFrom, timeTo: eventTimeTo },
        ],
      },
    ];
    setEventList(newEventList);

    setEventText("");
    setEventTimeFrom("");
    setEventTimeTo("");
  };
  console.log("list", eventList);

  const UpdateEvent = (index) => {
    console.log("update", index);
  };

  const DeleteEvent = (index) => {
    console.log("delete", index);
  };

  return (
    <div className="App">
      <ul className="listmainWrapper">
        {HourData &&
          HourData?.map((hourItem, hourIndex) => (
            <li
              className="listWrapper"
              key={hourIndex}
              onClick={() => handleAddEventModal(hourIndex)}
            >
              <div className="timeWrapper">
                <h4>{hourItem.time}</h4>
              </div>

              <div className="slotWrapper">
                {hourItem?.slots?.map((slotItem, slotsIndex) => (
                  <div key={slotsIndex}>
                    <div
                      className="slotEventWrapper"
                      onClick={() => {
                        handleEditEventModal(slotsIndex);
                      }}
                    >
                      <p className="labelText">{slotItem.label}</p>
                      <p className="timeText">
                        {slotItem.timefrom} - {slotItem.timeTo}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </li>
          ))}
      </ul>

      {showAddEvent ? (
        <div className="MainModalWrapper">
          <div className="modalHeader">
            <h2>Add Event</h2>
            <h4 onClick={handleAddEventModal}>X</h4>
          </div>
          <div className="modalContent">
            <input
              type="text"
              placeholder="Enter Event Name"
              value={eventText}
              onChange={(e) => setEventText(e.target.value)}
            />
            <div className="eventTimeWrap">
              <input
                type="time"
                value={eventTimeFrom}
                onChange={(e) => setEventTimeFrom(e.target.value)}
              />
              <input
                type="time"
                value={eventTimeTo}
                onChange={(e) => setEventTimeTo(e.target.value)}
              />
            </div>
            <button
              onClick={() => {
                AddEvent(eventText);
                handleAddEventModal();
              }}
            >
              Add Event
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* Edit or delete modal */}
      {showEditEvent ? (
        <div className="MainModalWrapper">
          <div className="modalHeader">
            <h2>Edit Event</h2>
            <h4 onClick={handleEditEventModal}>X</h4>
          </div>

          <div className="modalContent">
            <input
              type="text"
              placeholder="Enter Event Name"
              value={eventText}
              onChange={(e) => setEventText(e.target.value)}
            />
            <div className="eventTimeWrap">
              <input
                type="time"
                value={eventTimeFrom}
                onChange={(e) => setEventTimeFrom(e.target.value)}
              />
              <input
                type="time"
                value={eventTimeTo}
                onChange={(e) => setEventTimeTo(e.target.value)}
              />
            </div>

            <div className="editDeleteButton">
              <button onClick={() => UpdateEvent(eventText)}>Edit</button>

              <button onClick={() => DeleteEvent(eventText)}>Delete</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
