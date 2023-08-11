import { PublicHeader } from "@/app/shared/components"

const PublicLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <div>
        <PublicHeader />
        <div className="main">{children}</div>
      </div>
    </>
  )
}

export default PublicLayout