# NodeSSLconnexion

If you build Node.js HTTPS servers as much as we do, you’ll know how easy it is to get things going. But we were surprised to find that we could quickly add client x.509 certificate checking in just a few lines of code.

Typically, HTTPS servers do a basic TLS handshake and accept any client connection as long as a compatible cipher suite can be found. However, the server can be configured to challenge the client with a CertificateRequest during the TLS handshake. This forces the client to present a valid certificate before the negotiation can continue. This strategy can be used in API services instead of (or in addition to) another form of identity such as shared secrets or OAuth.

Here’s some background on how Client-authenticated TLS Handshakes work over at Wikipedia.

Inspeared by Anders Brownworth
https://engineering.circle.com/https-authorized-certs-with-node-js-315e548354a2#.ln15zih8l
