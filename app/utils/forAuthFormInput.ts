export function formatToAuthFormInputProps(field: {
  name: string;
  state: { value: string };
  handleBlur: (ev: Event) => void;
  handleChange: (value: string) => void;
}) {
  return {
    'name': field.name,
    'modelValue': field.state.value,
    'onBlur': field.handleBlur,
    'onUpdate:modelValue': field.handleChange,
  };
};
