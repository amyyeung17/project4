const StatusText = ({status}) => {
  return (
    <>
      <div className="flex-col-center justify-center mt-[6rem]"> 
        <p className="text-status mt-[6rem]"> {status} </p>
      </div>
    </>
  )
}

export default StatusText