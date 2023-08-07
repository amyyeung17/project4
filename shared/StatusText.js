const StatusText = ({status}) => {
  return (
    <>
      <div className="flex-col-center justify-center min-h-[12rem]"> 
        <p className="text-status"> {status} </p>
      </div>
    </>
  )
}

export default StatusText