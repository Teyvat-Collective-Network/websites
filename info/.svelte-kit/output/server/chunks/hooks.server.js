const handle = async ({ event, resolve }) => {
  event.locals.dark = event.cookies.get("mode") !== "light";
  {
    if (event.url.searchParams.has("logged-in")) {
      event.locals.user = {
        id: "242101077061664779",
        username: "Test User",
        discriminator: "0000"
      };
      event.locals.api_user = {
        id: "242101077061664779",
        guilds: ["805458032908959804"],
        roles: ["observer"]
      };
    }
  }
  return await resolve(event);
};
export {
  handle
};
