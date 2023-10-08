import { useState } from "react";

type Props = {
  onSearch: (term: string) => void;
};

const Search = ({ onSearch }: Props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search a country..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className="bg-element text-color p-6 rounded-md w-full mt-5 outline-none lg:w-[35rem]"
        autoFocus
      />
    </form>
  );
};

export default Search;
