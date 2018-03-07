module.exports = (condition, message, exitCode = 0) => {
  if (!condition) {
    console.error(message);
    process.exit(exitCode);
  }
};
