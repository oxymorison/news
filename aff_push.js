var _push = {
serverUrl: "https://theseoffersforyou.com",
 urlParams: {
 sub: "",
  s1: "",
  s2: "",
  cid: 116
 }
};
(function (p, u, s, h) {
  p._pcq = p._pcq || [];
                      p._pcq.push(['_currentTime', Date.now()]);
  s = u.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = _push.serverUrl + '/pushjs/1.0.0/dbl-subscriber.js';
  h = u.getElementsByTagName('script')[0];
  h.parentNode.insertBefore(s, h);
}
)(window, document);