import React from "react";
// create a header that will be passed a name prop

// the header should be a stateless functional component

// it should use a template literal to concatenate the name prop passed in with the sting "'s fire collection"

const MyNameComp = ({ name }) => {
  return (
    <header>
      <h1>{`${name}'s fire collection`}</h1>
    </header>
  );
};

// function Title(props) {
//         return (
//             <header>{props.name}'s fire collection</header>
//         )
// }

export default MyNameComp;
