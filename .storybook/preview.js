import React from "react";
import { ThemeProvider } from '@material-ui/core';
import { LocationProvider } from '@reach/router';
import theme from '../src/theme';

export const argTypes = {
  // disabled: { control: 'boolean' },
  // color: {
  //   control: {
  //     type: 'select',
  //     options: [
  //       'default',
  //       'inherit',
  //       'primary',
  //       'secondary'
  //     ],
  //   }
  // },
};

export const parameters = {
  controls: { hideNoControlsWarning: true },
  // argTypes: {
  //   disabled: { control: 'boolean' },
  //   color: {
  //     control: {
  //       type: 'inline-radio',
  //       options: [
  //         'default',
  //         'inherit',
  //         'primary',
  //         'secondary'
  //       ],
  //     }
  //   },
  //   size: {
  //     control: {
  //       type: 'inline-radio',
  //       options: [
  //         'large',
  //         'medium',
  //         'small'
  //       ],
  //     }
  //   },
  //   variant: {
  //     control: {
  //       type: 'inline-radio',
  //       options: [
  //         'contained',
  //         'outlined',
  //         'text'
  //       ],
  //     }
  //   }
  // }
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <LocationProvider>
        <Story />
      </LocationProvider>
    </ThemeProvider>
  ),
];
