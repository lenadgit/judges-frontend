export const parserForm = (form, fieldNames) => {
    let data = {};
  
    if (fieldNames) {
      return fieldNames
        .filter((name) => form[name])
        .reduce((_data, name) => {
          _data[name] = form[name] && (form[name].value || form[name].checked);
          return _data;
        }, data);
    }
  
    return {};
  };