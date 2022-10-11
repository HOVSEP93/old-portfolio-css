const ParticlesConfig = {
  particles: {
    number: {
      value: 400,
      density: {
        enable: true,
        value_area: 2000,
      },
    },
    // star
    // shape: {
    //   type: "star",
    //   stroke: {
    //     width: 0,
    //     color: "#000000",
    //   },
    //   polygon: {
    //     nb_sides: 5,
    //   },
    // },
    color: {
      value: "#fef9ef",
    },
    opacity: {
      value: 0.5,
      anim: {
        enable: true,
      },
    },
    size: {
      value: 7,
      random: true,
      anim: {
        enable: true,
        speed: 3,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      speed: 0.2,
    },
  },
};

export default ParticlesConfig;
