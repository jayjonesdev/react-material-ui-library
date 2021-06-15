import { fireEvent, render } from '@testing-library/react';
import Checkbox from './index';

it('Displays a label', () => {
    const { getByTestId } = render(
        <Checkbox label='Checkbox Label' />
    );
    const label = getByTestId('checkbox-label');

    expect(label.textContent).toBe('Checkbox Label');
});

it('Execute checkbox click', () => {
    const { getByTestId } = render(
        <Checkbox label='Checkbox Label' />
    );
    const checkbox = getByTestId('checkbox').querySelector('input[type="checkbox"]');

    fireEvent.click(checkbox);
    expect(checkbox).toHaveProperty('checked', true);
});
