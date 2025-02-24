const LoadingError = ({refetch, isDisabled}) => {
  return (
    <div>
      <p>loading error...</p> 
      <button disabled={isDisabled} onClick={refetch}>reload</button>
    </div>
  )
}

export default LoadingError;
