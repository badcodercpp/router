import React, { useState } from 'react';
import { AutoComplete } from 'antd';
import produce from 'immer';

function onSearch(searchText) {
    this.setState(produce(draft => {
        draft.dataSource = !searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)];
        draft.value = searchText;
    }));
};

function onChange(value) {
    this.setState(produce(draft  => {
        draft.value = value;
    }));
};

function onSelect(value) {
    console.log('onSelect', value);
}

function AutoCompleteComponent(params) {
    const initialState = {
        value: '',
        dataSource: []
    }
    const [{value, dataSource}, mutateState] = useState(initialState)
    return (
        <AutoComplete
          value={value}
          dataSource={dataSource}
          style={{ width: 450 }}
          onSelect={onSelect}
          onSearch={onSearch.bind({setState: mutateState})}
          onChange={onChange.bind({setState: mutateState})}
          placeholder="waste disposal support.."
        />
    )
}

export default AutoCompleteComponent;