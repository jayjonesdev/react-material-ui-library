import React from 'react';

export default (props: IProps) => <div>{props.children}</div>;

interface IProps {
    children: React.ReactNode | React.ReactNodeArray;
}