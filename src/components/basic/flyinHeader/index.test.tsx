import { fireEvent, render } from '@testing-library/react';
import FlyInHeader from './index';

it('Displays a label', () => {
  const { getByTestId } = render(
    <FlyInHeader title='Flyin Title' onClose={() => {}} />
  );
  const headerText = getByTestId('flyin-header-text');
  
  expect(headerText.textContent).toBe('Flyin Title');
});

it('Execute onClose on button click', () => {
  const setState = jest.fn();
  const { getByTestId } = render(
    <FlyInHeader title='Flyin Title' onClose={setState} />
  );
  const closeButton = getByTestId('flyin-header-close-btn');

  fireEvent.click(closeButton);
  expect(setState).toHaveBeenCalled();
});
