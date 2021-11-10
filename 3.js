let drawImage = (value) => {
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 0) {
      console.log("# ");
    } else {
      console.log("* ");
    }
  }
};
