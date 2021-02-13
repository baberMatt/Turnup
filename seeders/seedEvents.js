let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/turnup", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let eventSeed = [
  {
    eventName: "Ramen by Alex Hrvatin",
    eventString: "ramenbyalexhrvatin",
    attendees: [],
    briefDetails: "Handmade Noodles, Carefully Crafted Broth, Local Ingredients",
    details: "Come on down to the Fluffy Duck Cafe and get yourself a bowl of ramen by Alex. Noodles, hand made in house here, broth carefully simmered for hours, and garnishes of local meats and veggies all prepared fresh from the farmer's market.",
    eventType: "Pop Up",
    category: { first: "Food", second: "ramen" },
    location: "10001 Chester Ave, Cleveland, OH 44106",
    photo1: "https://lh3.googleusercontent.com/V_soP6dzknPZkxfFnU-IQvLJR951ZVWGQ-y7N-euDUMvffcWliVXKKv6VSUxBfoK59N60lisj5fr5qWkJO9QW_p-PiPFGv3zCbnvdwUSmaLeiHLnxKIZ92sjXNcMwV2DEnTTGTO2ef16qrUYWgBAUY7WtIqJMBK3r6mJShhQSzvvlSZhIx6OitSOSpGin9qxbErgeDV-Kbky5vybkSI2oFgkuExE_O-2iX4NbeRQrBHjeMb4Zmjcny7yzjLwSRmNH7Syj9dh7Ls6HxpbalapA2VjKKHXPAhbvj5fC5Oaw4ArwZUKYwuKS6SnOPe4Jc9JvZYQhTZKHUL_hn_2ld9FI6bLPiHwEwqnYVxa6g1bbirzrDb5c5oW02FphoSv7mQx0qJfeeM3D1FGksR0yT3w-0HQ-7p8ldWmgXhl9VgsAk9MVsIG9MRjTErGE-txPC4KROoeNUZzJLVBM9Ij3bj-pridYU0iBh_wZJNaUXEuCCHDYozQ5W7WeEtEIwqZQuCNAY263wiJqdfnM7nnyLEOnMF4rAiXK3dLDhuvj_0keP9IDq-qnLB5DEq6tK9VN9nUtBRP1qz__u-z3hM_yc9Q9eYSkVI-LKNkd-yQyrX0L7gwiIWQDQuJ3k_kRShrIzKPWk9vUgeVH8-Sc7g2u-qu8yWotm1U0A1n0eV_3dKHbk7zr8pDHMYzdxGsutyjmQ=w960-h719-no?authuser=0", 
    photo2: "https://lh3.googleusercontent.com/ZBBcBLtffsMRxMmnBfCa_DeWm70ueuICH-VCv2RpScXvJX8VPKqx1QjntQDzkPmdGGjAwQdC_GnBe-Ogsop-_a8vQUkpWg7O8b8BueSkHGlcQLlJ4xLhH3xLCo9xoGrckCqQgAG6LhjmQg9rs1mFPMUoTVoyb9HI3h26GLnEQ4W0wgiQ10ctx49LUxV_tEB7SPCPfSf1SsWBP38ZqrhSRy4qTiYHiUGPKr5er5TIRWFFSVijt9KkPuESqHROrE41r08qHK7agW7md_vpRQNfsfwPZocq8lO5_7INsPMvEtzgcZNt1ZeYIR_yIw2RFA8X9Jo7NUE0igciailxIvSYO655-zpLnxgXIAlQczCwzFK8-vQm0yYdsmM_QiXpDN7d-XuIWaMuyv4SKVoi7c2HUm_B3V9nvfp44hhCX185Gb1ggjU-E7MdHUVdh7M03JqOkMncf8zGsaE2trNMG1gx6sXLnBbeqRZXtncFXSAWVIhyKY3yfQimUC2y-K869D36w89ePD8Q3r73a1R65eZOVLbiVk6_EYA6RfqOYeaABx4Ec29X6DGo-6YmWNlO3ZOuO8mD0nwkXyot2l_NJ3xLjphOpXsbr75yCzRGY4MlEFRosLIPF3kH2uR__NXCBZTVQ1m0NjzUXTSPqBhlSWKGTgK4iJEayUHOAEOM8G69PzNWI3vdsH_LUkbHwyqF0Q=w1024-h448-no?authuser=0",
    hosts: [],
    
  },
  {
    eventName: "Bocce Boys & Sons Pizza",
    eventString: "bocceboys&sonspizza",
    attendees: [],
    briefDetails: "Slinging pies straight outta Czechosloboccia",
    details: "We're making pies right out of my kitchen here at the Franklin Castle. Order through instagram (link attached) and pick up when we say",
    eventType: "Pop Up",
    category: { first: "Food", second: "pizza" },
    location: "4308 Franklin Blvd, Cleveland, OH 44113",
    photo1: "https://lh3.googleusercontent.com/64YV55GHglJ-JUKz1jUzas79FsD1pMaojPt5jIbsc4E2Zp9rQbuGydY6IyWoKG41a7Ch0fWXNr0Tsn9f36rwikQMXHtVwGnOrcNcs4cynk7R-OXSP1YZqZLoTJJeVFlk9dUHgysYo4s6eBiTMYgqYovN-5i8a-8xv51oUzK0GkwVFo0xO88C7h79O-LcULleEivdgtQOsON1zzAuRQTny9XBYXCOGl13zkI9q_wrhAmDIoVoHVvSCE1kYn6mOteMX122EbzSc5iKLuV59dfL-OD5FwcBh4ZXzBufzMZbGIiaKHus1UUI6XZmFxKKA5lluc2Nv9bmwivJEozEumKPBxR9oo2kmLcfprqtZuQlpbXqnzoj4QEDtl48Mifxnqi3NXCG4DYHIM62zK3E8P3SNW7nP3FX-8ajXHWLxMRq5RPPvmcRb9BfHqS5GMwHzdh1XkOnzWQb8Sxng0XiGUbaRN-X8c8IMerjdqkzAxdoFTMf0VfMCnyAUtAI8nm7n5F8shQmVB5MiuCoqDsYoZeuAsXoFvHMPzJo2c4ojEOFGbJscAh155mig0wje2ITKn15D5crJ6_5_XnG-x9ZSI6oeXoKQX3Jp0FOOvvqmx-_8otYXeZHex5-Q0rSPa917eYbicfNJAHhv2w0coBOWAxIDz3hnSPUnwGJY3e_yJtF5IqXF1mumkvg-wV58niZ_Q=w1024-h448-no?authuser=0", 
    photo2: "https://lh3.googleusercontent.com/Vdzh-NwGUWnIznjJ3JOk8_Kvo6iZ_uX-pHGadWEUK23lnqtquTzqWrVIhPuYwmVaJKH9_f6yesI7LxdcAAOVXMvbS4kZGC4CosMRPMWA7eLWLLGMmPFv32GGVStL5pH1RZ9dh9Wq8_aeDbqF4dzE3zpw8SCSwiOyqlM782qkRFwgWtcFCLHyyOgP2RDX31aUQzsuVY1cQEhpaItfPQFO8uvXMtMga-N-r2dsIL-oqtg1uSYsYWdWhttHSp5U8O_eedNsBpBV3GdBjXcbjHSOdTy34LdcgM309r7ZzKDBYhI9NWIIddPVknG8L7Kq00CWug9YQpCPxRSN-wTeK-w5-B-lcJCdCi5VoQTKPGuOF6GVJlJplsgXLdmvFEWUDam1a_LCBl1u8aI0FolLRDZ0TbJQvr4PSH5QPXsf9B1f8v7aOcR6zY874X-pEb565lh2Xsu4HcPZfAmW1iRmguIMnl3u2XUlTY_5UCfP7sDb7lFx8257ImyRRoguehptIMOVhsm_s-GEMOglep9IzrDOGInGdpIDVO_ailtWRoAHtppWl2htkHL_hL5xneSVCIzfW9RT-tRgGVtDQAl8vnX8xAvUxC1WB8gkQY7aZM1tBLdllxEOpO48LpFWFuJeKKkB7lXxJ1oDOmPQswxmILsP-iFuKuQyo1_xqgGDrwIPmTeWyxH-KoeeC-p_vpU0XQ=w1024-h448-no?authuser=0",
    hosts: [],
   
  },
  {
    eventName: "North Coast Que",
    eventString: "northcoastque",
    attendees: [],
    briefDetails: "Real pit barbecue here on the shores of Lake Erie",
    details: "We smoke it all! We got brisket, shoulders, hams, bacon, birds,you name it. Stop on by and grab a pile of your new favorite que. Seasonal rotating sides",
    eventType: "Pop Up",
    category: { first: "Food", second: "barbecue" },
    location: "6030 Middle Ridge Rd, Madison, OH 44057",
    photo1: "https://lh3.googleusercontent.com/ZJtPvz7Y6SUyq63686hlDAXjGMmzV4jgbH8GH6hxOH2lzN_8slECNPSNNyMN-sdhFbRUgS4cD1RMGvGXQrW-DI_BJRsbzX-9QjeLu_ali1Y-gRYRUHYZD1IebraEnxqjt26a4UdypY0cIiJQfafEAHwfU5omeNuZ_J5_mQFz9cEbT7fwftERpj136fWv_rTB0H7DYgyel_lMQdb1PhJ-oD56mI0PimWp1RT03H8qwbGEAuB712EoCZsirVgmMEJbuZKgU6MoNOagQxMqqbtoMhiBzCHovOutiNbotYklxtF0K9ZxpO6xtc2C2YZTn1gIfxqZ2bAKf2WoI47KecJnI_41gpg6jtUmY4KM3FF8Acw-VtA07xC9a5GmJ222VfoB1qy0n6KogSeCZmekQB0coFU8GZe1UUJMv4iW0vtaV8ANn8uDp9r-SQWjCnRhv_1lKyPvvHRXQDecmTiK0yX58PFDfrwf8MtarUrElIEvRPaPGhlzwnlUyjsvedjk_dkvkPcCA2eKXOffgveNv45516x4XlYIqsyR2rgdnlDBjyZbXNzBQfrPQTyd2uhGyFUMci3j65U-8u_qEuH8Di1SsFo7Nl37j0d2dcdpusjBkdlvwwleCLZ6BtwRIeADydm2_aNimRkdqBhp5hAPSCgrrcV69tFz9jVrCRqzLvsxGxxdgxHnbnAn2BAqnALn-Q=w839-h367-no?authuser=0",
    hosts: [],
    
  },
  {
    eventName: "Sugar + Smoke Healing",
    eventString: "sugar+smokehealing",
    attendees: [],
    briefDetails: "For all your witchy needs...",
    details: "Herbal rituals, soy candles, handcrafted yeas, oils + salts, reiki, tarot readings and all other things witchy",
    eventType: "Pop Up",
    category: { first: "Maker", second: "apothecary" },
    location: "3441 Tuttle Rd, Shaker Heights, OH 44122",
    photo1: "https://lh3.googleusercontent.com/14gb_updJTqmoQwbmAgQyJRGbAobYz3Xz8LvEzXy1iu3GMqWYAbeFjTaaqDVtRMIL2RgZsvFJv3tBUaPs1Q3RoA8grOLelHWaGgrD-fCCYSu5r6aNfvnrfxeZ50edOKlNelinJX8gH5sL7GclwOt98grqcYQaB38zjqX47TTqaOPz0zQE1OmOZ2FNR-RppJ518gleCVEpL2hALypemnevK3_n2sZR6dZZ7uRkKCW1cBdSPIJwtpYUCb1oAyLty-XhTH7Yl0fAtm7N4rJ4FRly0RH7uMLiavDxrULwsRvsAykyPjuVGXcK76qpFaPMbiGb4zNSAl0qsoK8qe_06pWVWIeSnRGZVcqm9so2fbFj8RIsIODDLBK0fJcRRf9bi0W74nNvS5lXdejf2wite-ZG1IOWR_lsjd10tJTkTGsO9kvVMBDVgK8SrJmnTB4riGVsQZq-_LwktByVNJnj_x_5oN8BFpfTOCgQd1rCMP9e0OMnqIDBleXth_eJl_-YqSiOCNnpTjmAJCysaT0h_OmzaihFb-6rX85W3XfMd8m0HZc5O3QpX-9fKbPbpI8YfayZ1S1nQly5ap10BffuC6owS7HSc7ti8QjW6iTkG82ityQRZmI84eYHJbB2Vrn5pfJfbdoIZ1lg_pqHsZ4uQwq-2SUxf8LMWN5zg_Pb8ra7dEMLFJraC6jOtg-Ab5VSQ=w816-h379-no?authuser=0",
    photo2: "https://lh3.googleusercontent.com/uBfc58zQdrNs_99x7wHNt7ZlGm38tgQW0N781HaY-bJbIwPImNQ4hVUNUdotUHFePwCdRl65Hs4_PeA15DNUYJGajvBsuQvnO6fFYb72J87n7frslRQrU-9VdNEPQpq4qY2-klK8wcA2CoQF_eLSJ5TJ_4jN77W2zHdu0R3XWFroJzRxiBrBYzBoZ9e4fh6P1CUFmZxFdjy5S-DVmhCgR4q3biIT9phQLuIGAnZdl_9_raeT_j5HKPgeey1WXbWP12vIRL479iI0THZ81RecFiIhKNVgwGMMx130zZq0LeqDIZQsvcrm34MSYh3i5eRWMflvyxnvYAGPnCGZmtgi9g4O_i9aiLyA-TIj2MGBfJwAsLwLCnRG1Vw6aHrlvoPsiqyfRMOj2ylkWeVwdzRi33ZTl9OUKPqRPu_eb2KQZ4ef5tNhY1a-x2bho8aKZs3x75rIGUz9EDjt7JlIs9qvhgejzXaAnpqV171JGnr9YCHujITdB9FoN9UL8wdUeqtmH-ras04C4GnctLNXoa74wl9UMXX_5AIkS3Jru7Js4Oya7c4ta6JHXtqtUh9cIJNohHTShSDJ5NN8XSc72EiC0uo9YqoYbUpRJnsL3iVG5ifmLvsjBRPkKNH0HbDDwv8Tpo8vgdmDhGazewR8Ntb6M9HPqCBaNXMxd0qrizBuHRtY25a7B87GQaXZZBmjGg=w1080-h828-no?authuser=0",
    hosts: [],
    
  },
  {
    eventName: "Three Hexagons Studio",
    eventString: "threehexagonsstudio",
    attendees: [],
    briefDetails: "Hand Crafted Wood Products",
    details: "Fine Art and Food Related Wood Products. Made in Northeast Ohio from Northeast Ohio Hardwoods.",
    eventType: "Pop Up",
    category: { first: "Maker", second: "woodworker" },
    location: "3619 Walton Ave, Cleveland, OH 44113",
    photo1: "https://lh3.googleusercontent.com/WDGs8SYSNHa1WVNAvGXasxFnS_HbPoRGG0UlvdDqk3h22xl6cmcn2QtoDrLaG6CSuev-vEH4LLkIAyLinpkRH3byouKyaB0Q_0cMDqBxMf9vqz4bEzUYBzcintdgRvRm_3qO72iNp-IikZV-tWpQz4B2zvLps1HTae86C7fP6fMiXftoj2gQulEShMeYlt4D-LKj_Y100PHITLGYq7W39Wbdam2UfLY7QqjkZj-pmczodIFAsGsxYKe1HZelgBWb1HZ4SKu7NUVh77KsPdiEde4XNj4GA3WfjPu-6FFSfVUHtm6zvetjrEHvj-xVbqF1DVe5WRq7fsUTIkO93xPyRshrbaO63pascxjU-hlzr05Wih2WLRwwS-Zgusu8JD-W-biKMvgMI-9f26w5NF85O46CZyKqsEB6tVwwDSVovthjsoAgQhnEOu3Z-DYsC1GLOYNkRdgdTxgUo8xzKfnyG-jZ0lDxicCctXnfiI1EI787Rt5-3XpK6lVyIydhQFL1H0ZoRg9MibUpLuwFTz0ainSIs0v2UChhx3m6v2S3hKX8sKXuKokXJATgvxMwJ8uozP6iHedriefWHvzJu8r28DiSjIfzZbLYu7CQovgIV5o2Yzs4gJhjR1Nf4vjKA3VxyzI0XpcNdVGxJzKD1Xb_IzpcDO415-_8kn0KybhqrUlEGjD7MzR88Kr8STs6dQ=w1061-h939-no?authuser=0", 
    photo2: "https://lh3.googleusercontent.com/GvdsEt7AaLI0rO5wcVEgjBOmSt8fiJStfATNBB94jn6YveT-U4vowlVi51xzSfoLalj-JoBOj-W28ivatmOgyHtGAso1EzbJbpDz20obxsPCW025liinw9O4X-joABoBd8LmR_WC4CtOw2u9XgGr4K9DP7jBsyXvg1A6oF_-iFu7YHvtEXmWIgYjlFDv6t3boKGZn5DUH-R__2b892ghPOT_TcYF0qlgMH0OPc-UCBHTUWnuRogo8zCgzvzkrV8LeEOWNCOzzbCKPjjVJx0ak2qwQGRZMLgQzJ0C22Q7RAbDNb2-ls5Vrw2ZNG7x8eUZFFxHNCw6yLeNjkU6L7V5lcCS6FwRDxe7bjUTK4t_Qc0buTDcTESdH5bVgBCyGGNWbVjmEEUDyBdWsOb52JQDcfU1U3CuH9G78KyZSYZoa3ED5jUDAU4tCQyCu_5l0OSJzHcYLtyGKseXuURjo878Ewx_rPLdvdMlVYGlgsX2hUaD7wmpk-ZDB2RpeZsk8tFK4b0tiSXDkF8xQq_m_ZThFmHdqfvZqunwbHsuT4dVDqY2_1typSxTWJzmen2M0TPoeXTsQM58VLm8yQY6_sUEUZiWprCFaWFrqdHOv3D7gr7w-wsZaV9cQkVC0fEStxlWd3B0JsAsi757h6LNTJ6Jcxnw5F8Gx69-0R0coAxqG-oVoef5L1yKe6O1k7qbhQ=w1080-h774-no?authuser=0",
    hosts: [],
   
  },
  {
    eventName: "The Roaming Biscuit",
    eventString: "theroamingbiscuit",
    attendees: [],
    briefDetails: "A Little Taste of Home Everywhere.",
    details: "Everyone knows how we do, roaming around town providing deliciousness in the form of unrivaled biscuit Sammies. Team Biscuit Slingers we still be popping up around Cleveland but there will be new adventures in the future and new possibilities for The Roaming Biscuit and all of you delightful humans in the Sammie family. We can’t wait to share more as it all unfolds in 2021!",
    eventType: "Pop Up",
    category: { first: "Food", second: "breakfast" },
    location: "6030 Middle Ridge Rd, Madison, OH 44057",
    photo1: "https://lh3.googleusercontent.com/j8g-Ob7qWGCzPqutQdhV5ZvYYSanoU2OO0lWNjriq-Yxa7yCIxt9Ft3fKT_aV6gEVEB69qP4IsAn_gYZugHsYSzeN6vYNO7niPl6Jc0vo5hfLnQIJRl9FddpHK5fMNcTodFqpPXZhGpdv70i3Y3RaW1izuG53ozFMoF5FMnOo6blG0Pip68VW4QI4NerYxdBZvH_-71g7MOzBVSR85bFgKExC3sZRAF4pYf5Y8lax2B6erDSX5htSG5xqmAgxIvKkYUhaIxdZpBbW-NDHk8YklDPoYUDATdP2kTXmzAsxp3Qcnwo6-zoSQcUsuEgDem42ZUvBMRI_L5exQ7mdOvtW6iSWC679bg4EcUvbuxkGRneKsH4dVWzOJNlUOGE_LfNH4auI_TbJVhGrC21gXRePMOiZ8Dx7UYRIGz-bwHZFpxZeCNZMAljZjMmZXLTjKeNppurZt8v9Oa2Legs3OmhzGB7k6UeedNztxMD_8cvbjJaySQv3lbDd6xWPZqKDWpw-njL8G1BlPqg7oWqk9rzpHXuMtM8fIW8JSgwLJCFJZFFGBhq7zISCybPzj_iBTaQMlyfu1s8kzvCjC-bEHrkmSLfL55XrvZY5ETB5IUlPQ7ToDzBBUEdAkqYd9vGgA5ulmDLJ_fap19gr0kAeELfeQYOUK2aifn7M9JsQx3vcDHAEGsH1GXRzSiC6ZeKnQ=w435-h283-no?authuser=0", 
    photo2: "https://lh3.googleusercontent.com/MUUAp0wfTxMzQ7tCGU0yLOZFtpoHoigkpYbMf09Wp5MU2jY79GGkNieU3Dtrjyg40_LceKLjvIPk6dqBefD_3F4fyPo0Q8_ixqqfGb-n4_OqkmYsKuFSFOuY4LzKQCzwKdg3bciAg1lr5nSR8hKSurNdwT50XfQ0DueiKYM43PUcQ-jNgK-CswKV_3FSaJUoGobCiCmOjokDr8otdoa5R2Rj51pTlLDzejiJ5kdxCcQ4V30ZMZ-hO4Lorp_uj0fULQKahZky6RAoC1xdVLXZ6cZPqpxxq7cG1q-UhojYCAeBwyA8w7QMYwPicvMJSCracsQDjc85UdDbMDunPcQbmDLxejRFn_KRjELg5y_l1vxlk8F5ZzYaDhR7k8ZmKzUXm_5GKcRfKDDp_av2xpSYSySoWiJEk_5i4noaCk8AbqNpWH8FnnjbRBy2pP3h_moYEiYlTVun9Mjm3iHRAkPV2n8nFx177QgRjQszzvcAjqAIxqI2tTHkCWCwu3duxKDgpQfyZRH4jcYrFndxGUdrSiE3M-8MwciDJF_PBthKvjHZ0WfwnXaFG4lOFosJ5nG02ySP4W59LyaJz-o1HbLtjxLhxHvaNHtPZV4d5mm-vvoRG3ueJC6nV9dApdETGqkJ0WEFm5whHbAhX5GQkZnmOBVJI972G7Xb5tnxmLUdLb4Q-jh3b_C0Iz5U2PurGQ=w1039-h640-no?authuser=0",
    hosts: [],
    
  },
  {
    eventName: "Taco Libre",
    eventString: "tacolibre",
    attendees: [],
    briefDetails: "Can you beat the heat?",
    details: "They call me, 'El Ruso'. I started to work grilling meats in the number one taqueria of Culiacán, Sinaloa, named 'La Carreta de Lichi' by Mr. Alfredo Valdez Zazueta in 1996. There I learned that work dignifies a person. I went on to work in different restaurants and taquerias in Mazatlán - Mexicali - Guadalajara - Nuevo Laredo, Tamaulipas - Ímuris, Sonora and Tijuana, Baja California. The last, being my place of birth. I tried to make sure that all the restaurants where I worked were the number one in quality and famous places in the cities where they were located, and I obtained it today, what I humbly do, is a little bit of each of those places. I hope that you like my food. I will try to grow and be able to offer more meals that I know to prepare. I give you my hard work and my dreams with love in every dish I give you. Enjoy, Pura Calidad!",
    eventType: "Pop Up",
    category: { first: "Food", second: "breakfast" },
    location: "6030 Middle Ridge Rd, Madison, OH 44057",
    photo1: "https://lh3.googleusercontent.com/K38O-TYm1LDGkkSqXwkGpvA2pumXhSLTLaH5-vnV5krYhrp4vG8yTq9X0wlVPC6etg7bqA6P5luS9TwGixM9l6pVxsuJzNmFEcmludL6oZuj1l0oh2NMmm9B_uq2E46wmw3FBw0gpHIp9hXZ72HY-pRcuShcEMg9hr0maFI2_NumQVbM0ejgDILRbf8yo4SSKFpu-d1adh5jDX9E8NahK-keUVqpcDOJe3Law8KAyAXX7tKfpoRFmZwv4kuPKdLY8yyWWcZkkpCYDtvJro8Npoe8KMUAbrNGhBKTOTEKqcyYLNnSRZseG5ND1dsXLqH5aBpbCUjV11uQv-_KRzzU5rvVlEhQKfEjxM7lQYwnypsqKaM5IoaLHfZXgjv3rRqU8jUJdca7818VOD3jSdTi6VPIwrim-tQEPZwFJVX0gObLvFb0rsAVr9ndq98xIusv38i6jVV99_eBBzetJXGgIGcSoSgHqUe6mhCtO2q3xww-yvMz4lkA4kmuY_FoYqY-N5lnjeVXaSeLFbmn_oSRN1af6RC0KyjITG9Aw25PulrSMGDjwnMiRNU7aaaw3ePamC7lKXixix7ghdSaFkIjxiYWLozKQWr-kBdlGtybMP3cPuZ-nFCbpF1GvnSYsduQ8LwYKdXQYXqTXHPuplbWm10Lm2b-xhdg9IzoKnqyfFX3gTfgMcohKY54jawl5A=w1080-h717-no?authuser=0", 
    photo2: "https://lh3.googleusercontent.com/zEsOghYrCMr0ZYcb6Q0tcbIGuNTbyCO-jZqbtvcjM48EFJriu0kuap70XKTfVj9lAtG4OTmHB7NqovyEJhqUBM-WB3Y1KbZqBPxobotoUnrC54hzPZUGtvknXH0n2pCfq1LSh1c_pbwT3d4Jcb6i5dXsRXjNWVe2oyUf92UNaHiCMPj6NnV5QoPn-j7Pcc5LWIkp7CuecDfa4eOH2MlORUSZyWdsA6n2IQxf0ePeHFnqeb5ZrCwqiXlghEAMyWDbmruD3sIpe675xb0E5WlMUjf5KpxOPCk_dTamUysvXNB1haa6OHcxo3w7VtFtTiK9fdHJuMbDE6LmQkpFFNIA5bCx98Em-b7oMNCKWlRbElLfqTKYCYp3rL_cFOvvdSARu3PgnAPssJuuoDYxYiG6v8HPb2GmFnRZaG5rySj-ymU3LzVvuRxVG6V9U1HydduMjk-5kIrh_YvL0GSY3w8_DBfOTDzV8Csn7R_WFjHUoJqQ4ks7mKhbob_Bw8guVGCYqIzQOyLp8soLI2dE_Fi7EZR1pyS-DguRJ7Ze5sFYi6VRCZqmUpO1XwGYczIJkSzBeSVa9wIeKRDDnwTJ0ZuxIsSEzjx-p--RukHVjWJsx02j5Accvy9RAn_SpCxs16ceBGXrhnoGJUsTcO74VpLxCHKMQR_vIkgJPzOziBC0JX-bikRdaFiu4Mdg_ARkBA=w1242-h820-no?authuser=0",
    hosts: [],
    
  },
  {
    eventName: "Critical Strike Gaming",
    eventString: "criticalstrikegaming",
    attendees: [],
    briefDetails: "Test you might in heroes of the well",
    details: "Heroes of the Well is a very intricate table top battle royal developed by me. I will be hosting occasional pop ups to promote the spread of interest in the game. It involves playing with a squad, drafting unique heroes and doing battle with your skills against other squads and the play field progressively shrinks, come check it out!",
    eventType: "Pop Up",
    category: { first: "Maker", second: "boardgames" },
    location: "3619 Walton Ave, Cleveland, OH 44113",
    photo1: "https://lh3.googleusercontent.com/tvQXheQgtOYoyO7qzaoZZxkjDX8oSlKXO6CzTQGqV_JqdhSVTjqjWNNfvU_23S-EmSMQAyCvCP8ffGcni6ebL3QF-zyCEbD_e0ApDiH1E99pP-ft88005ik4sAhHeLRE8zni6Fn0_QNon3ToqRYXRAU5yWyBECqMDHTt2FrBbGNhucirubCydLXWhtyFd4QFJDmU7DYRFKmkU-1Lxmg0pokCoc4s7Dm7NPwIbaKgwrGeQgU2p6-4NT_EAXOq-nFOzYDwIVOB3neUb75nsFmg2N8fvjGAPrnEjT3numCtZDpybqr0dCVsJdgytxBGdxXvb_UISvTJsJrB4xb1hdKQfa58B7zOdyDwRfWMt2O1yRsq6OzGkd1T-PLR_hUXLcd-TfhKqGFGsS3ZOY_QhdEkPaw2LfYiLgJ8eGQmcBv0cs8nAGas5u03GgmI8dPjFRTpUawXWdZvuHy1ldzeH34mxOLxZB--hKSlJS-LpvDDbCTjzmCIKncHQpeRFfBUesKYZ2idOVedL3fLfRle4ApbIMktav7L37keFOtUO-RZL0UHh1aElxI7wMkMZhwYCOBB2u25poKde-4AQAO_lr0eIkO6Bov7fHvwZklYe9E_nB_cQxoBr-xN2QTkqbZFtmDip-EbEMafFvWMjoxCw2Rm65aJia7iGJeLsOw9bxLjezSzdmf-dk0vxV0kAZKQCg=w945-h405-no?authuser=0", 
    photo2: "https://lh3.googleusercontent.com/sM52yf70I_e53afqa9IqFo3SHv99VQRbF-MUQitzHJcOu0Siqs96zHqtO8dzAHbfic68_fRTqm9yqRB_ydG4iANzyj4HArYB_GNf6gxaNiS2sbJVtV63KfVNlsC61I400VJHv8xjH0beoJX-qpr_qSU4mIghyP_kwEBxDiquvAS0wyJ4i0aqLkWs5tzXXUP3ep0is70jyXPsP4U0pkoxM1JXDYMuE7tI3u2Aci4vcR7TpxoFRSvh2Bqu4gs9Vjf0egIqEn1qSoWGzQp6ebakF1XM6BMI-EbKbI0nOlda4dsATceP5UXlLSauMOifLy-qiWbzshDlJ5KghHy9kRgB9KjYbjotRmW3phkXGSF0IUfSnfU6QnW6eA3IElUWUwjXtskG11x2hfRP8_tGCZZVY90qlU5zA0XgW0K14qEwdP5bgovvAX__7AnlnM0VqdcqJusD72czS3GFX0IJ_UBfChlGKSy96MNUg6uQNavob1w2WDn8fsaKhh6YxcYkSi2fWTin62j_74FDAQqMZu_s81hysJVBu15NLdeMsIOtY5t1xVbSyfUmC6OFWb7m3xpkFIQ01htAPry51QUajuC5Pi7Kt7j5Lgs6rtNQG8jNjytXIJNhfwN92za6FTEY8hG48DJPLIDo60w4dq4ken4-fhAxMW4Nax2ZNwth094lfe91075vQTRT63fmTiMiKw=w453-h342-no?authuser=0",
    hosts: [],
    
  },
  {
    eventName: "The Obvious Wild",
    eventString: "theobviouswild",
    attendees: [],
    briefDetails: "All good things are wild and free",
    details: "Helping provide a better connection to the natural world, our mission is to get people back out there intetacting with nature and its elements. We gather regularyly and do hikes where we ID birds, bugs, animals and plants, mushroom and wild food forays, riverside picnics, bushcrafting workshops and other primal experiences. Come out here and check us out",
    eventType: "Pop Up",
    category: { first: "Maker", second: "wild crafting" },
    location: "9810 Kirtland Chardon Rd, Chardon, OH 44113",
    photo1: "",
    photo2: "",
    hosts: [],
    
  },
  {
    eventName: "Bobbis Botanicals",
    eventString: "bobbisbotanicals",
    attendees: [],
    briefDetails: "Sprays, Scrubs and other beauty products",
    details: "We carefully craft all kinds of beauty products using natural ingredients and locally sourced flowers, herbs and other essences. Come check us out at our pop up markets and try some of our products, if you like them you can sign up for a monthly gift bag curated by us! Hope to see you soon",
    eventType: "Pop Up",
    category: { first: "Maker", second: "wild crafting" },
    location: "9810 Kirtland Chardon Rd, Chardon, OH 44113",
    photo1: "https://lh3.googleusercontent.com/krCmqVGrnt5ZMtxyDYq5arMhV44xkYgmYbD9U_6SW8Rvqvh4hNvYC8r9hfCw0QaFuzNNjLEyHrwZLRZiezjaOXTuJ_KFp968z6bONuRz9iZb-_ZMlp5ALJY643MnXoAELIKm07EFAauZ3OereYgUeUDRKxz_ueEIT2_lh5mw5kJWRcXkNxb4K1H2v6os8HpdgLWaHjttMODuPZRrUowfqlsupcwTPXKrTqghOGlVxcUMT_Dm2tmHBlbzWSJ4Yiotq9ddxOg8KpK12gcnmJkHjruP410eCe_oATmsXBNALdEdgfHBenPp0dKiJ5NRObMoyYj30_m6yxg1jN9qPCGkS-uf7rzWl8qBZfsBznehkNyXMlAC39KkqsfE_AKbeX8bwcFCKMzvCTcQCXNZkdE5rzQqygQCtRxjmFO4CY_pKjnifNr8krirs5mRr7cDu1brUWB_gCHvvw2Aneg63G9vRIdHGWJgRU1CdTZ5auRNli2AVc8pNJ1ujCPLtJk6fnwl8lzvQ8F2dFh0L63jJ3KImai--rFce8m0i2D5Y5of4rOPsdrvFME980dFmQJTARMVptva3DdbhBYItqTpV3Rg53iZoAHFjHjApmnDtuiz0Kfp7qW8uyoPV8G_78lWy8IPBq9IrtTVhBri0PRlnJtYEGPrhZhbxt3WDagCM5tLjW0afzsVqh751rXw3_Qm_A=s640-no?authuser=0", 
    photo2: "https://lh3.googleusercontent.com/K54dPjZEOLQH2bwHhOSRDa0kDJevn3b-yc95dkoWuhWhdM-Dkf64g7cfRmsM80-3N6-C_UZNaOgQqOREWv6gaUcsMFhSh2qwdWcd58r9pbfSysfijOf7M8Yc-33frW8DgknqApSwscuii_RRL7AnHg91Ua37EgsyKtqOQiKbLG4sKn7AKKvonvCiJ5W6uDo3QtcCcJWCqCjb955HK3oO6Zskx2vS7Fu8hNpcTcrHf2IlX_r4ljdvM67TRTuNFstXYCj8KqpQ1OZSyhDuOSLXpr5VtGc_rve3FuqHnLOzVSv2niQ3XqfGhYHxeGhDzdBm9-Pp47RpXtae-lFf9LcZdVji-s6PTjplg2sXGxLmSYnCvSzVYbnpURPpDq-ecpjMWpfCOl5cIz2G4h4fqbK5Bb9Ny2IKvw7263e2ykJZdLH6CbFoxqiBwGIrQHPNQxgxLN8pTjlYQV-vIdPPpTM9NrL4DVZgFUAJOqB9yjAv97YS5QdaQioL_Kgz4qfN-i-RnaL2uGbQLj0I-gqnc1cRO00PeBlbdd6U7v4Xw_qD4ls7lc0fdXlliJtY43EF87vHEJEwLAknkEAkPXk0pApWU9JreYWR5q7fE_pyqtvhnYX3kkKLEHIIa9tZabHyT-kCNEoKe59L5y3dvcZeOlvEd-dQ-jLs-2x7jWfP6EvMA4ARKbrWS91kzFD5hw_lgw=s346-no?authuser=0",
    hosts: [],
    
  },
  {
    eventName: "Wolf Boy Provisions",
    eventString: "wolfboyprovisions",
    attendees: [],
    briefDetails: "Hot Dogs, Bacon, Brats and other cured meats made with local pastured animals",
    details: "Hot of the grill, stop by our pop up and get a dog or a brat, and while you at it pick up a pack of bacon for breaky in the morning. For the better part of a decade we've been honing our butchery and sausage making skills and our proud to offer all our products we do. Come on down and see what all the fuss is a bout!",
    eventType: "Pop Up",
    category: { first: "Food", second: "sausage", third: "hot dogs" },
    location: "10001 Chester Ave, Cleveland, OH 44106",
    photo1: "https://lh3.googleusercontent.com/GydhcntgQQhhCaGf2_xwWSbaln1EeuCKjvCtVxoasJXcfH5hUmfa4Dxl20S7lI3KcwOYQsfMsetwn7GuNRjCM1pt07CwoQsIvfj18alsDeaeRlOcNufXz6jv33fnhrgwOOWOk9iI1ziagbjuCjXVY5auwthPtpbODhTV0XsZ2KwmM-Pb8KhoWbAFxvvbO1ZKihAhrDN8ans1c2yaPFalworelQrPPCgdEcE1Vh5MBy3EafLe-0Dav44_g-eEVYvWQ5Xqjnhj7lBoga-_c9MBOHm-y-U0YtGAhTOWAFN5e3j18ParcrMN8uqt7qsIKfrlflIn1MEAZLpjX-W3rWdG1O-AYV1k03PZleCRtXyyf-vxE_OQOhqDs-9Zz7PWmAHO7DBSkhFaje6MWtL9XGdWmdepW2CTTNKaJdfYow__3AOapeU-DH7cisBcjlVfAuU14qVbFP7TbeELaLHAkhNyYOivAtiGcM6ZuENy_bWRh5AVh-lmVOg0OBEEpseOlfruEgvQf8UyNXIf6l0hgBGymuxdjl6DYWz1MqJYu6cJaFXASkXOfPQUl1vyB4gvEjzFYndDy9Vs_6W-XFEa6g7S1lQhciy1AqV9BmMR1INyLCuEKoQN9Vyxi4wnU84qzK0giZ3YN2QwuCAoP0KPsPd8w5mvbVcx7kShspywXg2pAHsap5vy2lbWAhYgF45Yxw=w637-h330-no?authuser=0", 
    photo2: "https://lh3.googleusercontent.com/b43YcXA3yZCuWuMkpcEzh_3-Py8XevRoplYxtHLQU-EAvi76N3dVmHRgU_cSx_E4k5ERL2UR7Lc4eFA6LDSJr5xASsmTtfBTNu4pRcS9RkTSOBnVDWQQfoDeSDqapUMtbkkclGqfUf3aR_QxECGVMMsJCTx9Z9CRcPIFep1fiLHnTB9OsGsm98XdVHeaVKfsJyJCZhcVSm5p_xQOrjhQpkUF3FI96e9uByLZKBtp9t-pxGAlSzpHe21wkpz0vw9Vp5DPP9bWgoRzmLkhEIM2jiRMTsV_U7wmwBNKSVINkowzm7SPxdWRt4Ut1jCvUMsp--TJr397bwuS1pd6f0JXYTGABirQ1uPX_JHZgUtu4TCBF6r6Fqri6FnDMnjHm8E5NcHxAH9QQCbrloS-6ZeQ4f01SdqvSC2OAaAFRewe1jzkhzui527tUqjxUoqu29lEU9E2dtxlaokv002LLz81zg1PXiF1QbZ3T1ZQlQqy7tCr2frz9-00Ad3fgei380lzVvH2E3c9020tXGR7vcvfxg87xZ6yyrqBtab-i9CFsvAyLrJlCw7ILZodsc8u1Wg0jX3OkdVfiCKYraREnY02-lJ_UwTXOQC0m-XDBFjKuzsPUq9FdLMep_x1jyyDOA3nnmkXdjV5Gro4wBgb6NhQnCHbzDYyDjoKMOatPwRNdijmHtsYrP9HoDusJCIi5w=w1080-h681-no?authuser=0",
    hosts: [],
  }

 
  
];

db.Event.deleteMany({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
