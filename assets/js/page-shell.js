/* Auto-converted from JSX to plain JavaScript (React.createElement) so no
   build step is required to deploy this file — it runs as-is in the browser.
   Source of truth for future edits: the vendor-original/ or the original
   JSX authoring; edit this file directly going forward since JSX has been
   dropped from this project entirely. */
const { useState: useStateShell } = React;
function PawpadShell({ route, page: PageComponent }) {
  const [bookingOpen, setBookingOpen] = useStateShell(false);
  const [bookingService, setBookingService] = useStateShell(null);
  const openBooking = (service) => {
    setBookingService(typeof service === "string" ? service : null);
    setBookingOpen(true);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CursorTrail, null), /* @__PURE__ */ React.createElement(TopNav, { route, onBook: openBooking }), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(PageComponent, { onBook: openBooking })), /* @__PURE__ */ React.createElement(Footer, { onBook: openBooking }), /* @__PURE__ */ React.createElement(WhatsAppFloat, null), /* @__PURE__ */ React.createElement(
    BookingModal,
    {
      open: bookingOpen,
      onClose: () => setBookingOpen(false),
      initialService: bookingService
    }
  ));
}
function mountPage(route, PageComponent) {
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(/* @__PURE__ */ React.createElement(PawpadShell, { route, page: PageComponent }));
}
Object.assign(window, { PawpadShell, mountPage });