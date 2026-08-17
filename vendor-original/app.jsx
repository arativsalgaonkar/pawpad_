/* app.jsx — Root app component and router */

const { useState: useStateApp, useEffect: useEffectApp } = React;

const TWEAK_DEFAULTS = { palette: "warm", motion: "lively", density: "default" };

function PawpadTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useEffectApp(() => {
    document.body.dataset.palette = t.palette;
    document.body.dataset.motion = t.motion;
    document.body.dataset.density = t.density;
  }, [t.palette, t.motion, t.density]);
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Look" />
      <TweakRadio
        label="Palette"
        value={t.palette}
        options={[
          { value: "warm", label: "Warm" },
          { value: "green", label: "Green" },
          { value: "dark", label: "Dark" },
        ]}
        onChange={(v) => setTweak("palette", v)}
      />
      <TweakRadio
        label="Density"
        value={t.density}
        options={[
          { value: "airy", label: "Airy" },
          { value: "default", label: "Regular" },
          { value: "compact", label: "Compact" },
        ]}
        onChange={(v) => setTweak("density", v)}
      />
      <TweakSection label="Motion" />
      <TweakRadio
        label="Motion"
        value={t.motion}
        options={[
          { value: "still", label: "Still" },
          { value: "subtle", label: "Subtle" },
          { value: "lively", label: "Lively" },
        ]}
        onChange={(v) => setTweak("motion", v)}
      />
    </TweaksPanel>
  );
}

function App() {
  const [route, navigate] = useRoute();
  const [bookingOpen, setBookingOpen] = useStateApp(false);
  const [bookingService, setBookingService] = useStateApp(null);

  const openBooking = (service) => {
    setBookingService(typeof service === "string" ? service : null);
    setBookingOpen(true);
  };

  const pages = {
    home: <HomePage onBook={openBooking} navigate={navigate} />,
    about: <AboutPage onBook={openBooking} />,
    experience: <ExperiencePage onBook={openBooking} />,
    grooming: <GroomingPage onBook={openBooking} />,
    courses: <CoursesPage onBook={openBooking} />,
    boarding: <BoardingPage onBook={openBooking} />,
    myotherapy: <MyotherapyPage onBook={openBooking} />,
  };

  const page = pages[route] || pages.home;

  return (
    <>
      <CursorTrail />
      <TopNav route={route} onBook={openBooking} />
      <main key={route}>{page}</main>
      <Footer onBook={openBooking} />
      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialService={bookingService}
      />
      <PawpadTweaks />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
