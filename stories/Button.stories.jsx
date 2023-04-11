import React from "react";

function Button() {
  return (
    <button
      style={{
        background: "purple",
        padding: 5,
      }}
    >
      Test PR Button
    </button>
  );
}

const meta = {
  title: "Button",
  component: Button,
};

export default meta;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
  render: () => <Button />,
};
