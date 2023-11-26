import typecolors from "../Components/typecolors";

const getTypeInfo = (type) => {
    const typeName = type.type.name.toLowerCase();
    return {
      name: typeName,
      color: typecolors[typeName],
    };
  };

  export default getTypeInfo;

  