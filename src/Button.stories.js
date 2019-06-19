import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Button } from "./Button";

storiesOf("Button", module)
  .addParameters({
    info: {
      text: "Text to describe the component"
    }
  })
  .addWithJSX("with background", () => <Button bg="palegoldenrod">Hello world</Button>)
  .addWithJSX("with background 2", () => <Button bg="green">Hello world2</Button>);
