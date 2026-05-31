import arcjet, { shield, detectBot, tokenBucket, validateEmail } from "@arcjet/next";

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  characteristics: ["ip.src"],
  rules: [
    // WAF-style protection — blocks SQLi, XSS, and other common attacks
    shield({ mode: "LIVE" }),

    // Block headless browsers, scrapers, and automated tools
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE", // allow Google, Bing, etc.
        "CATEGORY:MONITOR",       // allow uptime monitors
        "CATEGORY:PREVIEW",       // allow link-preview bots (Slack, Discord)
      ],
    }),

    // Rate limit: 5 form submissions per IP per hour
    tokenBucket({
      mode: "LIVE",
      refillRate: 5,
      interval: 3600, // 1 hour in seconds
      capacity: 5,
    }),

    // Reject disposable, invalid, or non-existent email addresses
    validateEmail({
      mode: "LIVE",
      deny: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"],
    }),
  ],
});

export default aj;
