const q = {
  one: {
    value: "question1",
    true: {
      two: {
        value: "question2",
        true: {
          three: {
            value: "question",
            true: {},
            false: {},
          },
        },
        false: {
          three: {
            value: "question",
            true: {},
            false: {},
          },
        },
      },
    },
    false: {
      two: {
        value: "question2",
        true: {
          one: {
            value: "question",
            true: {},
            false: {},
          },
        },
        false: {
          one: {
            value: "question",
            true: {},
            false: {},
          },
        },
      },
    },
  },
};
