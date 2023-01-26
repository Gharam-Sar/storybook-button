import React from 'react';

import Button from './Button';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    Size: {
      control: {
        type: 'select',
      },
      options: ['Small', 'Medium', 'Large'],
    },
  },
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: {
    R:247,
    G:130  ,
   B:140},
     title: 'clicky Primary',
    state: 'Primary',
    Size:"small"
  };
  export const Secondary = Template.bind({});
  Secondary.args = {
    color: {
      R:247,
      G:130  ,
     B:140},
       title: 'clicky Secondary',
      state: 'Secondary',
      Size:"small"

    };
    export const Text = Template.bind({});
    Text.args = {
      color: {
        R:247,
        G:130  ,
       B:140},
         title: 'clicky Text',
        state: 'Text',
        Size:"small"

      };
       



