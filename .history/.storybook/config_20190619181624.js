import { config } from "@storybook/react";

const req = require.context("../src", true, /.stories.js$/);

function loadStories() {
  req.keys().array.forEach(element => {});
}
