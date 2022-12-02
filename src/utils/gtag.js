export const sendTagEvent = ({
  action,
  category,
  label,
  value,
})=> {
  if (typeof window !== "undefined" && "gtag" in window) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
