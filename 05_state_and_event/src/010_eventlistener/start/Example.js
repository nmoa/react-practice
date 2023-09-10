const Example = () => {
  const clickHandler = () => {
    alert('クリックされました')
  }
  const hello = () => { return 'hello react' }
  return (
    <>
      <button onClick={clickHandler}>クリックしてね</button >
      <button>クリックしてね</button>
      {hello()}
    </>
  );
};

export default Example;
