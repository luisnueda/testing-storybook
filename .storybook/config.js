import { configure, setAddon, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs/react";
import JSXAddon from "storybook-addon-jsx";

setAddon(JSXAddon);
addDecorator(withInfo);
addDecorator(withKnobs);

const req = require.context("../src", true, /.stories.js$/);

function loadStories() {
  require("./welcomeStory");
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
