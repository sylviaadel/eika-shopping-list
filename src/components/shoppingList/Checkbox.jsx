import { useState } from "react";

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <span
        className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
        aria-hidden="true"
      />
    </label>
  );
}
