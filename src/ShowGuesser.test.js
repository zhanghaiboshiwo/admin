import React from 'react';
import {TextField} from 'react-admin';
import {shallow} from 'enzyme';
import FieldGuesser from './FieldGuesser';

import {API_INPUT_DATA, API_FIELDS_DATA} from './common-test/common-data-test';
import {ShowGuesserComponent} from './ShowGuesser';

describe('<ShowGuesser />', () => {
  test('renders with no children', () => {
    const wrapper = shallow(
      <ShowGuesserComponent
        resource="user"
        resourceSchema={{name: 'users', title: 'User'}}
        data={API_INPUT_DATA}
        fields={API_FIELDS_DATA}
        id="ShowComponentId"
      />,
    );

    expect(wrapper).toContainReact(
      <FieldGuesser source="fieldA" addLabel={true} />,
    );
    expect(wrapper).toContainReact(
      <FieldGuesser source="fieldB" addLabel={true} />,
    );
    expect(wrapper).toContainReact(
      <FieldGuesser source="deprecatedField" addLabel={true} />,
    );
  });

  test('renders with custom fields', () => {
    const wrapper = shallow(
      <ShowGuesserComponent
        resource="user"
        data={API_INPUT_DATA}
        fields={API_FIELDS_DATA}
        id="ShowComponentId">
        <TextField source="id" label={'label of id'} />
        <TextField source="title" label={'label of title'} />
        <TextField source="body" label={'label of body'} />
      </ShowGuesserComponent>,
    );

    expect(wrapper).toContainReact(
      <TextField source="id" label={'label of id'} />,
    );
    expect(wrapper).toContainReact(
      <TextField source="title" label={'label of title'} />,
    );
    expect(wrapper).toContainReact(
      <TextField source="body" label={'label of body'} />,
    );
  });
});
