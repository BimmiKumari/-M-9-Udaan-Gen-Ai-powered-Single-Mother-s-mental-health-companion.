import RenderSteps from "./RenderSteps"

export default function AddCourse() {
  return (
    <>
      <div className="flex w-full items-start gap-x-6">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-14 text-3xl font-medium text-white">
            Add Course
          </h1>
          <div className="flex-1">
            <RenderSteps />
          </div>
        </div>
       
        <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-dblue p-6 xl:block">
          <p className="mb-8 text-lg text-white"> Course Upload Tips</p>
          <ul className="ml-5 list-item list-disc space-y-4 text-xs text-white">
            <li> Fill all the required field,Put tag and choose category.</li>
            <li>Add section and subsection(Lectures).</li>
            <li>Mark Course as Public and Publish the course. </li>
          </ul>
        </div>
      </div>
    </>
  )
}