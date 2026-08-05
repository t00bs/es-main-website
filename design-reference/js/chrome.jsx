// Electric Sheep site — shared chrome (nav + footer + theme)
const ES_DS = window.ElectricSheepDesignSystem_79fee5;

function esGetTheme() {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function SiteNav() {
  const [theme, setTheme] = React.useState(esGetTheme());
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("es-theme", next); } catch (e) {}
    setTheme(next);
  };
  const logo = theme === "dark" ? "assets/logo/es-logo-cream.svg" : "assets/logo/es-logo-dark.svg";
  return (
    <div style={{ position: "relative" }}>
      <ES_DS.NavBar
        logoSrc={logo}
        links={["Work", "Contact", theme === "dark" ? "Light mode" : "Dark mode"]}
        onNavigate={(label) => {
          if (label === "Work") location.href = "Work.html";
          else if (label === "Contact") location.href = "Contact.html";
          else toggle();
        }}
      ></ES_DS.NavBar>
      <a
        href="Home.html"
        aria-label="Electric Sheep home"
        style={{ position: "absolute", left: 40, top: 40, width: 256, height: 60, display: "block" }}
      ></a>
    </div>
  );
}

function SiteFooterStd() {
  return <ES_DS.SiteFooter logoSrc="assets/logo/es-logo-cream.svg"></ES_DS.SiteFooter>;
}

Object.assign(window, { ES_DS, SiteNav, SiteFooterStd });
