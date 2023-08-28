import "./Child.css";

const Child = (props) => {

  console.log(props)
  return (
    <div className={`component ${props.color}`}>
      <h3>Hello Component</h3>
    </div>
  );
};

export default Child;
