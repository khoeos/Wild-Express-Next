const PageHeader = ({title}) => {
  return (
    <div className="bg-[#F76C6C] py-5">
      <div className="max-w-6xl mx-auto">
      <h1 className="text-white font-bold text-2xl">{title}</h1>
      </div>
    </div>
  )
}

export default PageHeader