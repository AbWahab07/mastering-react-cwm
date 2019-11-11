// import * as Sentry from "@sentry/browser";

function init() {
  // const RELEASE = "0.1.0";
  // Sentry.init({
  //   dsn: "https://154ec099a58b4465811750ab78cf5cb2@sentry.io/1814672",
  //   release: RELEASE
  // });
}

function log(error) {
  // just loggin to console instead of Sentry
  console.error(error);
  // Sentry.captureException(error);
}

export default {
  init,
  log
};
