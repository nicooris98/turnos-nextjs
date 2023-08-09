const PublicLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <div>
        <h1>Public Layout</h1>
        <div>{children}</div>
      </div>
    </>
  )
}

export default PublicLayout