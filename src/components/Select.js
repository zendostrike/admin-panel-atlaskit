// @flow
import React from "react";
import { CheckboxSelect } from "@atlaskit/select";

const cities = [
  { label: "Adelaide", value: "adelaide", extra: "extra" },
  { label: "Brisbane", value: "brisbane" },
  { label: "Canberra", value: "canberra" },
  { label: "Darwin", value: "darwin" },
  { label: "Hobart", value: "hobart" },
  { label: "Melbourne", value: "melbourne" },
  { label: "Perth", value: "perth" },
  { label: "Sydney", value: "sydney" }
];
// data imported for brevity; equal to the options from Single Select example
const Select = () => (
  <CheckboxSelect
    className="checkbox-select"
    classNamePrefix="select"
    options={[
      ...cities,
      {
        label:
          "super long name that no one will ever read because it's way too long to be a realistic option but it will highlight the flexbox grow and shrink styles",
        value: "test"
      }
    ]}
    placeholder="Agregar filtros"
  />
);

export default Select;
