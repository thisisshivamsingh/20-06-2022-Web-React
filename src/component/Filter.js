import { useSearchParams } from "react-router-dom";
function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("age"));
  console.log(searchParams.get("city"));
  const age = searchParams.get("age");
  const city = searchParams.get("city");
  return (
    <div>
      <h1>Filter Page</h1>
      <h3>Age is : {age}</h3>
      <h3>City is : {city}</h3>
      <input
        type="text"
        onChange={(e) => {
          setSearchParams({ text: e.target.value, age: 10 });
        }}
        placeholder="Set Text in Query Params"
      />
      <button
        onClick={() => {
          setSearchParams({ age: 40 });
        }}
      >
        Set Age in Query Params
      </button>
    </div>
  );
}
export default Filter;
