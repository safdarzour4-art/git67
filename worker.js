export default {
  async fetch(request, env, ctx) {
    const userAgent = request.headers.get("user-agent") || "";

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );

    const destination =
      "https://attentionsdiplomatic.com/jxpph0kci5?key=b69c6da5a8cc59c054262e4404d60564";

    return Response.redirect(destination, 302);
  }
};
