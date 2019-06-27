import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { text } from "@storybook/addon-knobs/react";
import { color } from "@storybook/addon-knobs/react";
import { Button } from "./Button";

storiesOf("Button", module)
  .addParameters({
    info: {
      text: "Text to describe the component"
    }
  })
  .addWithJSX("with background", () => <Button bg={text("bg", `green`)}>Hello world</Button>)
  .addWithJSX("with background 2", () => <Button bg="green">Hello world2</Button>)
  .addWithJSX("with background 2", () => (
    <Button bg={color("bg", "green", "group1")}>Hello world2</Button>
  ));
