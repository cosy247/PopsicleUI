import { nextTick } from 'vue';

function checkType(value, types = []) {
  return types.some((type) => {
    if (value instanceof type) return true;
    if (type === Number && typeof value === 'number') return true;
  });
}

export function toSize(value) {
  return String(value).match(/^[0-9]*$/) ? `${value}px` : value;
}

export function toEnum(options, def) {
  const prop = {
    validator(value) {
      return options.includes(value);
    },
    default: def,
  };
  if (typeof def !== 'undefined') {
    prop.default = def;
  }
  return prop;
}

export function toArray(itemType) {
  const prop = {
    type: Array,
    default: [],
  };
  if (itemType) {
    const itemType0 = Array.isArray(itemType) ? itemType : [itemType];
    prop.validator = (value) => {
      return value.every((item) => checkType(item, itemType0));
    };
  }
  return prop;
}

export function toBoolean(def) {
  return {
    type: Boolean,
    default: !!def,
  };
}

export function toInt(range = []) {
  const [min, max] = range;
  return {
    validator(value) {
      if (!String(value).match(/^-?[0-9]*$/)) return false;
      const val = parseInt(value);
      if (typeof min === 'number' && val < min) return false;
      if (typeof max === 'number' && val > max) return false;
      return true;
    },
  };
}

export function toString(def) {
  const prop = {
    type: String,
  };
  if (typeof def !== 'undefined') {
    prop.default = def;
  }
  return prop;
}
