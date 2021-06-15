import { render } from '@testing-library/react';
import ButtonBar from './index';

it('Dialog has 2 children', () => {
    const { getByTestId } = render(
        <ButtonBar>
            <div>Button One</div>
            <div>Button Two</div>
        </ButtonBar>
    );
    const children = getByTestId('button-bar-children');

    expect(children.childElementCount).toEqual(2);
});