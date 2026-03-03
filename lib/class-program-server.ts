import "server-only";

export const CLASS_ADMIN_EMAIL =
  process.env.CLASS_ADMIN_EMAIL || "thapa.rajat@gmail.com";

export function getClassZoomLink() {
  return (
    process.env.CLASS_ZOOM_LINK ||
    "https://us04web.zoom.us/j/78684861758?pwd=m46sJyczLlVpaQGVXC3Bbbe15zbzU9.1"
  );
}
