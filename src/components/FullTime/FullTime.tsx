const FullTime = () => {
  const handleChange = () => {
    console.log('siema');
  };

  return (
    <>
      <input
        type="checkbox"
        name="full-time"
        id="fulltime"
        checked={true}
        onChange={handleChange}
      />
      <label htmlFor="fulltime">Full time</label>
    </>
  );
};

export { FullTime };
