module.exports = (condition, message, exitCode = 0) => {
  if (!condition) {
    console.log(message);
    process.exit(exitCode);
  }
};
