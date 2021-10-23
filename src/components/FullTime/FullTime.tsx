interface Props {
  dispatchIsFullTime: (v: boolean) => void;
  isFullTime: boolean;
}

const FullTime = ({ dispatchIsFullTime, isFullTime }: Props) => {
  return (
    <>
      <input
        type="checkbox"
        name="full-time"
        id="fulltime"
        checked={isFullTime}
        onChange={(e) => dispatchIsFullTime(e.target.checked)}
      />
      <label htmlFor="fulltime">Full time</label>
    </>
  );
};

export { FullTime };
