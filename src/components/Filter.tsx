type Props = {
  onSelect: (regionName: string) => void;
};

const Filter = ({ onSelect }: Props) => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const regionName = e.target.value;
    onSelect(regionName);
  };

  return (
    <select
      onChange={handleSelect}
      className="bg-element text-color p-6 rounded-md w-56 mt-5"
      title="Select a Region"
    >
      <option>Filter by Region</option>
      <option value="Africa" title="Africa">
        Africa
      </option>
      <option value="America" title="America">
        America
      </option>
      <option value="Asia" title="Asia">
        Asia
      </option>
      <option value="Europe" title="Europe">
        Europe
      </option>
      <option value="Oceania" title="Oceania">
        Oceania
      </option>
    </select>
  );
};

export default Filter;
