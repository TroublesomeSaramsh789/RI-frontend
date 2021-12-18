import PROVINCE from "../../api/province";
const districtReturn = (value) => {
  return PROVINCE.map((province) => {
    if (province.value == value) {
      return province.districts.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ));
    }
  });
};
export default districtReturn;
