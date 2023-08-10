import { PublicLayoutNavbar } from "@/app/shared/components/layout"

const PublicLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <div>
        <PublicLayoutNavbar />
        <div className="main">{children}</div>
      </div>
    </>
  )
}

export default PublicLayout