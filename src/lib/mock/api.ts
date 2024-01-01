export const mockApiData = [
  {
    id: "1",
    name: "Check Stripe payment link ever 5 seconds",
    url: "https://www.stripe.com/payments",
    incidents: [
      {
        status: "ACTIVE",
        createdAt: new Date().toISOString(),
      },
    ],
    results: new Array(24).fill(null).map((_, i) => {
      return {
        status: 200,
        duration: Math.floor(Math.random() * 1000),
        createdAt: new Date(new Date().setHours(i, 0, 0)).toISOString(),
        response: "",
      };
    }),
  },
  {
    id: "2",
    name: "Ping google every 30 seconds",
    url: "https://www.google.com",
    incidents: [
      {
        status: "ACTIVE",
        createdAt: new Date().toISOString(),
      },
    ],
    results: new Array(24).fill(null).map((_, i) => {
      return {
        status: 200,
        duration: Math.floor(Math.random() * 1000),
        createdAt: new Date(new Date().setHours(i, 0, 0)).toISOString(),
        response: "",
      };
    }),
  },
  {
    id: "3",
    name: "Ping Oracle every minute",
    url: "https://www.oracle.com",
    incidents: [
      {
        status: "ACTIVE",
        createdAt: new Date().toISOString(),
      },
    ],
    results: new Array(24).fill(null).map((_, i) => {
      return {
        status: 200,
        duration: Math.floor(Math.random() * 1000),
        createdAt: new Date(new Date().setHours(i, 0, 0)).toISOString(),
        response: "",
      };
    }),
  },
  {
    id: "4",
    name: "Check Stripe payment link ever 5 seconds",
    url: "https://www.stripe.com/payments",
    incidents: [
      {
        status: "ACTIVE",
        createdAt: new Date().toISOString(),
      },
    ],
    results: new Array(24).fill(null).map((_, i) => {
      return {
        status: 200,
        duration: Math.floor(Math.random() * 1000),
        createdAt: new Date(new Date().setHours(i, 0, 0)).toISOString(),
        response: "",
      };
    }),
  },
  {
    id: "5",
    name: "Ping google every 30 seconds",
    url: "https://www.google.com",
    incidents: [
      {
        status: "ACTIVE",
        createdAt: new Date().toISOString(),
      },
    ],
    results: new Array(24).fill(null).map((_, i) => {
      return {
        status: 200,
        duration: Math.floor(Math.random() * 1000),
        createdAt: new Date(new Date().setHours(i, 0, 0)).toISOString(),
        response: "",
      };
    }),
  },
  {
    id: "6",
    name: "Ping Oracle every minute",
    url: "https://www.oracle.com",
    incidents: [
      {
        status: "ACTIVE",
        createdAt: new Date().toISOString(),
      },
    ],
    results: new Array(24).fill(null).map((_, i) => {
      return {
        status: 200,
        duration: Math.floor(Math.random() * 1000),
        createdAt: new Date(new Date().setHours(i, 0, 0)).toISOString(),
        response: "",
      };
    }),
  },
];
