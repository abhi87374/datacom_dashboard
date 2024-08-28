const customStyles= {
    input: (provided, state) => ({
      ...provided,
      color: "yellow",
    }),
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid black",
      color: "yellow",
      background: "black",
      "&:hover": {
        // Overwrittes the different states of border
        background: "gray",
      },
    }),
    singleValue: (provided,state) => ({
      ...provided,
      height: "100%",
      color: "yellow",
      paddingTop: "3px",
    }),
    container: (provided) => ({
      ...provided,
      width: "400px",
      background: "black",
      color: "black",
      border: "none",
      outline: "none",
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: "black",
      },
    }),
    control: (base, state) => ({
      ...base,
      background: "black",
      borderColor: "black",
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        borderColor: "black",
      },
    }),
    menu: (base) => ({
      ...base,
      background: "black",
      color: "yellow",
    }),
}

export default customStyles;